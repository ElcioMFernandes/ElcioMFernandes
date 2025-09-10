import {
  GithubStats,
  RepositoryCard,
  RepositoryCardSkeleton,
} from "@/components";
import {
  Pagination,
  PaginationLink,
  PaginationItem,
  PaginationContent,
  PaginationNext,
  PaginationEllipsis,
  PaginationPrevious,
} from "@/components/Pagination";
import { useState } from "react";
import { useRepositories } from "@/hooks/useRepositories";

const getPaginationRange = (totalPages: number, currentPage: number) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, "...", totalPages];
  }

  if (currentPage >= totalPages - 3) {
    return [
      1,
      "...",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};

export const Projects = () => {
  const [page, setPage] = useState(1);
  const { data, loading, total, perPage } = useRepositories({ page });

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= total) {
      setPage(newPage);
    }
  };

  const paginationRange = getPaginationRange(total, page);

  return (
    <div className="p-8 md:p-12 lg:p-20 flex flex-col h-full">
      <h2 className="text-3xl font-bold select-none mb-8 sm:text-4xl md:text-5xl">
        My Projects and Contributions
      </h2>
      <GithubStats />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 content-start">
        {loading
          ? Array.from({ length: perPage }).map((_, index) => (
              <RepositoryCardSkeleton key={index} />
            ))
          : data.map((repo) => <RepositoryCard key={repo.id} repo={repo} />)}
      </div>
      {total > 1 && (
        <Pagination className="mt-4 sm:mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(page - 1);
                }}
                className={`cursor-none ${
                  page === 1 && "pointer-events-none opacity-50"
                }`}
              />
            </PaginationItem>
            {paginationRange.map((p, index) => {
              if (typeof p === "string") {
                return <PaginationEllipsis key={`ellipsis-${index}`} />;
              }
              return (
                <PaginationItem key={p}>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(p);
                    }}
                    isActive={page === p}
                    className="cursor-none"
                  >
                    {p}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(page + 1);
                }}
                className={`cursor-none ${
                  page === total && "pointer-events-none opacity-50"
                }`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

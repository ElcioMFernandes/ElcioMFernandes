import { useRepositories } from "@/hooks/useRepositories";
import { Star, GitFork } from "lucide-react";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/Pagination";

export const Projects = () => {
  const [page, setPage] = useState(1);
  const { data, loading, total } = useRepositories({ page });

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= total) {
      setPage(newPage);
    }
  };

  return (
    <div className="p-8 md:p-12 lg:p-20 flex flex-col h-full">
      <h2 className="text-3xl font-bold select-none mb-8 sm:text-4xl md:text-5xl">
        My Projects and Contributions
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 flex-grow content-start">
        {loading
          ? Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="rounded-lg border border-neutral-200 bg-white p-6 shadow-md dark:border-neutral-800 dark:bg-neutral-900 animate-pulse"
              >
                <div className="h-6 bg-gray-300 rounded w-3/4 dark:bg-gray-700"></div>
                <div className="h-4 bg-gray-300 rounded w-full mt-3 dark:bg-gray-700"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6 mt-2 dark:bg-gray-700"></div>
              </div>
            ))
          : data.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-none flex flex-col justify-between rounded-lg border border-neutral-200 bg-white p-6 shadow-md transition-transform hover:scale-101 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div>
                  <h3 className="text-xl font-bold text-primary">
                    {repo.name}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                    {repo.description || "No description available."}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
                  <span className="font-mono">{repo.language || "N/A"}</span>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-4 w-4" />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
      </div>
      {total > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(page - 1);
                }}
                className={`cursor-none ${
                  page === 1 && "pointer-events-none  opacity-50"
                }`}
              />
            </PaginationItem>
            {Array.from({ length: total }, (_, i) => i + 1).map((p) => (
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
            ))}
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

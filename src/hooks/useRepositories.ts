import * as React from "react";
import type { Repository } from "@/types/repository";

export const useRepositories = ({ page }: { page: number }) => {
  const [data, setData] = React.useState<Repository[]>([]);
  const [error, setError] = React.useState<Error | null>(null);
  const [total, setTotal] = React.useState(1);
  const [loading, setLoading] = React.useState(true);

  async function request(page: number) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.github.com/users/ElcioMFernandes/repos?sort=updated&direction=desc&per_page=9&page=${page}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch repositories");
      }

      const header = response.headers.get("Link");
      if (header) {
        const links = header.split(",").reduce((acc, link) => {
          const match = link.match(/<(.+)>; rel="(.+)"/);
          if (match) {
            acc[match[2]] = match[1];
          }
          return acc;
        }, {} as Record<string, string>);

        if (links.last) {
          const url = new URL(links.last);
          const last = url.searchParams.get("page");
          if (last) {
            const lastPage = parseInt(last, 10);
            if (total !== lastPage) {
              setTotal(lastPage);
            }
          }
        }
      } else if (page === 1) {
        const repos = await response.json();
        setData(repos);
        setTotal(repos.length > 0 ? 1 : 0);
        setLoading(false);
        return;
      }

      setData(await response.json());
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    request(page);
  }, [page]);

  return { data, error, loading, total };
};

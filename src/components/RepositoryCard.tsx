import { GitFork, Star } from "lucide-react";
import type { Repository } from "@/types/repository";
import { Badge } from "./Badge";

interface RepositoryCardProps {
  repo: Repository;
}

export const RepositoryCard = ({ repo }: RepositoryCardProps) => {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-full cursor-pointer flex-col justify-between rounded-lg border border-neutral-200 bg-white p-6 shadow-md transition-transform hover:scale-101 dark:border-neutral-800 dark:bg-neutral-900"
    >
      <div>
        <h3 className="text-xl font-bold text-primary">{repo.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400">
          {repo.description || "No description available."}
        </p>
        {repo.topics && repo.topics.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {repo.topics.map((topic) => (
              <Badge key={topic} variant="secondary">
                {topic}
              </Badge>
            ))}
          </div>
        )}
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
  );
};

export const RepositoryCardSkeleton = () => (
  <div className="animate-pulse rounded-lg border border-neutral-200 bg-white p-6 shadow-md dark:border-neutral-800 dark:bg-neutral-900">
    <div className="h-6 w-3/4 rounded bg-gray-300 dark:bg-gray-700"></div>
    <div className="mt-3 h-4 w-full rounded bg-gray-300 dark:bg-gray-700"></div>
    <div className="mt-2 h-4 w-5/6 rounded bg-gray-300 dark:bg-gray-700"></div>
  </div>
);

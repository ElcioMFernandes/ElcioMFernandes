import { type LucideIcon } from "lucide-react";
import { NumberTicker } from "./NumberTicker";

interface StatCardProps {
  Icon: LucideIcon;
  label: string;
  value: number | string;
  loading: boolean;
}

export const StatCard = ({ Icon, label, value, loading }: StatCardProps) => {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900">
      {loading ? (
        <div className="animate-pulse">
          <div className="h-8 w-24 rounded bg-gray-300 dark:bg-gray-700"></div>
          <div className="mt-2 h-4 w-20 rounded bg-gray-300 dark:bg-gray-700"></div>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
            <Icon className="h-4 w-4" />
            <span className="text-xs">{label}</span>
          </div>
          <NumberTicker
            value={Number(value)}
            className="mt-2 text-2xl font-bold text-primary"
          />
        </>
      )}
    </div>
  );
};

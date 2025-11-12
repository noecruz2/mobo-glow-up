import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  color: "slate" | "gray" | "blue" | "teal" | "amber" | "rose";
}

const colorVariants = {
  slate: "bg-stat-slate",
  gray: "bg-stat-gray",
  blue: "bg-stat-blue",
  teal: "bg-stat-teal",
  amber: "bg-stat-amber",
  rose: "bg-stat-rose",
};

export const StatsCard = ({ title, value, icon: Icon, color }: StatsCardProps) => {
  return (
    <div className="group bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50 overflow-hidden">
      <div className="flex items-stretch">
        {/* Color bar and icon */}
        <div className={cn("w-24 flex items-center justify-center", colorVariants[color])}>
          <Icon className="h-8 w-8 text-white" strokeWidth={2} />
        </div>

        {/* Content */}
        <div className="flex-1 p-4">
          <p className="text-xs text-muted-foreground font-medium mb-1">{title}</p>
          <p className="text-3xl font-bold text-foreground">{value.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

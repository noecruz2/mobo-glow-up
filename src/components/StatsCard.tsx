import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  color: "blue" | "cyan" | "orange" | "green" | "red" | "darkred";
}

const colorVariants = {
  blue: "bg-blue-500",
  cyan: "bg-cyan-500",
  orange: "bg-orange-500",
  green: "bg-emerald-500",
  red: "bg-red-600",
  darkred: "bg-red-700",
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

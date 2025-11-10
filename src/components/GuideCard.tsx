import { FileText, Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface GuideCardProps {
  title: string;
  href?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const GuideCard = ({ title, href = "#", className, style }: GuideCardProps) => {
  return (
    <a
      href={href}
      style={style}
      className={cn(
        "group relative bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1",
        "border border-border/50 hover:border-primary/30",
        "flex flex-col items-center justify-center text-center gap-4",
        "min-h-[160px]",
        className
      )}
    >
      {/* Icon */}
      <div className="relative">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-destructive/10 to-destructive/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <FileText className="h-7 w-7 text-destructive" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Download className="h-3 w-3 text-primary" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold text-card-foreground leading-tight">
        {title}
      </h3>

      {/* Hover Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </a>
  );
};

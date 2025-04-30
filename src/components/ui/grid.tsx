
import React from "react";
import { cn } from "@/lib/utils";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  children: React.ReactNode;
}

export function Grid({ 
  className, 
  columns = 1, 
  children,
  ...props 
}: GridProps) {
  const gridColumnsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5",
    6: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
    7: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7",
    8: "grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8",
    9: "grid-cols-1 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-9",
    10: "grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-10",
    11: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-11",
    12: "grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-12",
  };

  return (
    <div 
      className={cn(
        "grid", 
        gridColumnsClass[columns], 
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

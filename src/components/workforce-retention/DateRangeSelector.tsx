
import React, { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";
import { format } from "date-fns";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

export type DateRange = {
  from: Date;
  to: Date;
};

export type DateRangeType = "YTD" | "Past Month" | "Past 12 Months" | "Custom Range";

interface DateRangeSelectorProps {
  selectedRange: DateRangeType;
  customDateRange: DateRange | null;
  onRangeSelect: (range: DateRangeType, customRange?: DateRange) => void;
}

const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({
  selectedRange,
  customDateRange,
  onRangeSelect,
}) => {
  const [isCustomDialogOpen, setIsCustomDialogOpen] = useState(false);
  const [tempFromDate, setTempFromDate] = useState<Date | undefined>(customDateRange?.from);
  const [tempToDate, setTempToDate] = useState<Date | undefined>(customDateRange?.to);

  const handleRangeSelect = (range: DateRangeType) => {
    if (range === "Custom Range") {
      setIsCustomDialogOpen(true);
    } else {
      onRangeSelect(range);
    }
  };

  const handleCustomRangeApply = () => {
    if (tempFromDate && tempToDate) {
      onRangeSelect("Custom Range", { from: tempFromDate, to: tempToDate });
      setIsCustomDialogOpen(false);
    }
  };

  const handleCustomRangeCancel = () => {
    setIsCustomDialogOpen(false);
    // Reset temp dates to current custom range or undefined
    setTempFromDate(customDateRange?.from);
    setTempToDate(customDateRange?.to);
  };

  const formatCustomRange = () => {
    if (customDateRange) {
      return `${format(customDateRange.from, "MMM dd")} - ${format(customDateRange.to, "MMM dd, yyyy")}`;
    }
    return "Select dates";
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-700">Date Range:</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              {selectedRange === "Custom Range" && customDateRange 
                ? formatCustomRange() 
                : selectedRange
              }
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 bg-white border shadow-lg z-50">
            <DropdownMenuItem onClick={() => handleRangeSelect("YTD")}>
              YTD (Year-to-Date)
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleRangeSelect("Past Month")}>
              Past Month
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleRangeSelect("Past 12 Months")}>
              Past 12 Months
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleRangeSelect("Custom Range")}>
              Custom Range
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Custom Range Dialog - Completely separate from dropdown */}
      <Dialog open={isCustomDialogOpen} onOpenChange={setIsCustomDialogOpen}>
        <DialogTrigger asChild>
          <div style={{ display: 'none' }} />
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Select Custom Date Range</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-medium text-gray-600">From Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !tempFromDate && "text-muted-foreground"
                      )}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {tempFromDate ? format(tempFromDate, "MMM dd, yyyy") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white z-[100]" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={tempFromDate}
                      onSelect={setTempFromDate}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-gray-600">To Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !tempToDate && "text-muted-foreground"
                      )}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {tempToDate ? format(tempToDate, "MMM dd, yyyy") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white z-[100]" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={tempToDate}
                      onSelect={setTempToDate}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCustomRangeCancel}
              >
                Cancel
              </Button>
              <Button
                size="sm"
                onClick={handleCustomRangeApply}
                disabled={!tempFromDate || !tempToDate}
              >
                Apply
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DateRangeSelector;

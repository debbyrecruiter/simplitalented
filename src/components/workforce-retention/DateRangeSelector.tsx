
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
  const [isCustomRangeOpen, setIsCustomRangeOpen] = useState(false);
  const [tempFromDate, setTempFromDate] = useState<Date | undefined>(customDateRange?.from);
  const [tempToDate, setTempToDate] = useState<Date | undefined>(customDateRange?.to);

  const handleRangeSelect = (range: DateRangeType) => {
    if (range === "Custom Range") {
      // Use setTimeout to ensure the dropdown closes first, then open the custom range popup
      setTimeout(() => {
        setIsCustomRangeOpen(true);
      }, 100);
    } else {
      onRangeSelect(range);
    }
  };

  const handleCustomRangeApply = () => {
    if (tempFromDate && tempToDate) {
      onRangeSelect("Custom Range", { from: tempFromDate, to: tempToDate });
      setIsCustomRangeOpen(false);
    }
  };

  const handleCustomRangeCancel = () => {
    setIsCustomRangeOpen(false);
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

      {/* Custom Range Date Picker - Now completely separate from dropdown */}
      <Popover open={isCustomRangeOpen} onOpenChange={setIsCustomRangeOpen}>
        <PopoverTrigger asChild>
          <div style={{ display: 'none' }} />
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-white border shadow-lg z-[60]" align="start">
          <div className="p-4 space-y-4">
            <h4 className="font-medium text-sm">Select Custom Date Range</h4>
            
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
                  <PopoverContent className="w-auto p-0 bg-white z-[70]" align="start">
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
                  <PopoverContent className="w-auto p-0 bg-white z-[70]" align="start">
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

            <div className="flex justify-end gap-2 pt-2">
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
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DateRangeSelector;

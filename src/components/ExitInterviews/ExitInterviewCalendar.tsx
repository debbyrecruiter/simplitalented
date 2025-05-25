
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExitInterview {
  id: string;
  employeeName: string;
  date: Date;
  status: 'pending' | 'completed';
  manager: string;
}

// Sample data for exit interviews
const exitInterviews: ExitInterview[] = [
  {
    id: '1',
    employeeName: 'John Smith',
    date: new Date(2025, 0, 28), // January 28, 2025
    status: 'pending',
    manager: 'Sarah Wilson'
  },
  {
    id: '2',
    employeeName: 'Emily Johnson',
    date: new Date(2025, 0, 30), // January 30, 2025
    status: 'completed',
    manager: 'David Chen'
  },
  {
    id: '3',
    employeeName: 'Michael Brown',
    date: new Date(2025, 1, 3), // February 3, 2025
    status: 'pending',
    manager: 'Lisa Taylor'
  },
  {
    id: '4',
    employeeName: 'Sarah Davis',
    date: new Date(2025, 1, 5), // February 5, 2025
    status: 'completed',
    manager: 'Robert Kim'
  }
];

export function ExitInterviewCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  // Get interviews for selected date
  const getInterviewsForDate = (date: Date) => {
    return exitInterviews.filter(interview => 
      interview.date.toDateString() === date.toDateString()
    );
  };

  // Custom day content to show interview summaries
  const dayContent = (date: Date) => {
    const dayInterviews = getInterviewsForDate(date);
    if (dayInterviews.length === 0) return <span>{date.getDate()}</span>;

    return (
      <div className="w-full h-full flex flex-col items-center justify-start p-1">
        <span className="text-sm font-medium mb-1">{date.getDate()}</span>
        <div className="space-y-1 w-full">
          {dayInterviews.map((interview) => (
            <div key={interview.id} className="text-xs">
              <Badge 
                variant={interview.status === 'pending' ? 'default' : 'secondary'}
                className={`text-xs px-1 py-0 h-4 w-full justify-center ${
                  interview.status === 'pending' 
                    ? 'bg-green-500 hover:bg-green-600 text-white' 
                    : 'bg-red-500 hover:bg-red-600 text-white'
                }`}
              >
                {interview.employeeName.split(' ')[0]}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Exit Interview Calendar</CardTitle>
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Pending</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span>Completed</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-md border w-full"
          classNames={{
            months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 w-full",
            month: "space-y-4 w-full",
            table: "w-full border-collapse space-y-1",
            head_row: "flex w-full",
            head_cell: "text-muted-foreground rounded-md w-full font-normal text-[0.8rem] flex-1",
            row: "flex w-full mt-2",
            cell: "h-24 w-full text-center text-sm p-1 relative flex-1 border-r border-b border-muted",
            day: "h-full w-full p-1 font-normal flex flex-col items-center justify-start hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          }}
          components={{
            DayContent: ({ date }) => dayContent(date)
          }}
        />
      </CardContent>
    </Card>
  );
}

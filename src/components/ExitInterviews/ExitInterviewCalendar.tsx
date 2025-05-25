

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
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
  },
  {
    id: '5',
    employeeName: 'Alex Thompson',
    date: new Date(2025, 0, 29), // January 29, 2025
    status: 'pending',
    manager: 'Maria Garcia'
  },
  {
    id: '6',
    employeeName: 'Jessica Lee',
    date: new Date(2025, 0, 31), // January 31, 2025
    status: 'completed',
    manager: 'James Rodriguez'
  },
  {
    id: '7',
    employeeName: 'Ryan Wilson',
    date: new Date(2025, 1, 1), // February 1, 2025
    status: 'pending',
    manager: 'Amanda Foster'
  },
  {
    id: '8',
    employeeName: 'Nicole Martinez',
    date: new Date(2025, 1, 4), // February 4, 2025
    status: 'completed',
    manager: 'Kevin Park'
  },
  {
    id: '9',
    employeeName: 'Daniel Cooper',
    date: new Date(2025, 1, 6), // February 6, 2025
    status: 'pending',
    manager: 'Linda Chen'
  },
  {
    id: '10',
    employeeName: 'Ashley White',
    date: new Date(2025, 1, 7), // February 7, 2025
    status: 'completed',
    manager: 'Mark Johnson'
  },
  {
    id: '11',
    employeeName: 'Chris Anderson',
    date: new Date(2025, 1, 10), // February 10, 2025
    status: 'pending',
    manager: 'Rachel Davis'
  },
  {
    id: '12',
    employeeName: 'Megan Taylor',
    date: new Date(2025, 1, 12), // February 12, 2025
    status: 'completed',
    manager: 'Steven Miller'
  },
  // June 2025
  {
    id: '13',
    employeeName: 'Brian Wilson',
    date: new Date(2025, 5, 5), // June 5, 2025
    status: 'pending',
    manager: 'Jennifer Smith'
  },
  {
    id: '14',
    employeeName: 'Lisa Brown',
    date: new Date(2025, 5, 12), // June 12, 2025
    status: 'completed',
    manager: 'Michael Johnson'
  },
  {
    id: '15',
    employeeName: 'Kevin Lee',
    date: new Date(2025, 5, 18), // June 18, 2025
    status: 'pending',
    manager: 'Sarah Wilson'
  },
  {
    id: '16',
    employeeName: 'Amanda Garcia',
    date: new Date(2025, 5, 25), // June 25, 2025
    status: 'completed',
    manager: 'David Chen'
  },
  // July 2025
  {
    id: '17',
    employeeName: 'Robert Miller',
    date: new Date(2025, 6, 8), // July 8, 2025
    status: 'pending',
    manager: 'Lisa Taylor'
  },
  {
    id: '18',
    employeeName: 'Jennifer Davis',
    date: new Date(2025, 6, 15), // July 15, 2025
    status: 'completed',
    manager: 'Robert Kim'
  },
  {
    id: '19',
    employeeName: 'Mark Rodriguez',
    date: new Date(2025, 6, 22), // July 22, 2025
    status: 'pending',
    manager: 'Maria Garcia'
  },
  {
    id: '20',
    employeeName: 'Rachel Thompson',
    date: new Date(2025, 6, 29), // July 29, 2025
    status: 'completed',
    manager: 'James Rodriguez'
  },
  // August 2025
  {
    id: '21',
    employeeName: 'Steven Foster',
    date: new Date(2025, 7, 6), // August 6, 2025
    status: 'pending',
    manager: 'Amanda Foster'
  },
  {
    id: '22',
    employeeName: 'Linda Park',
    date: new Date(2025, 7, 13), // August 13, 2025
    status: 'completed',
    manager: 'Kevin Park'
  },
  {
    id: '23',
    employeeName: 'James Chen',
    date: new Date(2025, 7, 20), // August 20, 2025
    status: 'pending',
    manager: 'Linda Chen'
  },
  {
    id: '24',
    employeeName: 'Maria Johnson',
    date: new Date(2025, 7, 27), // August 27, 2025
    status: 'completed',
    manager: 'Mark Johnson'
  },
  // September 2025
  {
    id: '25',
    employeeName: 'David Davis',
    date: new Date(2025, 8, 3), // September 3, 2025
    status: 'pending',
    manager: 'Rachel Davis'
  },
  {
    id: '26',
    employeeName: 'Sarah Miller',
    date: new Date(2025, 8, 10), // September 10, 2025
    status: 'completed',
    manager: 'Steven Miller'
  },
  {
    id: '27',
    employeeName: 'Michael Garcia',
    date: new Date(2025, 8, 17), // September 17, 2025
    status: 'pending',
    manager: 'Jennifer Smith'
  },
  {
    id: '28',
    employeeName: 'Emily Rodriguez',
    date: new Date(2025, 8, 24), // September 24, 2025
    status: 'completed',
    manager: 'Michael Johnson'
  },
  // October 2025
  {
    id: '29',
    employeeName: 'John Wilson',
    date: new Date(2025, 9, 1), // October 1, 2025
    status: 'pending',
    manager: 'Sarah Wilson'
  },
  {
    id: '30',
    employeeName: 'Ashley Brown',
    date: new Date(2025, 9, 8), // October 8, 2025
    status: 'completed',
    manager: 'David Chen'
  },
  {
    id: '31',
    employeeName: 'Chris Lee',
    date: new Date(2025, 9, 15), // October 15, 2025
    status: 'pending',
    manager: 'Lisa Taylor'
  },
  {
    id: '32',
    employeeName: 'Nicole Thompson',
    date: new Date(2025, 9, 22), // October 22, 2025
    status: 'completed',
    manager: 'Robert Kim'
  },
  {
    id: '33',
    employeeName: 'Ryan Martinez',
    date: new Date(2025, 9, 29), // October 29, 2025
    status: 'pending',
    manager: 'Maria Garcia'
  },
  // November 2025
  {
    id: '34',
    employeeName: 'Jessica Cooper',
    date: new Date(2025, 10, 5), // November 5, 2025
    status: 'completed',
    manager: 'James Rodriguez'
  },
  {
    id: '35',
    employeeName: 'Daniel White',
    date: new Date(2025, 10, 12), // November 12, 2025
    status: 'pending',
    manager: 'Amanda Foster'
  },
  {
    id: '36',
    employeeName: 'Megan Anderson',
    date: new Date(2025, 10, 19), // November 19, 2025
    status: 'completed',
    manager: 'Kevin Park'
  },
  {
    id: '37',
    employeeName: 'Alex Taylor',
    date: new Date(2025, 10, 26), // November 26, 2025
    status: 'pending',
    manager: 'Linda Chen'
  },
  // December 2025
  {
    id: '38',
    employeeName: 'Brian Davis',
    date: new Date(2025, 11, 3), // December 3, 2025
    status: 'completed',
    manager: 'Mark Johnson'
  },
  {
    id: '39',
    employeeName: 'Lisa Wilson',
    date: new Date(2025, 11, 10), // December 10, 2025
    status: 'pending',
    manager: 'Rachel Davis'
  },
  {
    id: '40',
    employeeName: 'Kevin Brown',
    date: new Date(2025, 11, 17), // December 17, 2025
    status: 'completed',
    manager: 'Steven Miller'
  },
  {
    id: '41',
    employeeName: 'Amanda Lee',
    date: new Date(2025, 11, 24), // December 24, 2025
    status: 'pending',
    manager: 'Jennifer Smith'
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
                    ? 'bg-primary hover:bg-primary/80 text-primary-foreground' 
                    : 'bg-muted hover:bg-muted/80 text-muted-foreground'
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
      <CardContent className="pt-6">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-md bg-white w-full"
          disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
          classNames={{
            months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 w-full",
            month: "space-y-4 w-full",
            table: "w-full border-collapse space-y-1",
            head_row: "flex w-full",
            head_cell: "text-muted-foreground rounded-md w-full font-normal text-[0.8rem] flex-1 [&:nth-child(1)]:hidden [&:nth-child(7)]:hidden",
            row: "flex w-full mt-2",
            cell: "h-24 w-full text-center text-sm p-1 relative flex-1 border-r border-b border-muted [&:nth-child(1)]:hidden [&:nth-child(7)]:hidden",
            day: "h-full w-full p-1 font-normal flex flex-col items-center justify-start hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          }}
          components={{
            DayContent: ({ date }) => dayContent(date)
          }}
        />
        
        <div className="flex gap-4 text-sm mt-4 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span>Pending</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-muted rounded-full"></div>
            <span>Completed</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

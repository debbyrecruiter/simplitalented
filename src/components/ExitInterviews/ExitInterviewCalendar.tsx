
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

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

  // Get all interview dates for highlighting
  const interviewDates = exitInterviews.map(interview => interview.date);

  // Custom day content to show colored dots for interviews
  const dayContent = (date: Date) => {
    const dayInterviews = getInterviewsForDate(date);
    if (dayInterviews.length === 0) return null;

    const hasPending = dayInterviews.some(interview => interview.status === 'pending');
    const hasCompleted = dayInterviews.some(interview => interview.status === 'completed');

    return (
      <div className="flex justify-center items-center gap-1 mt-1">
        {hasPending && <div className="w-2 h-2 bg-green-500 rounded-full"></div>}
        {hasCompleted && <div className="w-2 h-2 bg-red-500 rounded-full"></div>}
      </div>
    );
  };

  const selectedDateInterviews = selectedDate ? getInterviewsForDate(selectedDate) : [];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
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
            className="rounded-md border"
            components={{
              DayContent: ({ date }) => (
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                  <span>{date.getDate()}</span>
                  {dayContent(date)}
                </div>
              )
            }}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            {selectedDate ? `Interviews on ${format(selectedDate, 'MMMM d, yyyy')}` : 'Select a date'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {selectedDateInterviews.length > 0 ? (
            <div className="space-y-3">
              {selectedDateInterviews.map((interview) => (
                <div key={interview.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{interview.employeeName}</h4>
                    <p className="text-sm text-muted-foreground">Manager: {interview.manager}</p>
                  </div>
                  <Badge 
                    variant={interview.status === 'pending' ? 'default' : 'secondary'}
                    className={interview.status === 'pending' ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600 text-white'}
                  >
                    {interview.status === 'pending' ? 'Pending' : 'Completed'}
                  </Badge>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No interviews scheduled for this date.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

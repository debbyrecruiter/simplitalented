
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ScheduleEvent {
  id: string;
  title: string;
  date: Date;
  type: 'training' | 'one-on-one' | 'coaching';
  manager?: string;
  description?: string;
  platform?: string;
  duration?: string;
}

// Sample data for development schedule events (including training from My Learning page)
const scheduleEvents: ScheduleEvent[] = [
  // January 2025
  {
    id: '1',
    title: 'Advanced Project Management',
    date: new Date(2025, 0, 27), // January 27, 2025
    type: 'training',
    description: 'Coursera course kickoff',
    platform: 'Coursera',
    duration: '4 weeks'
  },
  {
    id: '2',
    title: 'Simpli AI Coaching',
    date: new Date(2025, 0, 27), // January 27, 2025 (Monday)
    type: 'coaching',
    description: 'Weekly coaching session'
  },
  {
    id: '3',
    title: '1:1 with Sarah Wilson',
    date: new Date(2025, 0, 29), // January 29, 2025
    type: 'one-on-one',
    manager: 'Sarah Wilson'
  },
  {
    id: '4',
    title: 'Leadership Workshop',
    date: new Date(2025, 0, 31), // January 31, 2025
    type: 'training',
    description: 'Internal training session'
  },
  // February 2025
  {
    id: '5',
    title: 'Simpli AI Coaching',
    date: new Date(2025, 1, 3), // February 3, 2025 (Monday)
    type: 'coaching',
    description: 'Weekly coaching session'
  },
  {
    id: '6',
    title: 'Team Lead Meeting',
    date: new Date(2025, 1, 5), // February 5, 2025
    type: 'one-on-one',
    manager: 'David Chen'
  },
  {
    id: '7',
    title: 'AI for Business Leaders',
    date: new Date(2025, 1, 7), // February 7, 2025
    type: 'training',
    description: 'Executive training program'
  },
  {
    id: '8',
    title: 'Simpli AI Coaching',
    date: new Date(2025, 1, 10), // February 10, 2025 (Monday)
    type: 'coaching',
    description: 'Weekly coaching session'
  },
  {
    id: '9',
    title: '1:1 with Sarah Wilson',
    date: new Date(2025, 1, 12), // February 12, 2025
    type: 'one-on-one',
    manager: 'Sarah Wilson'
  },
  {
    id: '10',
    title: 'Simpli AI Coaching',
    date: new Date(2025, 1, 17), // February 17, 2025 (Monday)
    type: 'coaching',
    description: 'Weekly coaching session'
  },
  {
    id: '11',
    title: 'Data Analysis Workshop',
    date: new Date(2025, 1, 19), // February 19, 2025
    type: 'training',
    description: 'Python data analysis training'
  },
  {
    id: '12',
    title: 'Simpli AI Coaching',
    date: new Date(2025, 1, 24), // February 24, 2025 (Monday)
    type: 'coaching',
    description: 'Weekly coaching session'
  },
  {
    id: '13',
    title: '1:1 with Sarah Wilson',
    date: new Date(2025, 1, 26), // February 26, 2025
    type: 'one-on-one',
    manager: 'Sarah Wilson'
  },
  // March 2025 and beyond with more events
  {
    id: '14',
    title: 'Simpli AI Coaching',
    date: new Date(2025, 2, 3), // March 3, 2025 (Monday)
    type: 'coaching',
    description: 'Weekly coaching session'
  },
  {
    id: '15',
    title: 'Agile Leadership Workshop',
    date: new Date(2025, 2, 5), // March 5, 2025
    type: 'training',
    description: 'LinkedIn Learning course',
    platform: 'LinkedIn Learning',
    duration: '1 week'
  },
  {
    id: '16',
    title: 'Simpli AI Coaching',
    date: new Date(2025, 2, 10), // March 10, 2025 (Monday)
    type: 'coaching',
    description: 'Weekly coaching session'
  },
  {
    id: '17',
    title: '1:1 with Sarah Wilson',
    date: new Date(2025, 2, 12), // March 12, 2025
    type: 'one-on-one',
    manager: 'Sarah Wilson'
  },
  {
    id: '18',
    title: 'Simpli AI Coaching',
    date: new Date(2025, 2, 17), // March 17, 2025 (Monday)
    type: 'coaching',
    description: 'Weekly coaching session'
  },
  {
    id: '19',
    title: 'Communication Skills Training',
    date: new Date(2025, 2, 19), // March 19, 2025
    type: 'training',
    description: 'Professional development workshop'
  },
  {
    id: '20',
    title: 'Simpli AI Coaching',
    date: new Date(2025, 2, 24), // March 24, 2025 (Monday)
    type: 'coaching',
    description: 'Weekly coaching session'
  },
  {
    id: '21',
    title: '1:1 with Sarah Wilson',
    date: new Date(2025, 2, 26), // March 26, 2025
    type: 'one-on-one',
    manager: 'Sarah Wilson'
  },
  {
    id: '22',
    title: 'Simpli AI Coaching',
    date: new Date(2025, 2, 31), // March 31, 2025 (Monday)
    type: 'coaching',
    description: 'Weekly coaching session'
  },
  // April 2025
  {
    id: '23',
    title: 'Design Thinking Workshop',
    date: new Date(2025, 3, 2), // April 2, 2025
    type: 'training',
    description: 'Innovation methodology training'
  },
  {
    id: '24',
    title: 'Simpli AI Coaching',
    date: new Date(2025, 3, 7), // April 7, 2025 (Monday)
    type: 'coaching',
    description: 'Weekly coaching session'
  },
  {
    id: '25',
    title: '1:1 with Sarah Wilson',
    date: new Date(2025, 3, 9), // April 9, 2025
    type: 'one-on-one',
    manager: 'Sarah Wilson'
  },
  {
    id: '26',
    title: 'Simpli AI Coaching',
    date: new Date(2025, 3, 14), // April 14, 2025 (Monday)
    type: 'coaching',
    description: 'Weekly coaching session'
  },
  {
    id: '27',
    title: 'Strategic Planning Course',
    date: new Date(2025, 3, 16), // April 16, 2025
    type: 'training',
    description: 'Executive development program'
  },
  {
    id: '28',
    title: 'Simpli AI Coaching',
    date: new Date(2025, 3, 21), // April 21, 2025 (Monday)
    type: 'coaching',
    description: 'Weekly coaching session'
  },
  {
    id: '29',
    title: '1:1 with Sarah Wilson',
    date: new Date(2025, 3, 23), // April 23, 2025
    type: 'one-on-one',
    manager: 'Sarah Wilson'
  },
  {
    id: '30',
    title: 'Simpli AI Coaching',
    date: new Date(2025, 3, 28), // April 28, 2025 (Monday)
    type: 'coaching',
    description: 'Weekly coaching session'
  },
  // May 2025
  {
    id: '31',
    title: 'Product Management Training',
    date: new Date(2025, 4, 7), // May 7, 2025
    type: 'training',
    description: 'Advanced product strategy'
  },
  {
    id: '32',
    title: 'Simpli AI Coaching',
    date: new Date(2025, 4, 5), // May 5, 2025 (Monday)
    type: 'coaching',
    description: 'Weekly coaching session'
  },
  {
    id: '33',
    title: '1:1 with Sarah Wilson',
    date: new Date(2025, 4, 14), // May 14, 2025
    type: 'one-on-one',
    manager: 'Sarah Wilson'
  },
  {
    id: '34',
    title: 'Simpli AI Coaching',
    date: new Date(2025, 4, 12), // May 12, 2025 (Monday)
    type: 'coaching',
    description: 'Weekly coaching session'
  },
  {
    id: '35',
    title: 'Simpli AI Coaching',
    date: new Date(2025, 4, 19), // May 19, 2025 (Monday)
    type: 'coaching',
    description: 'Weekly coaching session'
  },
  {
    id: '36',
    title: 'Financial Planning Workshop',
    date: new Date(2025, 4, 21), // May 21, 2025
    type: 'training',
    description: 'Budget management training'
  },
  {
    id: '37',
    title: 'Simpli AI Coaching',
    date: new Date(2025, 4, 26), // May 26, 2025 (Monday)
    type: 'coaching',
    description: 'Weekly coaching session'
  },
  {
    id: '38',
    title: '1:1 with Sarah Wilson',
    date: new Date(2025, 4, 28), // May 28, 2025
    type: 'one-on-one',
    manager: 'Sarah Wilson'
  },
  // Training from My Learning page - June 2025
  {
    id: '39',
    title: 'Advanced Project Management',
    date: new Date(2025, 5, 15), // June 15, 2025
    type: 'training',
    platform: 'Coursera',
    duration: '4 weeks',
    description: 'Advanced project management techniques'
  },
  // July 2025
  {
    id: '40',
    title: 'AI for Business Leaders',
    date: new Date(2025, 6, 3), // July 3, 2025
    type: 'training',
    platform: 'Internal Training',
    duration: '2 days',
    description: 'Executive training on AI implementation'
  },
  // August 2025
  {
    id: '41',
    title: 'Agile Leadership Workshop',
    date: new Date(2025, 7, 10), // August 10, 2025
    type: 'training',
    platform: 'LinkedIn Learning',
    duration: '1 week',
    description: 'Agile methodologies for leaders'
  }
];

export function DevelopmentScheduleCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  // Get events for selected date
  const getEventsForDate = (date: Date) => {
    return scheduleEvents.filter(event => 
      event.date.toDateString() === date.toDateString()
    );
  };

  // Get upcoming training sessions (training events that haven't passed yet)
  const getUpcomingTraining = () => {
    const now = new Date();
    return scheduleEvents
      .filter(event => event.type === 'training' && event.date >= now)
      .sort((a, b) => a.date.getTime() - b.date.getTime())
      .slice(0, 10); // Show next 10 upcoming training sessions
  };

  // Calculate completion deadline (60 days after training date)
  const getCompletionDeadline = (trainingDate: Date) => {
    const deadline = new Date(trainingDate);
    deadline.setDate(deadline.getDate() + 60);
    return deadline;
  };

  // Format date for display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Get badge color based on event type
  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'training':
        return 'default'; // Primary blue
      case 'one-on-one':
        return 'secondary'; // Gray
      case 'coaching':
        return 'outline'; // Purple outline
      default:
        return 'default';
    }
  };

  // Get abbreviated title for calendar display
  const getAbbreviatedTitle = (title: string, type: string) => {
    if (type === 'coaching') return 'Simpli';
    if (type === 'one-on-one') return title.split(' ')[2] || 'Meeting';
    return title.split(' ')[0] || title;
  };

  // Custom day content to show event summaries
  const dayContent = (date: Date) => {
    const dayEvents = getEventsForDate(date);
    if (dayEvents.length === 0) return <span>{date.getDate()}</span>;

    return (
      <div className="w-full h-full flex flex-col items-center justify-start p-1">
        <span className="text-sm font-medium mb-1">{date.getDate()}</span>
        <div className="space-y-1 w-full">
          {dayEvents.slice(0, 2).map((event) => (
            <div key={event.id} className="text-xs">
              <Badge 
                variant={getBadgeVariant(event.type)}
                className={`text-xs px-1 py-0 h-4 w-full justify-center ${
                  event.type === 'training' 
                    ? 'bg-primary hover:bg-primary/80 text-primary-foreground'
                    : event.type === 'one-on-one'
                    ? 'bg-muted hover:bg-muted/80 text-muted-foreground'
                    : 'bg-transparent border-purple-500 text-purple-700 hover:bg-purple-50'
                }`}
              >
                {getAbbreviatedTitle(event.title, event.type)}
              </Badge>
            </div>
          ))}
          {dayEvents.length > 2 && (
            <div className="text-xs text-center text-muted-foreground">
              +{dayEvents.length - 2} more
            </div>
          )}
        </div>
      </div>
    );
  };

  const upcomingTraining = getUpcomingTraining();

  return (
    <div className="space-y-6">
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
              <span>Training</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-muted rounded-full"></div>
              <span>1:1 Meetings</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 border border-purple-500 rounded-full"></div>
              <span>Simpli AI Coaching</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Training List */}
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-[#512888]">
            Upcoming Training Sessions
          </CardTitle>
        </CardHeader>
        <CardContent>
          {upcomingTraining.length > 0 ? (
            <div className="space-y-4">
              {upcomingTraining.map((training) => (
                <div key={training.id} className="flex items-center justify-between p-4 border rounded-lg bg-slate-50">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{training.title}</h4>
                    {training.description && (
                      <p className="text-sm text-gray-600 mt-1">{training.description}</p>
                    )}
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-sm text-gray-500">
                        Training Date: {formatDate(training.date)}
                      </span>
                      <span className="text-sm text-red-600 font-medium">
                        Completion Deadline: {formatDate(getCompletionDeadline(training.date))}
                      </span>
                    </div>
                    {training.platform && (
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-gray-500">Platform: {training.platform}</span>
                        {training.duration && (
                          <span className="text-sm text-gray-500">• Duration: {training.duration}</span>
                        )}
                      </div>
                    )}
                  </div>
                  <Badge variant="default" className="bg-primary text-primary-foreground">
                    Training
                  </Badge>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">
              No upcoming training sessions scheduled.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

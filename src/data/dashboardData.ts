
export const performanceData = [
  { month: 'Jan', performance: 65, average: 60 },
  { month: 'Feb', performance: 68, average: 61 },
  { month: 'Mar', performance: 75, average: 62 },
  { month: 'Apr', performance: 73, average: 63 },
  { month: 'May', performance: 70, average: 64 },
  { month: 'Jun', performance: 78, average: 65 },
  { month: 'Jul', performance: 82, average: 66 },
];

export const teamMembers = [
  { 
    id: 1, 
    name: "Alex Morgan", 
    role: "Product Manager", 
    avatarUrl: "https://i.pravatar.cc/300?u=alex@example.com", 
    initials: "AM", 
    status: "active" as const
  },
  { 
    id: 2, 
    name: "Jamie Chen", 
    role: "UI/UX Designer", 
    avatarUrl: "https://i.pravatar.cc/300?u=jamie@example.com", 
    initials: "JC", 
    status: "review" as const
  },
  { 
    id: 3, 
    name: "Taylor Smith", 
    role: "Developer", 
    avatarUrl: "https://i.pravatar.cc/300?u=taylor@example.com", 
    initials: "TS", 
    status: "new" as const
  },
];

export const upcomingReviews = [
  { 
    id: 1, 
    reviewee: {
      name: "Jamie Chen", 
      avatarUrl: "https://i.pravatar.cc/300?u=jamie@example.com", 
      initials: "JC"
    }, 
    type: "Quarterly Review", 
    date: "May 12", 
    time: "2:00 PM" 
  },
  { 
    id: 2, 
    reviewee: {
      name: "Ryan Johnson", 
      avatarUrl: "https://i.pravatar.cc/300?u=ryan@example.com", 
      initials: "RJ"
    }, 
    type: "Performance Evaluation", 
    date: "May 15", 
    time: "10:30 AM" 
  },
];


// Regrettable departures data with detailed employee information
export interface RegrettableDeparture {
  id: number;
  name: string;
  department: string;
  manager: string;
  managerRating: number;
  reason: string;
  performanceScore: number;
}

// Sample data for regrettable departures by month
export const regrettableDeparturesByMonth: Record<string, RegrettableDeparture[]> = {
  "Jan": [
    { id: 101, name: "Emma Thompson", department: "Engineering", manager: "David Chen", managerRating: 3, reason: "Better Compensation", performanceScore: 4 },
    { id: 102, name: "Michael Johnson", department: "Sales", manager: "Sarah Williams", managerRating: 4, reason: "Career Growth", performanceScore: 5 },
  ],
  "Feb": [
    { id: 103, name: "James Rodriguez", department: "Engineering", manager: "David Chen", managerRating: 3, reason: "Work-Life Balance", performanceScore: 4 },
    { id: 104, name: "Sophia Martinez", department: "Marketing", manager: "Thomas Wilson", managerRating: 5, reason: "Better Compensation", performanceScore: 5 },
    { id: 105, name: "Daniel Lewis", department: "Product", manager: "Olivia Brown", managerRating: 4, reason: "Career Growth", performanceScore: 4 },
  ],
  "Mar": [
    { id: 106, name: "Isabella Garcia", department: "Sales", manager: "Sarah Williams", managerRating: 3, reason: "Career Growth", performanceScore: 4 },
    { id: 107, name: "Ethan White", department: "Engineering", manager: "David Chen", managerRating: 4, reason: "Better Compensation", performanceScore: 5 },
    { id: 108, name: "Ava Johnson", department: "HR", manager: "Robert Taylor", managerRating: 3, reason: "Work-Life Balance", performanceScore: 4 },
  ],
  "Apr": [
    { id: 109, name: "Noah Brown", department: "Engineering", manager: "David Chen", managerRating: 2, reason: "Better Compensation", performanceScore: 5 },
    { id: 110, name: "Mia Davis", department: "Marketing", manager: "Thomas Wilson", managerRating: 4, reason: "Career Growth", performanceScore: 4 },
    { id: 111, name: "Liam Wilson", department: "Sales", manager: "Sarah Williams", managerRating: 5, reason: "Work-Life Balance", performanceScore: 5 },
    { id: 112, name: "Charlotte Anderson", department: "Engineering", manager: "David Chen", managerRating: 3, reason: "Better Compensation", performanceScore: 4 },
  ],
  "May": [
    { id: 113, name: "Olivia Jackson", department: "Product", manager: "Olivia Brown", managerRating: 4, reason: "Career Growth", performanceScore: 5 },
    { id: 114, name: "William Taylor", department: "Engineering", manager: "David Chen", managerRating: 3, reason: "Better Compensation", performanceScore: 4 },
    { id: 115, name: "Amelia Thomas", department: "Marketing", manager: "Thomas Wilson", managerRating: 5, reason: "Work-Life Balance", performanceScore: 5 },
    { id: 116, name: "Benjamin Harris", department: "Sales", manager: "Sarah Williams", managerRating: 2, reason: "Management Issues", performanceScore: 4 },
    { id: 117, name: "Harper Martin", department: "Engineering", manager: "David Chen", managerRating: 4, reason: "Better Compensation", performanceScore: 5 },
  ],
  "Jun": [
    { id: 118, name: "Evelyn Lee", department: "HR", manager: "Robert Taylor", managerRating: 3, reason: "Work-Life Balance", performanceScore: 4 },
    { id: 119, name: "Mason Clark", department: "Product", manager: "Olivia Brown", managerRating: 5, reason: "Career Growth", performanceScore: 5 },
  ],
  "Jul": [
    { id: 120, name: "Abigail Lewis", department: "Engineering", manager: "David Chen", managerRating: 3, reason: "Better Compensation", performanceScore: 4 },
    { id: 121, name: "Elijah Walker", department: "Sales", manager: "Sarah Williams", managerRating: 4, reason: "Career Growth", performanceScore: 5 },
    { id: 122, name: "Sofia Allen", department: "Marketing", manager: "Thomas Wilson", managerRating: 3, reason: "Work-Life Balance", performanceScore: 4 },
    { id: 123, name: "Alexander Hall", department: "Engineering", manager: "David Chen", managerRating: 5, reason: "Better Compensation", performanceScore: 5 },
    { id: 124, name: "Emily Young", department: "Product", manager: "Olivia Brown", managerRating: 4, reason: "Career Growth", performanceScore: 4 },
  ],
  "Aug": [
    { id: 125, name: "Lucas King", department: "Engineering", manager: "David Chen", managerRating: 3, reason: "Better Compensation", performanceScore: 5 },
    { id: 126, name: "Avery Wright", department: "Sales", manager: "Sarah Williams", managerRating: 4, reason: "Work-Life Balance", performanceScore: 4 },
    { id: 127, name: "Scarlett Scott", department: "HR", manager: "Robert Taylor", managerRating: 5, reason: "Career Growth", performanceScore: 5 },
    { id: 128, name: "Jackson Green", department: "Engineering", manager: "David Chen", managerRating: 3, reason: "Better Compensation", performanceScore: 4 },
  ],
  "Sep": [
    { id: 129, name: "Grace Adams", department: "Marketing", manager: "Thomas Wilson", managerRating: 4, reason: "Work-Life Balance", performanceScore: 5 },
    { id: 130, name: "Leo Baker", department: "Engineering", manager: "David Chen", managerRating: 3, reason: "Better Compensation", performanceScore: 4 },
    { id: 131, name: "Chloe Nelson", department: "Sales", manager: "Sarah Williams", managerRating: 5, reason: "Career Growth", performanceScore: 5 },
  ],
  "Oct": [
    { id: 132, name: "Zoe Carter", department: "Engineering", manager: "David Chen", managerRating: 3, reason: "Better Compensation", performanceScore: 4 },
    { id: 133, name: "Wyatt Mitchell", department: "Product", manager: "Olivia Brown", managerRating: 4, reason: "Career Growth", performanceScore: 5 },
    { id: 134, name: "Layla Phillips", department: "Marketing", manager: "Thomas Wilson", managerRating: 3, reason: "Work-Life Balance", performanceScore: 4 },
    { id: 135, name: "Owen Evans", department: "Engineering", manager: "David Chen", managerRating: 5, reason: "Better Compensation", performanceScore: 5 },
    { id: 136, name: "Nora Campbell", department: "Sales", manager: "Sarah Williams", managerRating: 2, reason: "Management Issues", performanceScore: 4 },
  ],
  "Nov": [
    { id: 137, name: "Luke Stewart", department: "Engineering", manager: "David Chen", managerRating: 4, reason: "Better Compensation", performanceScore: 5 },
    { id: 138, name: "Aurora Sanchez", department: "HR", manager: "Robert Taylor", managerRating: 3, reason: "Career Growth", performanceScore: 4 },
    { id: 139, name: "Eli Morris", department: "Product", manager: "Olivia Brown", managerRating: 5, reason: "Work-Life Balance", performanceScore: 5 },
  ],
  "Dec": [
    { id: 140, name: "Hannah Rogers", department: "Engineering", manager: "David Chen", managerRating: 3, reason: "Better Compensation", performanceScore: 4 },
    { id: 141, name: "Miles Cooper", department: "Sales", manager: "Sarah Williams", managerRating: 5, reason: "Career Growth", performanceScore: 5 },
  ],
};


// Regrettable departures data with detailed employee information
export interface RegrettableDeparture {
  id: number;
  name: string;
  department: string;
  manager: string;
  departureDate: string;
  reason: string;
  performanceScore: string;
}

// Sample data for regrettable departures by month
export const regrettableDeparturesByMonth: Record<string, RegrettableDeparture[]> = {
  "Jan": [
    { id: 101, name: "Emma Thompson", department: "Engineering", manager: "David Chen", departureDate: "2024-01-05", reason: "Better Compensation", performanceScore: "Exceeds Expectations" },
    { id: 102, name: "Michael Johnson", department: "Sales", manager: "Sarah Williams", departureDate: "2024-01-12", reason: "Career Growth", performanceScore: "Outstanding" },
  ],
  "Feb": [
    { id: 103, name: "James Rodriguez", department: "Engineering", manager: "David Chen", departureDate: "2024-02-03", reason: "Work-Life Balance", performanceScore: "Exceeds Expectations" },
    { id: 104, name: "Sophia Martinez", department: "Marketing", manager: "Thomas Wilson", departureDate: "2024-02-15", reason: "Better Compensation", performanceScore: "Outstanding" },
    { id: 105, name: "Daniel Lewis", department: "Product", manager: "Olivia Brown", departureDate: "2024-02-27", reason: "Career Growth", performanceScore: "Exceeds Expectations" },
  ],
  "Mar": [
    { id: 106, name: "Isabella Garcia", department: "Sales", manager: "Sarah Williams", departureDate: "2024-03-08", reason: "Career Growth", performanceScore: "Exceeds Expectations" },
    { id: 107, name: "Ethan White", department: "Engineering", manager: "David Chen", departureDate: "2024-03-21", reason: "Better Compensation", performanceScore: "Outstanding" },
    { id: 108, name: "Ava Johnson", department: "HR", manager: "Robert Taylor", departureDate: "2024-03-30", reason: "Work-Life Balance", performanceScore: "Exceeds Expectations" },
  ],
  "Apr": [
    { id: 109, name: "Noah Brown", department: "Engineering", manager: "David Chen", departureDate: "2024-04-05", reason: "Better Compensation", performanceScore: "Outstanding" },
    { id: 110, name: "Mia Davis", department: "Marketing", manager: "Thomas Wilson", departureDate: "2024-04-12", reason: "Career Growth", performanceScore: "Exceeds Expectations" },
    { id: 111, name: "Liam Wilson", department: "Sales", manager: "Sarah Williams", departureDate: "2024-04-18", reason: "Work-Life Balance", performanceScore: "Outstanding" },
    { id: 112, name: "Charlotte Anderson", department: "Engineering", manager: "David Chen", departureDate: "2024-04-25", reason: "Better Compensation", performanceScore: "Exceeds Expectations" },
  ],
  "May": [
    { id: 113, name: "Olivia Jackson", department: "Product", manager: "Olivia Brown", departureDate: "2024-05-02", reason: "Career Growth", performanceScore: "Outstanding" },
    { id: 114, name: "William Taylor", department: "Engineering", manager: "David Chen", departureDate: "2024-05-10", reason: "Better Compensation", performanceScore: "Exceeds Expectations" },
    { id: 115, name: "Amelia Thomas", department: "Marketing", manager: "Thomas Wilson", departureDate: "2024-05-17", reason: "Work-Life Balance", performanceScore: "Outstanding" },
    { id: 116, name: "Benjamin Harris", department: "Sales", manager: "Sarah Williams", departureDate: "2024-05-24", reason: "Management Issues", performanceScore: "Exceeds Expectations" },
    { id: 117, name: "Harper Martin", department: "Engineering", manager: "David Chen", departureDate: "2024-05-30", reason: "Better Compensation", performanceScore: "Outstanding" },
  ],
  "Jun": [
    { id: 118, name: "Evelyn Lee", department: "HR", manager: "Robert Taylor", departureDate: "2024-06-07", reason: "Work-Life Balance", performanceScore: "Exceeds Expectations" },
    { id: 119, name: "Mason Clark", department: "Product", manager: "Olivia Brown", departureDate: "2024-06-21", reason: "Career Growth", performanceScore: "Outstanding" },
  ],
  "Jul": [
    { id: 120, name: "Abigail Lewis", department: "Engineering", manager: "David Chen", departureDate: "2024-07-03", reason: "Better Compensation", performanceScore: "Exceeds Expectations" },
    { id: 121, name: "Elijah Walker", department: "Sales", manager: "Sarah Williams", departureDate: "2024-07-12", reason: "Career Growth", performanceScore: "Outstanding" },
    { id: 122, name: "Sofia Allen", department: "Marketing", manager: "Thomas Wilson", departureDate: "2024-07-19", reason: "Work-Life Balance", performanceScore: "Exceeds Expectations" },
    { id: 123, name: "Alexander Hall", department: "Engineering", manager: "David Chen", departureDate: "2024-07-25", reason: "Better Compensation", performanceScore: "Outstanding" },
    { id: 124, name: "Emily Young", department: "Product", manager: "Olivia Brown", departureDate: "2024-07-31", reason: "Career Growth", performanceScore: "Exceeds Expectations" },
  ],
  "Aug": [
    { id: 125, name: "Lucas King", department: "Engineering", manager: "David Chen", departureDate: "2024-08-08", reason: "Better Compensation", performanceScore: "Outstanding" },
    { id: 126, name: "Avery Wright", department: "Sales", manager: "Sarah Williams", departureDate: "2024-08-15", reason: "Work-Life Balance", performanceScore: "Exceeds Expectations" },
    { id: 127, name: "Scarlett Scott", department: "HR", manager: "Robert Taylor", departureDate: "2024-08-22", reason: "Career Growth", performanceScore: "Outstanding" },
    { id: 128, name: "Jackson Green", department: "Engineering", manager: "David Chen", departureDate: "2024-08-29", reason: "Better Compensation", performanceScore: "Exceeds Expectations" },
  ],
  "Sep": [
    { id: 129, name: "Grace Adams", department: "Marketing", manager: "Thomas Wilson", departureDate: "2024-09-05", reason: "Work-Life Balance", performanceScore: "Outstanding" },
    { id: 130, name: "Leo Baker", department: "Engineering", manager: "David Chen", departureDate: "2024-09-12", reason: "Better Compensation", performanceScore: "Exceeds Expectations" },
    { id: 131, name: "Chloe Nelson", department: "Sales", manager: "Sarah Williams", departureDate: "2024-09-19", reason: "Career Growth", performanceScore: "Outstanding" },
  ],
  "Oct": [
    { id: 132, name: "Zoe Carter", department: "Engineering", manager: "David Chen", departureDate: "2024-10-03", reason: "Better Compensation", performanceScore: "Exceeds Expectations" },
    { id: 133, name: "Wyatt Mitchell", department: "Product", manager: "Olivia Brown", departureDate: "2024-10-10", reason: "Career Growth", performanceScore: "Outstanding" },
    { id: 134, name: "Layla Phillips", department: "Marketing", manager: "Thomas Wilson", departureDate: "2024-10-17", reason: "Work-Life Balance", performanceScore: "Exceeds Expectations" },
    { id: 135, name: "Owen Evans", department: "Engineering", manager: "David Chen", departureDate: "2024-10-24", reason: "Better Compensation", performanceScore: "Outstanding" },
    { id: 136, name: "Nora Campbell", department: "Sales", manager: "Sarah Williams", departureDate: "2024-10-31", reason: "Management Issues", performanceScore: "Exceeds Expectations" },
  ],
  "Nov": [
    { id: 137, name: "Luke Stewart", department: "Engineering", manager: "David Chen", departureDate: "2024-11-07", reason: "Better Compensation", performanceScore: "Outstanding" },
    { id: 138, name: "Aurora Sanchez", department: "HR", manager: "Robert Taylor", departureDate: "2024-11-14", reason: "Career Growth", performanceScore: "Exceeds Expectations" },
    { id: 139, name: "Eli Morris", department: "Product", manager: "Olivia Brown", departureDate: "2024-11-21", reason: "Work-Life Balance", performanceScore: "Outstanding" },
  ],
  "Dec": [
    { id: 140, name: "Hannah Rogers", department: "Engineering", manager: "David Chen", departureDate: "2024-12-05", reason: "Better Compensation", performanceScore: "Exceeds Expectations" },
    { id: 141, name: "Miles Cooper", department: "Sales", manager: "Sarah Williams", departureDate: "2024-12-12", reason: "Career Growth", performanceScore: "Outstanding" },
  ],
};

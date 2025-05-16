
// Enhanced compensation data with job codes
export const compensationData = [
  { name: 'Jamie Chen', base: 120000, bonus: 15000, equity: 30000, total: 165000, role: 'Senior Designer', department: 'Design', jobCode: 'D-42' },
  { name: 'Alex Morgan', base: 135000, bonus: 20000, equity: 40000, total: 195000, role: 'Tech Lead', department: 'Engineering', jobCode: 'E-33' },
  { name: 'Taylor Smith', base: 115000, bonus: 12000, equity: 25000, total: 152000, role: 'QA Engineer', department: 'Engineering', jobCode: 'Q-28' },
  { name: 'Jordan Riley', base: 142000, bonus: 18000, equity: 35000, total: 195000, role: 'Tech Lead', department: 'Engineering', jobCode: 'E-33' },
  { name: 'Casey Johnson', base: 118000, bonus: 13000, equity: 24000, total: 155000, role: 'QA Engineer', department: 'Engineering', jobCode: 'Q-28' },
];

// Salary performance data
export const salaryPerformanceData = [
  { name: "Ashton English", jobGrade: "SWE-1", salary: 152000, pir: 50, performance: 5 },
  { name: "Amelie Bartlett", jobGrade: "SWE-1", salary: 178000, pir: 70, performance: 3 },
  { name: "Kye Richardson", jobGrade: "SWE-2", salary: 212000, pir: 90, performance: 2 },
  { name: "Halle Caldwell", jobGrade: "SWE-2", salary: 157000, pir: 37, performance: 5 },
  { name: "Rex Woodward", jobGrade: "SWE-2", salary: 225000, pir: 101, performance: 1 },
  { name: "Elena Schmidt", jobGrade: "SWE-3", salary: 375000, pir: 115, performance: 3 },
  { name: "Sabrina White", jobGrade: "SWE-3", salary: 312000, pir: 95, performance: 5 },
  { name: "Keith Lam", jobGrade: "MKT-1", salary: 170000, pir: 70, performance: 4 },
  { name: "Madeleine Wu", jobGrade: "MKT-1", salary: 210000, pir: 90, performance: 3 },
  { name: "Emmy Mckenzie", jobGrade: "SLS-1", salary: 150000, pir: 55, performance: 2 },
  { name: "Liam Mack", jobGrade: "SLS-1", salary: 175000, pir: 80, performance: 3 },
];

// Chart color palette
export const CHART_COLORS = ['#9320E7', '#F9E79F', '#58D68D', '#EC7063', '#5DADE2', '#AF7AC5'];

// Calculate averages by job code
export const getJobCodeAverages = () => {
  const jobCodeAverages = compensationData.reduce((acc, employee) => {
    if (!acc[employee.jobCode]) {
      acc[employee.jobCode] = { totalSum: 0, count: 0 };
    }
    acc[employee.jobCode].totalSum += employee.total;
    acc[employee.jobCode].count += 1;
    return acc;
  }, {} as Record<string, { totalSum: number; count: number; average?: number }>);

  Object.keys(jobCodeAverages).forEach(jobCode => {
    jobCodeAverages[jobCode].average = 
      jobCodeAverages[jobCode].totalSum / jobCodeAverages[jobCode].count;
  });

  return jobCodeAverages;
};

// Enhanced compensation data with peer comparison
export const getEnhancedCompensationData = () => {
  const jobCodeAverages = getJobCodeAverages();
  return compensationData.map(employee => {
    const jobCodeAvg = jobCodeAverages[employee.jobCode].average || 0;
    const peerDiffPercentage = ((employee.total - jobCodeAvg) / jobCodeAvg) * 100;
    return {
      ...employee,
      peerDiffPercentage: peerDiffPercentage
    };
  });
};

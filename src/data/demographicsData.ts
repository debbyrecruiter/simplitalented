// Gender demographics data
export const genderData = [
  { name: 'Male', value: 58, color: '#0067D9' },
  { name: 'Female', value: 37, color: '#FF6B8A' },
  { name: 'Nonbinary', value: 5, color: '#8B5CF6' },
];

// Gender historical data for year-over-year changes
export const genderHistoricalData = [
  { year: 2020, Male: 62, Female: 35, Nonbinary: 3 },
  { year: 2021, Male: 61, Female: 35, Nonbinary: 4 },
  { year: 2022, Male: 60, Female: 36, Nonbinary: 4 },
  { year: 2023, Male: 59, Female: 36, Nonbinary: 5 },
  { year: 2024, Male: 58, Female: 37, Nonbinary: 5 },
];

// Department gender breakdown
export const departmentGenderData = [
  {
    department: 'Engineering',
    male: 72,
    female: 23,
    nonbinary: 5,
  },
  {
    department: 'Sales',
    male: 55,
    female: 43,
    nonbinary: 2,
  },
  {
    department: 'Marketing',
    male: 40,
    female: 57,
    nonbinary: 3,
  },
  {
    department: 'HR',
    male: 25,
    female: 70,
    nonbinary: 5,
  },
  {
    department: 'Product',
    male: 60,
    female: 30,
    nonbinary: 10,
  },
];

// Promotion percentage by gender
export const genderPromotionData = [
  { name: 'Male', percentage: 15.2 },
  { name: 'Female', percentage: 11.8 },
  { name: 'Nonbinary', percentage: 12.5 },
];

// Gender attrition data
export const genderAttritionData = [
  { 
    gender: "Male", 
    count: 812, 
    attritionRate: 17.3,
    voluntaryRate: 9.8,
    involuntaryRate: 7.5 
  },
  { 
    gender: "Female", 
    count: 518, 
    attritionRate: 15.1,
    voluntaryRate: 8.2,
    involuntaryRate: 6.9 
  },
  { 
    gender: "Nonbinary", 
    count: 70, 
    attritionRate: 14.2,
    voluntaryRate: 9.7,
    involuntaryRate: 4.5 
  }
];

// Year-over-year gender attrition data
export const genderYearOverYearData = [
  { 
    year: 2020, 
    'Male': 18.7, 'Male-voluntary': 10.4, 'Male-involuntary': 8.3,
    'Female': 16.9, 'Female-voluntary': 9.0, 'Female-involuntary': 7.9,
    'Nonbinary': 17.5, 'Nonbinary-voluntary': 10.9, 'Nonbinary-involuntary': 6.6
  },
  { 
    year: 2021, 
    'Male': 18.2, 'Male-voluntary': 10.1, 'Male-involuntary': 8.1,
    'Female': 16.5, 'Female-voluntary': 8.7, 'Female-involuntary': 7.8,
    'Nonbinary': 16.8, 'Nonbinary-voluntary': 10.5, 'Nonbinary-involuntary': 6.3
  },
  { 
    year: 2022, 
    'Male': 17.8, 'Male-voluntary': 10.0, 'Male-involuntary': 7.8,
    'Female': 16.0, 'Female-voluntary': 8.5, 'Female-involuntary': 7.5,
    'Nonbinary': 15.7, 'Nonbinary-voluntary': 10.2, 'Nonbinary-involuntary': 5.5
  },
  { 
    year: 2023, 
    'Male': 17.6, 'Male-voluntary': 9.9, 'Male-involuntary': 7.7,
    'Female': 15.5, 'Female-voluntary': 8.3, 'Female-involuntary': 7.2,
    'Nonbinary': 15.0, 'Nonbinary-voluntary': 10.0, 'Nonbinary-involuntary': 5.0
  },
  { 
    year: 2024, 
    'Male': 17.3, 'Male-voluntary': 9.8, 'Male-involuntary': 7.5,
    'Female': 15.1, 'Female-voluntary': 8.2, 'Female-involuntary': 6.9,
    'Nonbinary': 14.2, 'Nonbinary-voluntary': 9.7, 'Nonbinary-involuntary': 4.5
  }
];

// Race demographics data
export const raceData = [
  { name: 'White', value: 45, color: '#22C55E' },
  { name: 'Asian', value: 23, color: '#3B82F6' },
  { name: 'Black', value: 15, color: '#8B5CF6' },
  { name: 'Hispanic/Latino', value: 12, color: '#EC4899' },
  { name: 'Other', value: 5, color: '#F59E0B' },
];

// Race historical data for year-over-year changes
export const raceHistoricalData = [
  { year: 2020, White: 50, Asian: 20, Black: 13, 'Hispanic/Latino': 12, Other: 5 },
  { year: 2021, White: 48, Asian: 21, Black: 14, 'Hispanic/Latino': 12, Other: 5 },
  { year: 2022, White: 47, Asian: 22, Black: 14, 'Hispanic/Latino': 12, Other: 5 },
  { year: 2023, White: 46, Asian: 22, Black: 15, 'Hispanic/Latino': 12, Other: 5 },
  { year: 2024, White: 45, Asian: 23, Black: 15, 'Hispanic/Latino': 12, Other: 5 },
];

// Department race breakdown
export const departmentRaceData = [
  {
    department: 'Engineering',
    'White': 40,
    'Asian': 35,
    'Black': 10,
    'Hispanic/Latino': 10,
    'Other': 5,
  },
  {
    department: 'Sales',
    'White': 50,
    'Asian': 15,
    'Black': 20,
    'Hispanic/Latino': 12,
    'Other': 3,
  },
  {
    department: 'Marketing',
    'White': 48,
    'Asian': 18,
    'Black': 15,
    'Hispanic/Latino': 15,
    'Other': 4,
  },
  {
    department: 'HR',
    'White': 45,
    'Asian': 15,
    'Black': 25,
    'Hispanic/Latino': 10,
    'Other': 5,
  },
  {
    department: 'Product',
    'White': 42,
    'Asian': 32,
    'Black': 12,
    'Hispanic/Latino': 8,
    'Other': 6,
  },
];

// Promotion percentage by race
export const racePromotionData = [
  { name: 'White', percentage: 14.5 },
  { name: 'Asian', percentage: 16.2 },
  { name: 'Black', percentage: 11.7 },
  { name: 'Hispanic/Latino', percentage: 12.3 },
  { name: 'Other', percentage: 10.8 },
];

// New race attrition data
export const raceAttritionData = [
  { 
    race: "White", 
    count: 630, 
    attritionRate: 14.2,
    voluntaryRate: 9.5,
    involuntaryRate: 4.7 
  },
  { 
    race: "Asian", 
    count: 322, 
    attritionRate: 13.8,
    voluntaryRate: 10.1,
    involuntaryRate: 3.7 
  },
  { 
    race: "Black", 
    count: 210, 
    attritionRate: 18.5,
    voluntaryRate: 11.2,
    involuntaryRate: 7.3 
  },
  { 
    race: "Hispanic/Latino", 
    count: 168, 
    attritionRate: 16.7,
    voluntaryRate: 10.5,
    involuntaryRate: 6.2 
  },
  { 
    race: "Other", 
    count: 70, 
    attritionRate: 15.3,
    voluntaryRate: 9.8,
    involuntaryRate: 5.5 
  },
];

// Year-over-year race attrition data
export const raceYearOverYearData = [
  { 
    year: 2020, 
    'White': 15.8, 'White-voluntary': 10.2, 'White-involuntary': 5.6,
    'Asian': 14.5, 'Asian-voluntary': 10.5, 'Asian-involuntary': 4.0,
    'Black': 20.2, 'Black-voluntary': 12.1, 'Black-involuntary': 8.1,
    'Hispanic/Latino': 18.3, 'Hispanic/Latino-voluntary': 11.5, 'Hispanic/Latino-involuntary': 6.8,
    'Other': 16.7, 'Other-voluntary': 10.3, 'Other-involuntary': 6.4
  },
  { 
    year: 2021, 
    'White': 15.2, 'White-voluntary': 9.9, 'White-involuntary': 5.3,
    'Asian': 14.2, 'Asian-voluntary': 10.3, 'Asian-involuntary': 3.9,
    'Black': 19.6, 'Black-voluntary': 11.8, 'Black-involuntary': 7.8,
    'Hispanic/Latino': 17.5, 'Hispanic/Latino-voluntary': 11.0, 'Hispanic/Latino-involuntary': 6.5,
    'Other': 16.2, 'Other-voluntary': 10.1, 'Other-involuntary': 6.1
  },
  { 
    year: 2022, 
    'White': 14.8, 'White-voluntary': 9.7, 'White-involuntary': 5.1,
    'Asian': 14.0, 'Asian-voluntary': 10.2, 'Asian-involuntary': 3.8,
    'Black': 19.0, 'Black-voluntary': 11.5, 'Black-involuntary': 7.5,
    'Hispanic/Latino': 17.0, 'Hispanic/Latino-voluntary': 10.8, 'Hispanic/Latino-involuntary': 6.2,
    'Other': 15.8, 'Other-voluntary': 10.0, 'Other-involuntary': 5.8
  },
  { 
    year: 2023, 
    'White': 14.5, 'White-voluntary': 9.6, 'White-involuntary': 4.9,
    'Asian': 13.9, 'Asian-voluntary': 10.2, 'Asian-involuntary': 3.7,
    'Black': 18.7, 'Black-voluntary': 11.3, 'Black-involuntary': 7.4,
    'Hispanic/Latino': 16.9, 'Hispanic/Latino-voluntary': 10.6, 'Hispanic/Latino-involuntary': 6.3,
    'Other': 15.5, 'Other-voluntary': 9.9, 'Other-involuntary': 5.6
  },
  { 
    year: 2024, 
    'White': 14.2, 'White-voluntary': 9.5, 'White-involuntary': 4.7,
    'Asian': 13.8, 'Asian-voluntary': 10.1, 'Asian-involuntary': 3.7,
    'Black': 18.5, 'Black-voluntary': 11.2, 'Black-involuntary': 7.3,
    'Hispanic/Latino': 16.7, 'Hispanic/Latino-voluntary': 10.5, 'Hispanic/Latino-involuntary': 6.2,
    'Other': 15.3, 'Other-voluntary': 9.8, 'Other-involuntary': 5.5
  }
];

// Age demographics data
export const ageData = [
  { name: '18-24', value: 15, color: '#22C55E' },
  { name: '25-34', value: 38, color: '#3B82F6' },
  { name: '35-44', value: 27, color: '#8B5CF6' },
  { name: '45-54', value: 12, color: '#EC4899' },
  { name: '55+', value: 8, color: '#F59E0B' },
];

// Age historical data for year-over-year changes
export const ageHistoricalData = [
  { year: 2020, '18-24': 12, '25-34': 35, '35-44': 30, '45-54': 15, '55+': 8 },
  { year: 2021, '18-24': 13, '25-34': 36, '35-44': 29, '45-54': 14, '55+': 8 },
  { year: 2022, '18-24': 14, '25-34': 37, '35-44': 28, '45-54': 13, '55+': 8 },
  { year: 2023, '18-24': 15, '25-34': 38, '35-44': 27, '45-54': 12, '55+': 8 },
  { year: 2024, '18-24': 15, '25-34': 38, '35-44': 27, '45-54': 12, '55+': 8 },
];

// Department age breakdown
export const departmentAgeData = [
  {
    department: 'Engineering',
    '18-24': 18,
    '25-34': 42,
    '35-44': 25,
    '45-54': 10,
    '55+': 5,
  },
  {
    department: 'Sales',
    '18-24': 12,
    '25-34': 35,
    '35-44': 30,
    '45-54': 15,
    '55+': 8,
  },
  {
    department: 'Marketing',
    '18-24': 20,
    '25-34': 40,
    '35-44': 22,
    '45-54': 10,
    '55+': 8,
  },
  {
    department: 'HR',
    '18-24': 8,
    '25-34': 32,
    '35-44': 38,
    '45-54': 15,
    '55+': 7,
  },
  {
    department: 'Product',
    '18-24': 15,
    '25-34': 45,
    '35-44': 25,
    '45-54': 10,
    '55+': 5,
  },
];

// Promotion percentage by age
export const agePromotionData = [
  { name: '18-24', percentage: 9.8 },
  { name: '25-34', percentage: 18.5 },
  { name: '35-44', percentage: 14.2 },
  { name: '45-54', percentage: 7.6 },
  { name: '55+', percentage: 3.2 },
];

// Recruiter attrition data
export const recruiterAttritionData = [
  { 
    recruiter: "Jessica Martinez", 
    count: 63, 
    attritionRate: 21.5,
    voluntaryRate: 14.2,
    involuntaryRate: 7.3 
  },
  { 
    recruiter: "Thomas Williams", 
    count: 84, 
    attritionRate: 16.8,
    voluntaryRate: 9.3,
    involuntaryRate: 7.5 
  },
  { 
    recruiter: "Emily Rodriguez", 
    count: 71, 
    attritionRate: 14.7,
    voluntaryRate: 8.5,
    involuntaryRate: 6.2 
  },
  { 
    recruiter: "Robert Johnson", 
    count: 56, 
    attritionRate: 19.3,
    voluntaryRate: 10.1,
    involuntaryRate: 9.2 
  },
  { 
    recruiter: "Michelle Lee", 
    count: 45, 
    attritionRate: 12.4,
    voluntaryRate: 7.5,
    involuntaryRate: 4.9 
  },
];

// Year-over-year recruiter attrition data
export const recruiterYearOverYearData = [
  { 
    year: 2020, 
    'Jessica': 23.5, 'Jessica-voluntary': 15.2, 'Jessica-involuntary': 8.3,
    'Thomas': 18.4, 'Thomas-voluntary': 10.2, 'Thomas-involuntary': 8.2,
    'Emily': 16.3, 'Emily-voluntary': 9.5, 'Emily-involuntary': 6.8,
    'Robert': 21.5, 'Robert-voluntary': 11.8, 'Robert-involuntary': 9.7,
    'Michelle': 14.2, 'Michelle-voluntary': 8.3, 'Michelle-involuntary': 5.9
  },
  { 
    year: 2021, 
    'Jessica': 22.8, 'Jessica-voluntary': 14.7, 'Jessica-involuntary': 8.1,
    'Thomas': 17.9, 'Thomas-voluntary': 9.8, 'Thomas-involuntary': 8.1,
    'Emily': 15.9, 'Emily-voluntary': 9.2, 'Emily-involuntary': 6.7,
    'Robert': 20.8, 'Robert-voluntary': 11.3, 'Robert-involuntary': 9.5,
    'Michelle': 13.8, 'Michelle-voluntary': 8.0, 'Michelle-involuntary': 5.8
  },
  { 
    year: 2022, 
    'Jessica': 22.3, 'Jessica-voluntary': 14.5, 'Jessica-involuntary': 7.8,
    'Thomas': 17.5, 'Thomas-voluntary': 9.6, 'Thomas-involuntary': 7.9,
    'Emily': 15.4, 'Emily-voluntary': 8.9, 'Emily-involuntary': 6.5,
    'Robert': 20.2, 'Robert-voluntary': 10.8, 'Robert-involuntary': 9.4,
    'Michelle': 13.4, 'Michelle-voluntary': 7.8, 'Michelle-involuntary': 5.6
  },
  { 
    year: 2023, 
    'Jessica': 21.8, 'Jessica-voluntary': 14.3, 'Jessica-involuntary': 7.5,
    'Thomas': 17.2, 'Thomas-voluntary': 9.5, 'Thomas-involuntary': 7.7,
    'Emily': 15.0, 'Emily-voluntary': 8.7, 'Emily-involuntary': 6.3,
    'Robert': 19.7, 'Robert-voluntary': 10.4, 'Robert-involuntary': 9.3,
    'Michelle': 12.9, 'Michelle-voluntary': 7.6, 'Michelle-involuntary': 5.3
  },
  { 
    year: 2024, 
    'Jessica': 21.5, 'Jessica-voluntary': 14.2, 'Jessica-involuntary': 7.3,
    'Thomas': 16.8, 'Thomas-voluntary': 9.3, 'Thomas-involuntary': 7.5,
    'Emily': 14.7, 'Emily-voluntary': 8.5, 'Emily-involuntary': 6.2,
    'Robert': 19.3, 'Robert-voluntary': 10.1, 'Robert-involuntary': 9.2,
    'Michelle': 12.4, 'Michelle-voluntary': 7.5, 'Michelle-involuntary': 4.9
  }
];

// Department attrition data
export const departmentAttritionData = [
  { 
    department: "Engineering", 
    count: 420, 
    attritionRate: 18,
    voluntaryRate: 10.5,
    involuntaryRate: 7.5 
  },
  { 
    department: "Sales", 
    count: 320, 
    attritionRate: 22,
    voluntaryRate: 14.2,
    involuntaryRate: 7.8 
  },
  { 
    department: "Marketing", 
    count: 180, 
    attritionRate: 15,
    voluntaryRate: 8.3,
    involuntaryRate: 6.7 
  },
  { 
    department: "HR", 
    count: 85, 
    attritionRate: 10,
    voluntaryRate: 5.5,
    involuntaryRate: 4.5 
  },
  { 
    department: "Product", 
    count: 150, 
    attritionRate: 20,
    voluntaryRate: 12.8,
    involuntaryRate: 7.2 
  },
  { 
    department: "Finance", 
    count: 110, 
    attritionRate: 12,
    voluntaryRate: 7.1,
    involuntaryRate: 4.9 
  },
];

// Year-over-year department attrition data
export const departmentYearOverYearData = [
  { 
    year: 2020, 
    'Engineering': 20.5, 'Engineering-voluntary': 12.0, 'Engineering-involuntary': 8.5,
    'Sales': 24.5, 'Sales-voluntary': 15.8, 'Sales-involuntary': 8.7,
    'Marketing': 17.2, 'Marketing-voluntary': 9.5, 'Marketing-involuntary': 7.7,
    'HR': 12.5, 'HR-voluntary': 7.0, 'HR-involuntary': 5.5,
    'Product': 22.3, 'Product-voluntary': 14.1, 'Product-involuntary': 8.2,
    'Finance': 14.2, 'Finance-voluntary': 8.3, 'Finance-involuntary': 5.9
  },
  { 
    year: 2021, 
    'Engineering': 19.8, 'Engineering-voluntary': 11.6, 'Engineering-involuntary': 8.2,
    'Sales': 23.8, 'Sales-voluntary': 15.2, 'Sales-involuntary': 8.6,
    'Marketing': 16.5, 'Marketing-voluntary': 9.1, 'Marketing-involuntary': 7.4,
    'HR': 11.8, 'HR-voluntary': 6.5, 'HR-involuntary': 5.3,
    'Product': 21.6, 'Product-voluntary': 13.7, 'Product-involuntary': 7.9,
    'Finance': 13.5, 'Finance-voluntary': 7.9, 'Finance-involuntary': 5.6
  },
  { 
    year: 2022, 
    'Engineering': 19.2, 'Engineering-voluntary': 11.2, 'Engineering-involuntary': 8.0,
    'Sales': 23.2, 'Sales-voluntary': 14.8, 'Sales-involuntary': 8.4,
    'Marketing': 16.0, 'Marketing-voluntary': 8.8, 'Marketing-involuntary': 7.2,
    'HR': 11.2, 'HR-voluntary': 6.2, 'HR-involuntary': 5.0,
    'Product': 21.0, 'Product-voluntary': 13.4, 'Product-involuntary': 7.6,
    'Finance': 13.0, 'Finance-voluntary': 7.6, 'Finance-involuntary': 5.4
  },
  { 
    year: 2023, 
    'Engineering': 18.5, 'Engineering-voluntary': 10.8, 'Engineering-involuntary': 7.7,
    'Sales': 22.6, 'Sales-voluntary': 14.5, 'Sales-involuntary': 8.1,
    'Marketing': 15.5, 'Marketing-voluntary': 8.5, 'Marketing-involuntary': 7.0,
    'HR': 10.5, 'HR-voluntary': 5.8, 'HR-involuntary': 4.7,
    'Product': 20.5, 'Product-voluntary': 13.1, 'Product-involuntary': 7.4,
    'Finance': 12.5, 'Finance-voluntary': 7.3, 'Finance-involuntary': 5.2
  },
  { 
    year: 2024, 
    'Engineering': 18.0, 'Engineering-voluntary': 10.5, 'Engineering-involuntary': 7.5,
    'Sales': 22.0, 'Sales-voluntary': 14.2, 'Sales-involuntary': 7.8,
    'Marketing': 15.0, 'Marketing-voluntary': 8.3, 'Marketing-involuntary': 6.7,
    'HR': 10.0, 'HR-voluntary': 5.5, 'HR-involuntary': 4.5,
    'Product': 20.0, 'Product-voluntary': 12.8, 'Product-involuntary': 7.2,
    'Finance': 12.0, 'Finance-voluntary': 7.1, 'Finance-involuntary': 4.9
  }
];

// Average tenure of hires by recruiter (in months)
export const recruiterTenureData = [
  { recruiter: "Jessica Martinez", averageTenure: 18.5 },
  { recruiter: "Thomas Williams", averageTenure: 24.2 },
  { recruiter: "Emily Rodriguez", averageTenure: 28.7 },
  { recruiter: "Robert Johnson", averageTenure: 16.3 },
  { recruiter: "Michelle Lee", averageTenure: 31.8 },
];

// Average time to hire by recruiter (in days)
export const recruiterTimeToHireData = [
  { recruiter: "Jessica Martinez", averageTimeToHire: 45 },
  { recruiter: "Thomas Williams", averageTimeToHire: 38 },
  { recruiter: "Emily Rodriguez", averageTimeToHire: 42 },
  { recruiter: "Robert Johnson", averageTimeToHire: 52 },
  { recruiter: "Michelle Lee", averageTimeToHire: 35 },
];

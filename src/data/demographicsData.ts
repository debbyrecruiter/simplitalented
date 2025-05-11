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

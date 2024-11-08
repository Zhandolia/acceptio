// acceptio/src/data/options.ts

export const SPORTS = [
  "Basketball",
  "Soccer",
  "Tennis",
  "Swimming",
  "Volleyball",
  "Baseball",
  "Football",
  "Cricket",
  "Badminton",
  "Hockey",
  "Gymnastics",
  "Track and Field",
  "Martial Arts",
  "Cycling",
  "Rowing",
];

export const OLYMPIADS = [
  "Math Olympiad",
  "Physics Olympiad",
  "Chemistry Olympiad",
  "Biology Olympiad",
  "Computer Science Olympiad",
  "Geography Olympiad",
  "History Olympiad",
  "Astronomy Olympiad",
  "Engineering Olympiad",
  "Environmental Science Olympiad",
];

export const HACKATHONS = [
  "Hackathon 2023",
  "Hackathon 2024",
  "Innovation Hackathon",
  "AI & Machine Learning Hackathon",
  "Healthcare Hackathon",
  "Sustainability Hackathon",
  "Finance Hackathon",
  "Cybersecurity Hackathon",
  "Education Hackathon",
  "Blockchain Hackathon",
];

export const COMPETITIONS = [
  "Debate Competition",
  "Spelling Bee",
  "Essay Writing Competition",
  "Robotics Competition",
  "Art Competition",
  "Photography Contest",
  "Coding Competition",
  "Entrepreneurship Competition",
  "Music Competition",
  "Dance Competition",
];

export const EXTRACURRICULARS = [
  ...SPORTS,
  ...OLYMPIADS,
  ...HACKATHONS,
  ...COMPETITIONS,
  "Science Fair Winner (NASA)",
  "Internship at Google STEP",
  "Research Assistant at MIT",
  "Founder of Coding Club",
  "Volunteer at Local Shelter",
  "Member of Student Government",
  "Editor of School Newspaper",
  "Captain of Robotics Team",
  "Participant in Model United Nations",
];

export const TEST_TYPES = [
  "SAT",
  "SAT Subject Test",
  "IELTS",
  "ACT",
  "TOEFL",
  "GRE",
  "GMAT",
  "LSAT",
  "MCAT",
  "AP Exams",
  "IB Exams",
];

export const AP_EXAMS = [
  "AP Art History",
  "AP Biology",
  "AP Calculus AB",
  "AP Calculus BC",
  "AP Chemistry",
  "AP Chinese Language and Culture",
  "AP Comparative Government and Politics",
  "AP Computer Science A",
  "AP Computer Science Principles",
  "AP English Language and Composition",
  "AP English Literature and Composition",
  "AP Environmental Science",
  "AP European History",
  "AP French Language and Culture",
  "AP German Language and Culture",
  "AP Human Geography",
  "AP Italian Language and Culture",
  "AP Japanese Language and Culture",
  "AP Latin",
  "AP Macroeconomics",
  "AP Microeconomics",
  "AP Music Theory",
  "AP Physics 1: Algebra-Based",
  "AP Physics 2: Algebra-Based",
  "AP Physics C: Electricity and Magnetism",
  "AP Physics C: Mechanics",
  "AP Psychology",
  "AP Research",
  "AP Seminar",
  "AP Spanish Language and Culture",
  "AP Spanish Literature and Culture",
  "AP Statistics",
  "AP Studio Art: 2-D Design",
  "AP Studio Art: 3-D Design",
  "AP Studio Art: Drawing",
  "AP United States Government and Politics",
  "AP United States History",
  "AP World History: Modern"
];

export const SAT_SUBJECTS = [
  "Biology E/M",
  "Chemistry",
  "Chinese with Listening",
  "French",
  "French with Listening",
  "German",
  "German with Listening",
  "Modern Hebrew",
  "Italian",
  "Japanese with Listening",
  "Korean with Listening",
  "Latin",
  "Literature",
  "Mathematics Level 1",
  "Mathematics Level 2",
  "Physics",
  "Spanish",
  "Spanish with Listening",
  "U.S. History",
  "World History"
];

export const IELTS_SECTIONS = [
  "Listening",
  "Reading",
  "Writing",
  "Speaking",
];

export const HOBBIES = [
  "Photography",
  "Painting",
  "Reading",
  "Writing",
  "Gardening",
  "Cooking",
  "Traveling",
  "Cycling",
  "Gaming",
  "Dancing",
  "Knitting",
  "Woodworking",
  "Yoga",
  "Meditation",
];

export const TOEFL_SECTIONS = [
  "Reading",
  "Listening",
  "Speaking",
  "Writing"
];

export const GRE_SECTIONS = [
  "Verbal Reasoning",
  "Quantitative Reasoning",
  "Analytical Writing"
];

export const GMAT_SECTIONS = [
  "Analytical Writing",
  "Integrated Reasoning",
  "Quantitative",
  "Verbal"
];

export const LSAT_SECTIONS = [
  "Logical Reasoning",
  "Analytical Reasoning",
  "Reading Comprehension",
  "Writing Sample"
];

export const MCAT_SECTIONS = [
  "Chemical and Physical Foundations of Biological Systems",
  "Critical Analysis and Reasoning Skills",
  "Biological and Biochemical Foundations of Living Systems",
  "Psychological, Social, and Biological Foundations of Behavior"
];

export const IB_EXAMS = [
  "Language and Literature",
  "Language Acquisition",
  "Individuals and Societies",
  "Sciences",
  "Mathematics",
  "The Arts"
];

export const AP_SCORES = ['5', '4', '3', '2', '1']

export const LSAT_SCORES = Array.from({ length: 181 }, (_, i) => i + 120); // 120 - 180

export const MCAT_SCORES = Array.from({ length: 133 }, (_, i) => i + 118); // 118 - 132 per section

export const IB_SCORES = Array.from({ length: 8 }, (_, i) => i); // 1 to 7 per subject

export const SAT_MATH_SCORES = Array.from({ length: 61 }, (_, i) => 200 + i * 10); // 200 to 800

export const SAT_VERBAL_SCORES = Array.from({ length: 61 }, (_, i) => 200 + i * 10); // 200 to 800

export const SAT_SUBJECT_TEST_SCORES = Array.from({ length: 61 }, (_, i) => 200 + i * 10); // 200 to 800

export const IELTS_SCORES = [4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0];

export const ACT_SCORES = Array.from({ length: 36 }, (_, i) => i + 1); // 1 to 36

export const TOEFL_SCORES = Array.from({ length: 121 }, (_, i) => i); // 0 to 120

export const GRE_SCORES = {
  verbal: Array.from({ length: 31 }, (_, i) => 130 + i), // 130 to 160
  quantitative: Array.from({ length: 31 }, (_, i) => 130 + i), // 130 to 160
  analyticalWriting: [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0],
};

export const GMAT_SCORES = {
  verbal: Array.from({ length: 46 }, (_, i) => 6 + i), // 6 to 51
  quantitative: Array.from({ length: 46 }, (_, i) => 6 + i), // 6 to 51
  analyticalWriting: [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0],
};


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
  // Add more sports as needed
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
  // Add more olympiads as needed
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
  // Add more hackathons as needed
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
  // Add more competitions as needed
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
  // Add more specific extracurriculars as needed
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
  // Add more test types as needed
];

export const SAT_SUBJECTS = [
  "Biology",
  "Chemistry",
  "Computer Science",
  "Economics",
  "English Literature",
  "Mathematics Level 1",
  "Mathematics Level 2",
  "Physics",
  "Spanish Language",
  "U.S. History",
  // Add more SAT subject tests as needed
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
  "Bird Watching",
  "Yoga",
  "Meditation",
  // Add more hobbies as needed
];

// Define score options for each test type
export const SAT_MATH_SCORES = Array.from({ length: 41 }, (_, i) => 400 + i * 10); // 400 to 1600
export const SAT_VERBAL_SCORES = Array.from({ length: 41 }, (_, i) => 400 + i * 10); // 400 to 800

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


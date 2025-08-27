// chatService.ts - Saint Joseph College Maasin - College of Teacher Education
import {
  GREETING_RESPONSE,
  HOW_ARE_YOU_RESPONSE,
  SCHOLARSHIP_RESPONSE,
  PROGRAM_RESPONSE,
  ENROLLMENT_RESPONSE,
  PRACTICUM_RESPONSE,
  EXAM_RESPONSE,
  EVENT_RESPONSE,
  FACILITY_RESPONSE,
  SCHEDULE_RESPONSE,
  ABOUT_RESPONSE,
  STUDENT_LIFE_RESPONSE,
  ACHIEVEMENT_RESPONSE,
  ADVANTAGE_RESPONSE,
  INQUIRY_RESPONSE,
  CONTACT_RESPONSE,
  BEED_RESPONSE,
  BSED_RESPONSE,
  THANKS_RESPONSE,
  DEFAULT_RESPONSE,
} from "./chatListResponse";

export interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface KeywordGroup {
  keywords: string[];
  priority: number;
  response: string;
}

function calculateMatchScore(input: string, keywords: string[]): number {
  let score = 0;

  keywords.forEach((keyword) => {
    const regex = new RegExp(`\\b${keyword}\\b`, "i");
    if (regex.test(input)) {
      const wordCount = keyword.split(" ").length;
      score += wordCount * 2;
      if (input.includes(keyword.toLowerCase())) {
        score += 3;
      }
    }
  });

  return score;
}

export function getCTEResponse(userInput: string): string {
  const input = userInput
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .trim();

  const keywordGroups: KeywordGroup[] = [
    {
      keywords: ["beed", "elementary education", "primary education"],
      priority: 10,
      response: BEED_RESPONSE,
    },
    {
      keywords: [
        "bsed",
        "secondary education",
        "specialization",
        "specializations",
        "major in",
        "majors",
      ],
      priority: 10,
      response: BSED_RESPONSE,
    },
    {
      keywords: [
        "student teaching",
        "practicum",
        "practicums",
        "ojt",
        "internship",
        "internships",
        "teaching practice",
      ],
      priority: 9,
      response: PRACTICUM_RESPONSE,
    },
    {
      keywords: [
        "let",
        "licensure exam",
        "board exam",
        "teacher exam",
        "license",
        "licensing",
      ],
      priority: 9,
      response: EXAM_RESPONSE,
    },
    {
      keywords: [
        "scholarship",
        "scholarships",
        "financial aid",
        "tuition",
        "tuitions",
        "fee",
        "fees",
        "cost",
        "costs",
      ],
      priority: 8,
      response: SCHOLARSHIP_RESPONSE,
    },
    {
      keywords: [
        "enroll",
        "enrollment",
        "enrolling",
        "apply",
        "applying",
        "application",
        "applications",
        "admission",
        "admissions",
        "register",
        "registering",
        "registration",
        "requirement",
        "requirements",
      ],
      priority: 8,
      response: ENROLLMENT_RESPONSE,
    },
    {
      keywords: [
        "program",
        "programs",
        "course",
        "courses",
        "degree",
        "degrees",
        "curriculum",
        "curriculums",
        "subject",
        "subjects",
      ],
      priority: 7,
      response: PROGRAM_RESPONSE,
    },
    {
      keywords: [
        "facility",
        "facilities",
        "library",
        "libraries",
        "lab",
        "labs",
        "classroom",
        "classrooms",
        "resource",
        "resources",
      ],
      priority: 7,
      response: FACILITY_RESPONSE,
    },
    {
      keywords: [
        "schedule",
        "schedules",
        "calendar",
        "calendars",
        "semester",
        "semesters",
        "class schedule",
        "class schedules",
        "time",
        "times",
      ],
      priority: 7,
      response: SCHEDULE_RESPONSE,
    },
    {
      keywords: [
        "event",
        "events",
        "activity",
        "activities",
        "organization",
        "organizations",
        "club",
        "clubs",
        "campus life",
      ],
      priority: 6,
      response: EVENT_RESPONSE,
    },
    {
      keywords: [
        "achievement",
        "achievements",
        "award",
        "awards",
        "recognition",
        "recognitions",
        "accreditation",
        "accreditations",
      ],
      priority: 6,
      response: ACHIEVEMENT_RESPONSE,
    },
    {
      keywords: [
        "why choose",
        "advantage",
        "advantages",
        "benefit",
        "benefits",
        "why sjc",
      ],
      priority: 6,
      response: ADVANTAGE_RESPONSE,
    },
    {
      keywords: [
        "about",
        "history",
        "background",
        "founded",
        "mission",
        "vision",
      ],
      priority: 5,
      response: ABOUT_RESPONSE,
    },
    {
      keywords: [
        "student life",
        "extracurricular",
        "extracurriculars",
        "retreat",
        "retreats",
      ],
      priority: 5,
      response: STUDENT_LIFE_RESPONSE,
    },
    {
      keywords: [
        "contact",
        "contacts",
        "phone",
        "phones",
        "email",
        "emails",
        "office",
        "address",
        "addresses",
        "location",
        "locations",
      ],
      priority: 5,
      response: CONTACT_RESPONSE,
    },
    {
      keywords: [
        "inquiry",
        "inquiries",
        "inquire",
        "question",
        "questions",
        "ask",
        "information",
      ],
      priority: 4,
      response: INQUIRY_RESPONSE,
    },
    {
      keywords: ["thank", "thanks", "thank you", "appreciate", "appreciation"],
      priority: 3,
      response: THANKS_RESPONSE,
    },
    {
      keywords: [
        "hello",
        "hi",
        "hey",
        "greetings",
        "good morning",
        "good afternoon",
        "good evening",
      ],
      priority: 2,
      response: GREETING_RESPONSE,
    },
    {
      keywords: ["whats up", "how are you", "howdy", "how are things"],
      priority: 1,
      response: HOW_ARE_YOU_RESPONSE,
    },
  ];

  if (!input) {
    return DEFAULT_RESPONSE;
  }

  let bestMatch: KeywordGroup | null = null;
  let highestScore = 0;

  for (const group of keywordGroups) {
    const score = calculateMatchScore(input, group.keywords);
    if (score > 0) {
      const weightedScore = score * group.priority;
      if (weightedScore > highestScore) {
        highestScore = weightedScore;
        bestMatch = group;
      }
    }
  }

  return bestMatch && highestScore >= 5 ? bestMatch.response : DEFAULT_RESPONSE;
}

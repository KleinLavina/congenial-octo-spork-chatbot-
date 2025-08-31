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

// Import both the type and the actual suggestion data
import {
  type SuggestedReply,
  contextBasedSuggestions,
} from "./suggestedReplies";

// Direct access shortcuts
const greetingReplies = contextBasedSuggestions.greetings;
const generalReplies = contextBasedSuggestions.general;
const scholarshipReplies = contextBasedSuggestions.scholarships_overview;
const admissionReplies = contextBasedSuggestions.admissions_overview;
const facilitiesReplies = contextBasedSuggestions.facilities_overview;
const studentLifeReplies = contextBasedSuggestions.student_life;
const licensureReplies = contextBasedSuggestions.let;
const contactReplies = contextBasedSuggestions.contact_info;
const programReplies = contextBasedSuggestions.programs_overview;
const beedReplies = contextBasedSuggestions.beed_details;
const bsedReplies = contextBasedSuggestions.bsed_details;
const studentTeachingReplies = contextBasedSuggestions.student_teaching;
const aboutSjcReplies = contextBasedSuggestions.about_sjc;
const advantagesReplies = contextBasedSuggestions.advantages;
const quickNavReplies = contextBasedSuggestions.quick_nav;
const thanksReplies = contextBasedSuggestions.thanks;

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
  suggestions: SuggestedReply[];
}

export interface ChatResponse {
  message: string;
  suggestions: SuggestedReply[];
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

export function getCTEResponse(userInput: string): ChatResponse {
  const input = userInput
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .trim();

  const keywordGroups: KeywordGroup[] = [
    {
      keywords: ["beed", "elementary education", "primary education"],
      priority: 10,
      response: BEED_RESPONSE,
      suggestions: beedReplies,
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
      suggestions: bsedReplies,
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
      suggestions: studentTeachingReplies,
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
      suggestions: licensureReplies,
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
      suggestions: scholarshipReplies,
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
      suggestions: admissionReplies,
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
      suggestions: programReplies,
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
      suggestions: facilitiesReplies,
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
      suggestions: quickNavReplies,
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
      suggestions: generalReplies,
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
      suggestions: generalReplies,
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
      suggestions: advantagesReplies,
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
      suggestions: aboutSjcReplies,
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
      suggestions: studentLifeReplies,
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
      suggestions: contactReplies,
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
        "explore",
      ],
      priority: 4,
      response: INQUIRY_RESPONSE,
      suggestions: generalReplies,
    },
    {
      keywords: ["thank", "thanks", "thank you", "appreciate", "appreciation"],
      priority: 3,
      response: THANKS_RESPONSE,
      suggestions: thanksReplies,
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
      suggestions: greetingReplies,
    },
    {
      keywords: ["whats up", "how are you", "howdy", "how are things"],
      priority: 1,
      response: HOW_ARE_YOU_RESPONSE,
      suggestions: generalReplies,
    },
  ];

  if (!input) {
    return {
      message: DEFAULT_RESPONSE,
      suggestions: generalReplies,
    };
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

  if (bestMatch && highestScore >= 5) {
    return {
      message: bestMatch.response,
      suggestions: bestMatch.suggestions,
    };
  }

  return {
    message: DEFAULT_RESPONSE,
    suggestions: generalReplies,
  };
}

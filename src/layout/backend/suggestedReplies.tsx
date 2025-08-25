// suggestedReplies.ts - Suggested Replies System for SJC Maasin CTE Chatbot

export interface SuggestedReply {
  text: string;
  category: string;
  isExploreMore?: boolean;
}

export interface SuggestionContext {
  lastBotResponse: string;
  conversationHistory: string[];
  currentTopic?: string;
}

// Context-based suggestions that appear after specific bot responses
export const contextBasedSuggestions: Record<string, SuggestedReply[]> = {
  // Greetings responses
  greetings: [
    { text: "Tell me about programs", category: "programs" },
    { text: "Admission requirements?", category: "admissions" },
    { text: "Scholarship options?", category: "scholarships" },
    {
      text: "More topics I can help with?",
      category: "general",
      isExploreMore: true,
    },
  ],

  // Programs responses
  programs: [
    { text: "Tell me about BEEd", category: "programs" },
    { text: "BSEd majors available?", category: "programs" },
    { text: "Graduate programs?", category: "programs" },
    { text: "What else can I ask?", category: "general", isExploreMore: true },
  ],

  // Admissions responses
  admissions: [
    { text: "Application deadlines?", category: "admissions" },
    { text: "Entrance exam details?", category: "admissions" },
    { text: "Required documents?", category: "admissions" },
    { text: "More admission info?", category: "general", isExploreMore: true },
  ],

  // Scholarships responses
  scholarships: [
    { text: "Scholarship requirements?", category: "scholarships" },
    { text: "Payment plans?", category: "scholarships" },
    { text: "Work-study programs?", category: "scholarships" },
    { text: "Other topics?", category: "general", isExploreMore: true },
  ],

  // Student Teaching responses
  studentTeaching: [
    { text: "Teaching placements?", category: "student_teaching" },
    { text: "Practicum requirements?", category: "student_teaching" },
    { text: "When does it start?", category: "student_teaching" },
    {
      text: "Ask me something else?",
      category: "general",
      isExploreMore: true,
    },
  ],

  // LET responses
  let: [
    { text: "LET passing rates?", category: "let" },
    { text: "Review courses?", category: "let" },
    { text: "Exam schedules?", category: "let" },
    { text: "More questions?", category: "general", isExploreMore: true },
  ],

  // Campus Life responses
  campusLife: [
    { text: "Student organizations?", category: "campus_life" },
    { text: "Campus events?", category: "campus_life" },
    { text: "Activities available?", category: "campus_life" },
    { text: "What else to know?", category: "general", isExploreMore: true },
  ],

  // Facilities responses
  facilities: [
    { text: "Library resources?", category: "facilities" },
    { text: "Computer labs?", category: "facilities" },
    { text: "Campus tour?", category: "facilities" },
    { text: "Other information?", category: "general", isExploreMore: true },
  ],

  // Schedule responses
  schedule: [
    { text: "Class schedules?", category: "schedule" },
    { text: "Enrollment dates?", category: "schedule" },
    { text: "Academic calendar?", category: "schedule" },
    { text: "More details?", category: "general", isExploreMore: true },
  ],

  // About SJC responses
  about: [
    { text: "Mission and vision?", category: "about" },
    { text: "Core values?", category: "about" },
    { text: "College history?", category: "about" },
    { text: "Other topics?", category: "general", isExploreMore: true },
  ],

  // Contact responses
  contact: [
    { text: "Office hours?", category: "contact" },
    { text: "Visit campus?", category: "contact" },
    { text: "Email address?", category: "contact" },
    { text: "More questions?", category: "general", isExploreMore: true },
  ],

  // BEEd Program responses
  beed: [
    { text: "BEEd curriculum?", category: "programs" },
    { text: "Career opportunities?", category: "programs" },
    { text: "Admission to BEEd?", category: "admissions" },
    {
      text: "Ask about other topics?",
      category: "general",
      isExploreMore: true,
    },
  ],

  // BSEd Program responses
  bsed: [
    { text: "BSEd specializations?", category: "programs" },
    { text: "Teaching methods?", category: "programs" },
    { text: "Career paths?", category: "programs" },
    { text: "More information?", category: "general", isExploreMore: true },
  ],

  // Achievements responses
  achievements: [
    { text: "Alumni success stories?", category: "achievements" },
    { text: "Accreditation details?", category: "achievements" },
    { text: "Awards received?", category: "achievements" },
    { text: "Other questions?", category: "general", isExploreMore: true },
  ],

  // Why Choose SJC responses
  whyChoose: [
    { text: "Academic advantages?", category: "why_choose" },
    { text: "Values education?", category: "why_choose" },
    { text: "Career preparation?", category: "why_choose" },
    { text: "More topics?", category: "general", isExploreMore: true },
  ],
};

// General explore-more suggestions (when user clicks "More topics" etc.)
export const exploreMoreSuggestions: SuggestedReply[] = [
  { text: "Programs offered", category: "programs" },
  { text: "Admission process", category: "admissions" },
  { text: "Scholarships available", category: "scholarships" },
  { text: "Campus facilities", category: "facilities" },
  { text: "Student teaching", category: "student_teaching" },
  { text: "LET preparation", category: "let" },
  { text: "Campus life", category: "campus_life" },
  { text: "Contact information", category: "contact" },
];

// Function to determine context based on bot response
export function getResponseContext(botResponse: string): string {
  const response = botResponse.toLowerCase();

  if (
    response.includes("hello") ||
    response.includes("welcome") ||
    response.includes("good morning")
  ) {
    return "greetings";
  }
  if (
    response.includes("programs") ||
    response.includes("beed") ||
    response.includes("bsed") ||
    response.includes("maed")
  ) {
    return "programs";
  }
  if (
    response.includes("admission") ||
    response.includes("requirements") ||
    response.includes("apply")
  ) {
    return "admissions";
  }
  if (
    response.includes("scholarship") ||
    response.includes("financial aid") ||
    response.includes("tuition")
  ) {
    return "scholarships";
  }
  if (
    response.includes("student teaching") ||
    response.includes("practicum") ||
    response.includes("ojt")
  ) {
    return "studentTeaching";
  }
  if (
    response.includes("let") ||
    response.includes("licensure") ||
    response.includes("board exam")
  ) {
    return "let";
  }
  if (
    response.includes("campus life") ||
    response.includes("activities") ||
    response.includes("organizations")
  ) {
    return "campusLife";
  }
  if (
    response.includes("facilities") ||
    response.includes("library") ||
    response.includes("laboratory")
  ) {
    return "facilities";
  }
  if (
    response.includes("schedule") ||
    response.includes("calendar") ||
    response.includes("semester")
  ) {
    return "schedule";
  }
  if (
    response.includes("about") ||
    response.includes("history") ||
    response.includes("mission")
  ) {
    return "about";
  }
  if (
    response.includes("contact") ||
    response.includes("phone") ||
    response.includes("email")
  ) {
    return "contact";
  }
  if (response.includes("elementary education") && response.includes("beed")) {
    return "beed";
  }
  if (response.includes("secondary education") && response.includes("bsed")) {
    return "bsed";
  }
  if (
    response.includes("achievement") ||
    response.includes("recognition") ||
    response.includes("alumni")
  ) {
    return "achievements";
  }
  if (
    response.includes("why choose") ||
    response.includes("advantage") ||
    response.includes("benefit")
  ) {
    return "whyChoose";
  }

  return "greetings"; // Default fallback
}

// Main function to get suggested replies
export function getSuggestedReplies(
  context: SuggestionContext
): SuggestedReply[] {
  const responseContext = getResponseContext(context.lastBotResponse);

  // Get context-based suggestions
  const suggestions =
    contextBasedSuggestions[responseContext] ||
    contextBasedSuggestions.greetings;

  // Return 3-4 suggestions (as per your requirement)
  return suggestions.slice(0, 4);
}

// Function specifically for "explore more" suggestions
export function getExploreMoreSuggestions(): SuggestedReply[] {
  return exploreMoreSuggestions.slice(0, 8); // Show more options when exploring
}

// Helper function to check if user clicked "explore more" type suggestion
export function isExploreMoreRequest(userInput: string): boolean {
  const input = userInput.toLowerCase();
  return (
    input.includes("more") ||
    input.includes("other") ||
    input.includes("else") ||
    input.includes("what can") ||
    input.includes("help with")
  );
}

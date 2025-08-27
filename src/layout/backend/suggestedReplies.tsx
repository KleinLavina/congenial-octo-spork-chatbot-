export interface SuggestedReply {
  text: string;
  category: string;
  isExploreMore?: boolean;
  isBackToMain?: boolean;
  isSpecificFollowup?: boolean;
}

export const contextBasedSuggestions: Record<string, SuggestedReply[]> = {
  // Main/General responses
  general: [
    { text: "Academic programs overview", category: "programs_overview" },
    { text: "Admission requirements", category: "admissions_overview" },
    { text: "Scholarship opportunities", category: "scholarships_overview" },
    { text: "Campus facilities", category: "facilities_overview" },
    { text: "Student life & activities", category: "student_life" },
    { text: "About SJC Maasin CTE", category: "about_sjc" },
    { text: "Contact information", category: "contact_info" },
  ],

  // Greetings responses
  greetings: [
    { text: "Teacher education programs", category: "programs_overview" },
    { text: "How to apply?", category: "admissions_process" },
    { text: "Financial aid options", category: "scholarships_overview" },
    { text: "Campus tour information", category: "campus_tour" },
    { text: "Why choose SJC?", category: "advantages" },
    {
      text: "Explore all topics",
      category: "general",
      isExploreMore: true,
    },
  ],

  // Programs overview
  programs_overview: [
    { text: "BEEd - Elementary Education", category: "beed_details" },
    { text: "BSEd - Secondary Education", category: "bsed_details" },
    { text: "MAEd - Graduate program", category: "maed_details" },
    { text: "Program accreditation", category: "accreditation" },
    { text: "Career opportunities", category: "career_paths" },
    { text: "Explore more topics", category: "general", isExploreMore: true },
  ],

  // BEEd Program detailed responses
  beed_details: [
    { text: "BEEd curriculum structure", category: "beed_curriculum" },
    { text: "Elementary teaching methods", category: "teaching_methods" },
    { text: "Admission requirements for BEEd", category: "beed_admissions" },
    { text: "Career paths after BEEd", category: "beed_careers" },
    { text: "Student teaching for BEEd", category: "beed_practicum" },
    { text: "Compare with BSEd", category: "program_comparison" },
    {
      text: "Explore more topics",
      category: "programs_overview",
      isExploreMore: true,
    },
  ],

  // BSEd Program detailed responses
  bsed_details: [
    {
      text: "BSEd major specializations: English Literature & Language",
      category: "bsed_english",
    },
    {
      text: "BSEd major specializations: Mathematics Education",
      category: "bsed_math",
    },
    {
      text: "BSEd major specializations: Science Education",
      category: "bsed_science",
    },
    {
      text: "BSEd major specializations: Social Studies Education",
      category: "bsed_social_studies",
    },
    {
      text: "BSEd major specializations: Filipino Language & Literature",
      category: "bsed_filipino",
    },
    { text: "Teaching methodologies", category: "teaching_methods" },
    { text: "Career paths for BSEd", category: "bsed_careers" },
    { text: "Admission requirements for BSEd", category: "bsed_admissions" },
    { text: "LET preparation", category: "let_preparation" },
    {
      text: "Explore more topics",
      category: "programs_overview",
      isExploreMore: true,
    },
  ],

  // Scholarships overview
  scholarships_overview: [
    { text: "CSP Scholarship", category: "csp_scholarship" },
    { text: "DOST Scholarship", category: "dost_scholarship" },
    { text: "Diocesan Scholarship", category: "diocesan_scholarship" },
    { text: "Academic Scholarship", category: "academic_scholarship" },
    { text: "Talent-based scholarships", category: "talent_scholarships" },
    { text: "Application process", category: "scholarship_application" },
    { text: "Explore more topics", category: "general", isExploreMore: true },
  ],

  // Admissions overview
  admissions_overview: [
    { text: "Required documents", category: "required_documents" },
    { text: "Application deadlines", category: "admissions_deadlines" },
    { text: "Entrance exam details", category: "entrance_exam" },
    { text: "Application process steps", category: "application_process" },
    { text: "International students", category: "international_admissions" },
    { text: "Transfer students", category: "transfer_admissions" },
    { text: "Explore more topics", category: "general", isExploreMore: true },
  ],

  // Campus facilities
  facilities_overview: [
    { text: "Library resources", category: "library_info" },
    { text: "Computer laboratories", category: "computer_labs" },
    { text: "Science laboratories", category: "science_labs" },
    { text: "Smart classrooms", category: "smart_classrooms" },
    { text: "Sports facilities", category: "sports_facilities" },
    { text: "Campus chapel", category: "campus_chapel" },
    { text: "Schedule campus tour", category: "campus_tour" },
    { text: "Explore more topics", category: "general", isExploreMore: true },
  ],

  // Student teaching/practicum
  student_teaching: [
    { text: "Teaching placement process", category: "placement_process" },
    { text: "Practicum requirements", category: "practicum_requirements" },
    { text: "Duration and schedule", category: "practicum_schedule" },
    { text: "Mentor teacher information", category: "mentor_teachers" },
    { text: "Assessment process", category: "practicum_assessment" },
    {
      text: "Explore more topics",
      category: "programs_overview",
      isExploreMore: true,
    },
  ],

  // LET and certification
  let: [
    { text: "LET passing rates", category: "let_stats" },
    { text: "Review courses", category: "let_review" },
    { text: "Exam schedules", category: "let_schedule" },
    { text: "Preparation tips", category: "preparation_tips" },
    { text: "Licensure requirements", category: "licensure_requirements" },
    {
      text: "Explore more topics",
      category: "programs_overview",
      isExploreMore: true,
    },
  ],

  // Student life
  student_life: [
    { text: "Student organizations", category: "student_orgs" },
    { text: "Annual events", category: "campus_events" },
    { text: "JSTA activities", category: "jsta_activities" },
    { text: "Community outreach", category: "community_service" },
    { text: "Faith formation", category: "faith_formation" },
    { text: "Leadership programs", category: "leadership_programs" },
    { text: "Explore more topics", category: "general", isExploreMore: true },
  ],

  // About SJC
  about_sjc: [
    { text: "Mission and vision", category: "mission_vision" },
    { text: "College history", category: "college_history" },
    { text: "Core values", category: "core_values" },
    { text: "Achievements", category: "achievements" },
    { text: "Alumni success", category: "alumni_stories" },
    { text: "Why choose SJC?", category: "advantages" },
    { text: "Explore more topics", category: "general", isExploreMore: true },
  ],

  // Contact information
  contact_info: [
    { text: "Phone number", category: "phone_contact" },
    { text: "Email address", category: "email_contact" },
    { text: "Office hours", category: "office_hours" },
    { text: "Campus location", category: "campus_location" },
    { text: "Schedule appointment", category: "schedule_appointment" },
    { text: "Explore more topics", category: "general", isExploreMore: true },
  ],

  // Advantages/Why choose SJC
  advantages: [
    { text: "Academic excellence", category: "academic_advantages" },
    { text: "Values-based education", category: "values_education" },
    { text: "Career preparation", category: "career_preparation" },
    { text: "Affordable education", category: "affordability" },
    { text: "Faculty qualifications", category: "faculty_info" },
    { text: "Explore more topics", category: "general", isExploreMore: true },
  ],

  // Quick navigation shortcuts
  quick_nav: [
    {
      text: "Apply now",
      category: "application_process",
      isSpecificFollowup: true,
    },
    {
      text: "Request information",
      category: "request_info",
      isSpecificFollowup: true,
    },
    {
      text: "Schedule campus tour",
      category: "campus_tour",
      isSpecificFollowup: true,
    },
    {
      text: "View academic calendar",
      category: "academic_calendar",
      isSpecificFollowup: true,
    },
    {
      text: "Download brochure",
      category: "download_brochure",
      isSpecificFollowup: true,
    },
    { text: "Explore more topics", category: "general", isExploreMore: true },
  ],

  // Thank you responses
  thanks: [
    { text: "More about programs", category: "programs_overview" },
    { text: "Admission details", category: "admissions_overview" },
    { text: "Scholarship information", category: "scholarships_overview" },
    { text: "Contact admissions", category: "contact_info" },
    { text: "Explore other topics", category: "general", isExploreMore: true },
  ],
};

// Helper function to get suggestions with fallback
export const getContextSuggestions = (context: string): SuggestedReply[] => {
  return contextBasedSuggestions[context] || contextBasedSuggestions.general;
};

// Function to get explore more suggestions from any context
export const getExploreMoreSuggestions = (
  currentContext: string
): SuggestedReply[] => {
  const exploreSuggestions = Object.entries(contextBasedSuggestions)
    .filter(
      ([key]) => key !== currentContext && key !== "general" && key !== "thanks"
    )
    .flatMap(([, suggestions]) =>
      suggestions.filter(
        (s) => !s.isExploreMore && !s.isBackToMain && !s.isSpecificFollowup
      )
    )
    .slice(0, 6);

  return [
    ...exploreSuggestions,
    {
      text: "Back to current topic",
      category: currentContext,
      isExploreMore: true,
    },
  ];
};

// Function to get program-specific suggestions
export const getProgramSuggestions = (
  programType: string
): SuggestedReply[] => {
  const baseSuggestions = [
    { text: "Curriculum details", category: `${programType}_curriculum` },
    { text: "Admission requirements", category: `${programType}_admissions` },
    { text: "Career opportunities", category: `${programType}_careers` },
    {
      text: "Explore more topics",
      category: "programs_overview",
      isExploreMore: true,
    },
  ];

  return baseSuggestions;
};

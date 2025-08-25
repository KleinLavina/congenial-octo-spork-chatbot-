// chatService.ts - Saint Joseph College Maasin - College of Teacher Education

export interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export function getCTEResponse(userInput: string): string {
  const input = userInput.toLowerCase();

  // Greetings
  if (
    input.includes("hello") ||
    input.includes("hi") ||
    input.includes("hey") ||
    input.includes("good morning") ||
    input.includes("good afternoon") ||
    input.includes("good evening")
  ) {
    return `Hello! 👋 Welcome to SJC Maasin CTE

I'm here to help you discover everything about our College of Teacher Education.

What can I assist you with today?
• Program information and courses
• Admission requirements and process
• Scholarships and financial assistance
• Campus facilities and student life

Just ask me anything! ✨`;
  }

  if (input.includes("what's up") || input.includes("how are you")) {
    return `Hi there! 😊 I'm doing great and ready to help you learn about SJC Maasin CTE.

Quick Facts:
📅 Established: 1928 (95+ years of excellence)
🎓 Focus: Quality teacher education with Catholic values

What brings you here today?
• Exploring our teacher education programs?
• Need information about admissions?
• Looking for scholarship opportunities?`;
  }

  // Programs and Courses
  if (
    input.includes("program") ||
    input.includes("course") ||
    input.includes("major") ||
    input.includes("degree")
  ) {
    return `🎓 Teacher Education Programs at SJC Maasin

Undergraduate Programs
• BEEd - Bachelor of Elementary Education
• BSEd - Bachelor of Secondary Education
  ┗ Majors: English, Mathematics, Science, Social Studies, Filipino, PE

Graduate Program
• MAEd - Master of Arts in Education

Why Choose Our Programs?
✓ Catholic values integrated with academic excellence
✓ 95+ years of proven educational leadership
✓ Strong alumni network in education sector

Which program would you like to know more about?`;
  }

  // Admissions and Enrollment
  if (
    input.includes("enroll") ||
    input.includes("apply") ||
    input.includes("admission") ||
    input.includes("register") ||
    input.includes("requirement")
  ) {
    return `📋 Admission Requirements & Process

Required Documents
✅ High school diploma/transcript
✅ SJC entrance examination
✅ Medical certificate
✅ Certificate of Good Moral Character
✅ Birth certificate (NSO/PSA)
✅ Baptismal certificate (for Catholic applicants)

Application Timeline
🗓️ First Semester: March - April
🗓️ Second Semester: August - September

Next Steps
Ready to apply? I can provide more specific details about the application process or connect you with our admissions office.`;
  }

  // Student Teaching and Practicum
  if (
    input.includes("student teaching") ||
    input.includes("practicum") ||
    input.includes("ojt") ||
    input.includes("internship") ||
    input.includes("teaching practice")
  ) {
    return `👩‍🏫 Student Teaching Program

Program Overview
📅 Duration: Full semester during 4th year
🎯 Goal: Real-world classroom experience with professional supervision

Teaching Placements
• Public schools in Maasin City
• Catholic schools throughout the region
• Rural schools in Southern Leyte

Key Activities
• Comprehensive lesson planning
• Classroom teaching demonstrations
• Professional portfolio development
• Educational research projects

Why It Matters
This hands-on experience prepares you for actual teaching careers with confidence and competence.

Want to know more about specific placement opportunities?`;
  }

  // LET and Licensing
  if (
    input.includes("let") ||
    input.includes("licensure") ||
    input.includes("board exam") ||
    input.includes("teacher exam") ||
    input.includes("license")
  ) {
    return `📊 Licensure Exam for Teachers (LET)

Exam Schedule
🗓️ When: March and September (annually)
🎓 Eligibility: After graduation from education program

SJC Maasin Advantage
📈 Consistently above-average passing rates
👨‍🏫 Dedicated faculty mentoring and support
📚 Comprehensive review programs

Our LET Support Services
• Intensive review courses
• Updated study materials and resources
• Practice examinations and mock tests
• One-on-one guidance sessions

Ready to succeed in your teaching career? Let me know if you need more details about our LET preparation programs.`;
  }

  // Campus Life
  if (
    input.includes("event") ||
    input.includes("activity") ||
    input.includes("organization") ||
    input.includes("club") ||
    input.includes("campus life")
  ) {
    return `🎉 Campus Life & Activities

Major Annual Events
⛪ St. Joseph Feast Day (March 19)
📚 Teacher Education Week
🎄 Catholic Schools Week
🏫 Foundation Day Celebration

Student Organizations
👥 JSTA - Josephian Student Teachers Association
⛪ Catholic Youth Organization
📖 Academic clubs (Mathematics, Science, English)
🎵 SJC Glee Club
🤝 Community service groups

Growth Opportunities
• Leadership development programs
• Faith formation activities
• Community outreach projects
• Cultural and artistic expressions

Our Philosophy
Build lasting friendships, grow in faith, and develop a heart for service.

Which activities interest you most?`;
  }

  // Scholarships and Financial Aid
  if (
    input.includes("scholarship") ||
    input.includes("financial aid") ||
    input.includes("tuition") ||
    input.includes("fee") ||
    input.includes("cost")
  ) {
    return `💰 Scholarships & Financial Assistance

Available Scholarships
🏆 Academic Excellence Scholarship
⛪ Catholic School Graduate Discount
🤝 Work-Study Programs
🎯 Merit-Based Awards
💪 Need-Based Financial Assistance

Flexible Payment Options
📅 Installment payment plans
💳 Monthly payment schemes
🏫 On-campus work opportunities

Scholarship Requirements
📊 Maintain required GPA
🤝 Complete community service hours
⛪ Active participation in campus activities

Ready to Apply?
Our financial aid office can help you explore all available options to make quality education affordable.

Would you like specific information about any scholarship program?`;
  }

  // Facilities
  if (
    input.includes("facility") ||
    input.includes("facilities") ||
    input.includes("library") ||
    input.includes("lab") ||
    input.includes("classroom")
  ) {
    return `🏫 Campus Facilities & Resources

Academic Infrastructure
📚 Modern library with digital resources
💻 State-of-the-art computer laboratories
🔬 Fully-equipped science laboratories
🎨 Audio-visual presentation rooms
📱 Smart classrooms with modern technology

Student Support Services
🏥 On-campus health center
🍽️ Student cafeteria
🏃‍♂️ Sports and recreation facilities
⛪ Beautiful campus chapel
🚗 Ample parking spaces

Modern Learning Features
🌐 Campus-wide WiFi connectivity
📱 Digital learning platforms
🎯 Dedicated practice teaching rooms
📖 Resource centers for each program

Experience Our Campus
We'd love to show you around! Would you like information about campus tours or visiting hours?`;
  }

  // Schedule and Academic Calendar
  if (
    input.includes("schedule") ||
    input.includes("calendar") ||
    input.includes("semester") ||
    input.includes("class") ||
    input.includes("time")
  ) {
    return `📅 Academic Calendar & Class Schedule

Semester System
📚 First Semester: June - October
📖 Second Semester: November - March
☀️ Summer Term: April - May

Class Hours
⏰ Weekdays: 7:00 AM - 7:00 PM
📅 Saturdays: 7:00 AM - 12:00 PM
🌅 Flexible morning and afternoon sessions

Important Academic Dates
📝 Enrollment Periods: May-June & October-November
📊 Final Examinations: End of each semester
🎓 Graduation: March

Flexible Learning Options
We offer various schedule options to accommodate working students and different learning preferences.

Need information about specific class schedules or academic deadlines?`;
  }

  // About SJC Maasin
  if (
    input.includes("about") ||
    input.includes("history") ||
    input.includes("background") ||
    input.includes("founded") ||
    input.includes("mission")
  ) {
    return `🏛️ About Saint Joseph College Maasin

Our Heritage
📅 Founded: 1928 (95+ years of educational excellence)
⛪ Catholic institution guided by diocesan clergy
🌟 One of the Philippines' oldest Catholic colleges

Mission Statement
Providing quality Catholic education that emphasizes:
• Academic excellence and innovation
• Character formation and moral development
• Community service and social responsibility
• Spiritual growth and faith development

Our Vision
To be the premier Catholic institution in Southern Leyte, known for transformative education and holistic human development.

Core Values
🙏 Faith • 💪 Excellence • 🤝 Service • ❤️ Love

Why This Matters
Nearly a century of shaping educators who make a difference in communities across the Philippines and beyond.

Interested in becoming part of this proud tradition?`;
  }

  // Student Life & Activities
  if (
    input.includes("student life") ||
    input.includes("activities") ||
    input.includes("extracurricular") ||
    input.includes("retreat")
  ) {
    return `🎯 Student Life & Personal Development

Leadership Organizations
👥 Student Teachers' Club
📚 Community Literacy Programs
🤝 Educational outreach missions
⛪ Faith formation and retreat programs

Hands-On Learning Experiences
🏫 Teaching demonstration opportunities
📖 Educational materials development
🌱 Community service projects
✨ Spiritual growth activities

Character Development Focus
💪 Leadership skills training
❤️ Service-oriented mindset
🙏 Faith-based formation
🌟 Personal growth opportunities

The SJC Experience
We don't just prepare teachers—we form educators who are leaders, servants, and agents of positive change.

Ready to make a meaningful difference in education and society?`;
  }

  // Achievements and Recognition
  if (
    input.includes("achievement") ||
    input.includes("award") ||
    input.includes("recognition") ||
    input.includes("accreditation")
  ) {
    return `🏆 Achievements & Recognition

Academic Excellence
⭐ CHED Level II Accredited Programs
📊 Consistently high LET passing rates
🎓 Outstanding alumni network in education

Institutional Awards
🏅 Outstanding Catholic School Recognition
👩‍🏫 Excellence in Teacher Preparation
🌟 Community Service Leadership Awards
⛪ Diocesan Educational Excellence Recognition

Alumni Success Stories
👨‍🏫 School principals and educational supervisors
📚 Master teachers and department heads nationwide
🌍 International educators and consultants
🏛️ Education department officials and policymakers

What This Means for You
Join a tradition of excellence with graduates who lead educational institutions and inspire students worldwide.

Want to learn more about our alumni network and career opportunities?`;
  }

  // Why Choose SJC
  if (
    input.includes("why choose") ||
    input.includes("advantage") ||
    input.includes("benefit") ||
    input.includes("why sjc")
  ) {
    return `⭐ Why Choose SJC Maasin CTE?

Academic Advantages
📈 95+ years of proven educational excellence
👨‍🏫 Highly qualified and dedicated faculty
📚 Modern, innovative teaching methodologies
🎯 Personalized attention with small class sizes

Values-Based Education
⛪ Strong Catholic identity and moral formation
🤝 Service-oriented educational philosophy
🙏 Spiritual growth and character development
❤️ Holistic personal development approach

Career Preparation Excellence
👩‍🏫 Comprehensive practice teaching programs
📊 Outstanding LET preparation and support
🌍 Extensive alumni network and connections
💼 Career guidance and job placement assistance

Affordable Quality Education
💰 Reasonable tuition fees and costs
🎓 Multiple scholarship opportunities
📅 Flexible payment plans and options

The Bottom Line
Quality education, strong values, excellent preparation, and affordable costs—all in a supportive Catholic community.

Ready to begin your journey as an exceptional educator?`;
  }

  // General Inquiries
  if (
    input.includes("inquiry") ||
    input.includes("inquire") ||
    input.includes("question") ||
    input.includes("ask") ||
    input.includes("information")
  ) {
    return `💭 I'm Here to Help!

What I Can Assist You With
• Academic programs (BEEd, BSEd, MAEd)
• Admission requirements and procedures
• Scholarship and financial aid options
• Student teaching and practicum details
• LET preparation and support services
• Campus facilities and resources
• Student activities and organizations

Need Direct Contact?
📞 Phone: (053) 570-8415
📧 Email: cte@sjcmaasin.edu.ph

Quick Questions?
Just ask me anything about SJC Maasin CTE, and I'll provide you with the information you need!

What specific topic interests you most?`;
  }

  // Contact Information
  if (
    input.includes("contact") ||
    input.includes("phone") ||
    input.includes("email") ||
    input.includes("office") ||
    input.includes("address") ||
    input.includes("location")
  ) {
    return `📞 Contact Information

College of Teacher Education
🏫 Saint Joseph College
📍 Tomas Oppus Street, Maasin City, Southern Leyte

Direct Contact Details
☎️ Telephone: (053) 570-8415
📧 Email: cte@sjcmaasin.edu.ph
🌐 Website: www.sjcmaasin.edu.ph

Office Hours
⏰ Regular Hours: Monday-Friday, 8:00 AM - 5:00 PM
📅 Extended Hours: During enrollment periods

Visit Us
🚗 Easy to find on Tomas Oppus Street
⛪ Campus chapel open for daily visits

How can we assist you further?`;
  }

  // BEEd Program
  if (
    input.includes("beed") ||
    input.includes("elementary") ||
    input.includes("primary")
  ) {
    return `🎓 Bachelor of Elementary Education (BEEd)

Program Focus
👧👦 Generalist educators for primary education levels
📚 Mastery of effective teaching strategies
🏫 Classroom management expertise
📋 Curriculum development skills

What You'll Learn
✏️ Child psychology and development
🎨 Creative and innovative teaching methods
📊 Student assessment and evaluation techniques
🌟 Values education and character formation

Career Opportunities
🏫 Public and private elementary schools
📚 Tutorial and learning centers
🌍 International schools and institutions

Ready to Shape Young Minds?
Elementary education is where learning foundations are built. Join us in making a difference in children's lives!`;
  }

  // BSEd Program
  if (
    input.includes("bsed") ||
    input.includes("secondary") ||
    input.includes("specialization")
  ) {
    return `🎓 Bachelor of Secondary Education (BSEd)

Available Specializations
📖 English Literature & Language
🔬 Science Education
🔢 Mathematics Education
🇵🇭 Filipino Language & Literature
🌍 Social Studies Education

Program Strengths
💡 Deep subject matter expertise
👩‍🏫 Extensive practical teaching experience
🏫 Comprehensive fieldwork and practice teaching
📱 21st-century educational technologies

Career Pathways
🏫 High school teaching positions
📚 Educational administration and management
🌍 International teaching opportunities

Which Major Interests You Most?
Each specialization offers unique opportunities to inspire and educate the next generation of learners.`;
  }

  // Thank you responses
  if (input.includes("thank") || input.includes("thanks")) {
    return `🙏 You're very welcome!

Glad I could help you learn about SJC Maasin CTE!

"Ad Majorem Dei Gloriam"
For the Greater Glory of God

✨ Have more questions? Just ask!
🌟 Ready to join our educational community?
📞 Contact us: (053) 570-8415

We're here whenever you need us!`;
  }

  // Default response
  return `🎓 Welcome to SJC Maasin CTE
One of the Philippines' oldest Catholic colleges (since 1928)

I can help you with information about:
• Teacher education programs (BEEd, BSEd, MAEd)
• Admissions requirements and process
• Scholarships and financial assistance
• Student teaching and practicum programs
• LET exam preparation and support
• Campus facilities and student life
• Contact information and office hours

👉 What would you like to know? Just type your question! 😊`;
}

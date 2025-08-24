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
    return `
👋 **Hello! Welcome to SJC Maasin CTE**

I can help you with:
- 📚 Program information
- 📝 Admissions & requirements
- 💰 Scholarships & financial aid
- 🎉 Campus life & facilities

✨ What would you like to know?
    `.trim();
  }

  if (input.includes("what's up") || input.includes("how are you")) {
    return `
😊 I'm here and ready to help!  

**SJC Maasin College of Teacher Education**  
📅 Established 1928  

What brings you here today?
- 🎓 Exploring our programs?
- 📝 Need admission info?
- 💰 Looking for scholarships?
    `.trim();
  }

  // Programs and Courses
  if (
    input.includes("program") ||
    input.includes("course") ||
    input.includes("major") ||
    input.includes("degree")
  ) {
    return `
🎓 **SJC Maasin Teacher Education Programs**

**Undergraduate**
- BEEd (Elementary Education)
- BSEd (Secondary Education)  
  ↳ English, Math, Science, Social Studies, Filipino, PE

**Graduate**
- MAEd (Master of Arts in Education)

✨ Catholic values + Academic excellence since 1928  

👉 Which program interests you?
    `.trim();
  }

  // Admissions and Enrollment
  if (
    input.includes("enroll") ||
    input.includes("apply") ||
    input.includes("admission") ||
    input.includes("register") ||
    input.includes("requirement")
  ) {
    return `
📝 **Admission Requirements**

**You'll need:**
- ✅ High school diploma
- ✅ SJC entrance exam
- ✅ Medical certificate
- ✅ Certificate of Good Moral Character
- ✅ Birth certificate
- ✅ Baptismal certificate (if Catholic)

**Application Deadlines**
- 📅 1st Semester: March–April  
- 📅 2nd Semester: August–September  

👉 Ready to apply? Need more details?
    `.trim();
  }

  // Student Teaching and Practicum
  if (
    input.includes("student teaching") ||
    input.includes("practicum") ||
    input.includes("ojt") ||
    input.includes("internship") ||
    input.includes("teaching practice")
  ) {
    return `
👩‍🏫 **Student Teaching Program**

**When**
- 4th year, 1 full semester  

**Where you'll teach**
- 🏫 Public schools (Maasin City)
- ⛪ Catholic schools in the region
- 🌾 Rural schools in Southern Leyte  

**What you'll do**
- 📝 Lesson planning
- 👩‍🏫 Teaching demonstrations
- 📂 Portfolio development
- 📊 Research projects  

✨ Real classroom experience with expert supervision  

👉 Questions about placements?
    `.trim();
  }

  // LET and Licensing
  if (
    input.includes("let") ||
    input.includes("licensure") ||
    input.includes("board exam") ||
    input.includes("teacher exam") ||
    input.includes("license")
  ) {
    return `
📊 **Licensure Exam for Teachers (LET)**

**Schedule**
- 📅 March & September (yearly)
- 🎓 Take after graduation  

**SJC Maasin Advantage**
- 📈 Above-average passing rates
- 📚 Comprehensive review programs
- 👨‍🏫 Faculty mentoring & support  

**We offer**
- 📝 Review courses
- 📖 Study materials
- 🎯 Practice exams  

💪 Ready to succeed?
    `.trim();
  }

  // Campus Life
  if (
    input.includes("event") ||
    input.includes("activity") ||
    input.includes("organization") ||
    input.includes("club") ||
    input.includes("campus life")
  ) {
    return `
🎉 **Campus Life at SJC Maasin**

**Major Events**
- ⛪ St. Joseph Feast Day (Mar 19)
- 📚 Teacher Education Week
- 🎄 Catholic Schools Week
- 🏫 Foundation Day  

**Organizations**
- 👥 Josephian Student Teachers (JSTA)
- ⛪ Catholic Youth Organization
- 📖 Subject clubs (Math, Science, English)
- 🎵 SJC Glee Club
- 🤝 Community Service Groups  

✨ Build friendships, grow in faith, serve others  

👉 Interested in joining?
    `.trim();
  }

  // Scholarships and Financial Aid
  if (
    input.includes("scholarship") ||
    input.includes("financial aid") ||
    input.includes("tuition") ||
    input.includes("fee") ||
    input.includes("cost")
  ) {
    return `
💰 **Scholarships & Financial Aid**

**Available Scholarships**
- 🏆 Academic Excellence Scholarship
- ⛪ Catholic School Graduate Discount
- 🤝 Work-Study Programs
- 🎯 Merit-Based Awards
- 💪 Need-Based Assistance  

**Payment Options**
- 📅 Flexible installment plans
- 💳 Monthly payment schemes
- 🏫 Campus work opportunities  

**Requirements**
- 📊 Maintain required GPA
- 🤝 Community service hours
- ⛪ Active campus participation  

👉 Want to apply for financial assistance?
    `.trim();
  }

  // Facilities
  if (
    input.includes("facility") ||
    input.includes("facilities") ||
    input.includes("library") ||
    input.includes("lab") ||
    input.includes("classroom")
  ) {
    return `
🏫 **Campus Facilities**

**Academic Buildings**
- 📚 Modern library with digital resources
- 💻 Computer laboratories
- 🔬 Science laboratories
- 🎨 Audio-visual rooms
- 📖 Smart classrooms  

**Student Services**
- 🏥 Health center
- 🍽️ Cafeteria
- 🏃‍♂️ Sports facilities
- ⛪ Campus chapel
- 🚗 Parking areas  

**Special Features**
- 🌐 WiFi throughout campus
- 📱 Digital learning tools
- 🎯 Practice teaching rooms  

👉 Want to visit our campus?
    `.trim();
  }

  // Schedule and Academic Calendar
  if (
    input.includes("schedule") ||
    input.includes("calendar") ||
    input.includes("semester") ||
    input.includes("class") ||
    input.includes("time")
  ) {
    return `
📅 **Academic Calendar & Schedule**

**Semester System**
- 📚 1st Semester: June - October
- 📖 2nd Semester: November - March
- ☀️ Summer Term: April - May  

**Class Schedule**
- ⏰ Monday-Friday: 7:00 AM - 7:00 PM
- 📅 Saturday: 7:00 AM - 12:00 PM
- 🌅 Morning & afternoon classes available  

**Important Dates**
- 📝 Enrollment: May-June & October-November
- 📊 Final Exams: End of each semester
- 🎓 Graduation: March  

👉 Need specific schedule information?
    `.trim();
  }

  // About SJC Maasin
  if (
    input.includes("about") ||
    input.includes("history") ||
    input.includes("background") ||
    input.includes("founded") ||
    input.includes("mission")
  ) {
    return `
🏛️ **About SJC Maasin**

**Founded 1928**
- ⛪ Catholic institution
- 👨‍💼 Run by diocesan clergy
- 🌟 Nearly 100 years of excellence  

**Mission**
- 🎓 Quality Catholic education
- ❤️ Character formation
- 🤝 Service to community
- 🙏 Spiritual development  

**Vision**
- 🌍 Premier Catholic college in Southern Leyte
- 💡 Innovative & transformative education
- 🌟 Holistic human development  

**Core Values**
- 🙏 Faith • 💪 Excellence • 🤝 Service • ❤️ Love  

👉 Proud to be part of our legacy?
    `.trim();
  }

  // Student Life & Activities
  if (
    input.includes("student life") ||
    input.includes("activities") ||
    input.includes("extracurricular") ||
    input.includes("retreat")
  ) {
    return `
🎯 **Student Life & Activities**

**Organizations**
- 👥 Student Teachers' Club
- 📚 Community Literacy Programs
- 🤝 Outreach & Teaching Missions
- ⛪ Leadership & Values Formation Retreats  

**Hands-On Experience**
- 🏫 Demo-teaching opportunities
- 📖 Instructional materials creation
- 🌱 Community service projects
- ✨ Spiritual formation activities  

**Building Future Leaders**
- 💪 Leadership development
- ❤️ Service orientation
- 🙏 Faith formation  

👉 Ready to make a difference?
    `.trim();
  }

  // Achievements and Recognition
  if (
    input.includes("achievement") ||
    input.includes("award") ||
    input.includes("recognition") ||
    input.includes("accreditation")
  ) {
    return `
🏆 **Achievements & Recognition**

**Academic Excellence**
- ⭐ CHED Level II Accredited Programs
- 📊 High LET passing rates
- 🎓 Outstanding alumni in education  

**Awards & Recognition**
- 🏅 Outstanding Catholic School
- 👩‍🏫 Excellence in Teacher Preparation
- 🌟 Community Service Awards
- ⛪ Diocesan Recognition  

**Alumni Success**
- 👨‍🏫 School principals & supervisors
- 📚 Master teachers nationwide
- 🌍 International educators
- 🏛️ Education department officials  

👉 Join our tradition of excellence!
    `.trim();
  }

  // Why Choose SJC
  if (
    input.includes("why choose") ||
    input.includes("advantage") ||
    input.includes("benefit") ||
    input.includes("why sjc")
  ) {
    return `
⭐ **Why Choose SJC Maasin CTE?**

**Academic Advantages**
- 📈 95+ years of educational excellence
- 👨‍🏫 Highly qualified faculty
- 📚 Modern teaching methods
- 🎯 Small class sizes  

**Values Formation**
- ⛪ Catholic identity & values
- 🤝 Service-oriented education
- 🙏 Spiritual growth opportunities
- ❤️ Character development  

**Career Preparation**
- 👩‍🏫 Extensive practice teaching
- 📊 LET review & support
- 🌍 Alumni network
- 💼 Job placement assistance  

**Affordable Quality**
- 💰 Reasonable tuition fees
- 🎓 Scholarship opportunities
- 📅 Flexible payment terms  

👉 Ready to start your teaching journey?
    `.trim();
  }

  // General Inquiries
  if (
    input.includes("inquiry") ||
    input.includes("inquire") ||
    input.includes("question") ||
    input.includes("ask") ||
    input.includes("information")
  ) {
    return `
💭 **General Inquiries Welcome!**

**I can help you with**
- 📚 Academic programs (BEEd, BSEd)
- 📝 Admission requirements
- 💰 Scholarships & financial aid
- 👩‍🏫 Student teaching placements
- 📊 LET preparation
- 🏫 Campus facilities
- 🎉 Student activities  

**Need Specific Info?**
- 📞 Call: (053) 570-8415
- 📧 Email: cte@sjcmaasin.edu.ph  

👉 What would you like to know more about?
    `.trim();
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
    return `
📞 **Contact Information**

**College of Teacher Education**
🏫 Saint Joseph College  
📍 Maasin City, Southern Leyte  

**Direct Contact**
- ☎️ Tel: (053) 570-8415
- 📧 Email: cte@sjcmaasin.edu.ph
- 🌐 Website: www.sjcmaasin.edu.ph  

**Office Hours**
- ⏰ Monday–Friday: 8:00 AM – 5:00 PM
- 📅 Extended hours during enrollment  

**Visit Us**
🚗 Tomas Oppus Street, Maasin City  
⛪ Campus chapel open daily  

👉 How can we assist you further?
    `.trim();
  }

  // BEEd Program
  if (
    input.includes("beed") ||
    input.includes("elementary") ||
    input.includes("primary")
  ) {
    return `
🎓 **Bachelor of Elementary Education (BEEd)**

**Program Focus**
- 👧👦 Generalist educators for primary levels
- 📚 Mastery in teaching strategies
- 🏫 Classroom management expertise
- 📋 Curriculum development skills  

**What You'll Learn**
- ✏️ Child psychology & development
- 🎨 Creative teaching methods
- 📊 Assessment & evaluation
- 🌟 Values & character formation  

**Career Paths**
- 🏫 Public/private elementary schools
- 📚 Tutorial centers
- 🌍 International schools  

👉 Ready to shape young minds?
    `.trim();
  }

  // BSEd Program
  if (
    input.includes("bsed") ||
    input.includes("secondary") ||
    input.includes("specialization")
  ) {
    return `
🎓 **Bachelor of Secondary Education (BSEd)**

**Available Majors**
- 📖 English Literature & Language
- 🔬 Science Education
- 🔢 Mathematics Education
- 🇵🇭 Filipino Language & Literature
- 🌍 Social Studies Education  

**Program Strengths**
- 💡 Subject matter expertise
- 👩‍🏫 Practical teaching experience
- 🏫 Fieldwork & practice teaching
- 📱 21st-century teaching methods  

**Career Opportunities**
- 🏫 High school teaching positions
- 📚 Education management
- 🌍 International teaching  

👉 Which major interests you most?
    `.trim();
  }

  // Thank you responses
  if (input.includes("thank") || input.includes("thanks")) {
    return `
🙏 **You're very welcome!**

Glad I could help with SJC Maasin info!  

*"Ad Majorem Dei Gloriam"*  
*For the Greater Glory of God*  

✨ More questions? Just ask!  
🌟 Ready to join our community?  
📞 Contact us: (053) 570-8415
    `.trim();
  }

  // Default response
  return `
🎓 **Welcome to SJC Maasin CTE**  
*One of the Philippines' oldest Catholic colleges (since 1928)*  

**I can help you with**
- 📚 Teacher education programs
- 📝 Admissions & requirements
- 💰 Scholarships & financial aid
- 👩‍🏫 Student teaching info
- 📊 LET exam preparation
- 🏫 Campus facilities & life
- 📞 Contact information  

👉 What interests you most? Just type your question! 😊
  `.trim();
}

// server.js - Backend for CTE Chatbot
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// CTE Knowledge Base
class CTEKnowledgeBase {
  constructor() {
    this.responses = {
      programs: {
        keywords: ['program', 'course', 'major', 'study'],
        response: `We offer several CTE programs including:
• Healthcare & Medical Technology
• Information Technology & Cybersecurity
• Engineering & Manufacturing
• Business & Entrepreneurship
• Culinary Arts & Hospitality
• Automotive Technology
• Construction & Trades

Which program would you like to learn more about?`
      },
      enrollment: {
        keywords: ['enroll', 'apply', 'admission', 'register'],
        response: `To enroll in our CTE programs:
1. Complete the online application at our website
2. Submit high school transcripts or GED
3. Attend an orientation session
4. Meet with an academic advisor

Application deadlines are typically 2 months before each semester starts. Would you like specific information about any program's requirements?`
      },
      schedule: {
        keywords: ['schedule', 'time', 'when', 'semester'],
        response: `Our CTE programs offer flexible scheduling:
• Full-time day programs (8 AM - 3 PM)
• Evening classes (6 PM - 9 PM)
• Weekend workshops
• Online/hybrid options for select programs

Semesters start in Fall (August), Spring (January), and Summer (June). What type of schedule works best for you?`
      },
      cost: {
        keywords: ['cost', 'tuition', 'financial', 'aid', 'scholarship', 'money'],
        response: `CTE Program costs vary by program:
• Certificate programs: $2,500 - $8,000
• Associate degree programs: $4,000 - $12,000 per year
• Financial aid available including Pell Grants, scholarships, and payment plans
• Many programs qualify for workforce development grants

Contact our Financial Aid office at (555) 123-4567 for personalized assistance.`
      },
      career: {
        keywords: ['job', 'career', 'employment', 'placement', 'work'],
        response: `Our CTE programs have excellent job placement rates:
• 85% of graduates find employment in their field within 6 months
• Career services including resume help, interview prep, and job fairs
• Industry partnerships with local employers
• Internship opportunities in most programs

Our Career Services team can help you explore career paths and connect with employers.`
      },
      contact: {
        keywords: ['contact', 'phone', 'email', 'office', 'address'],
        response: `CTE Department Contact Information:
📞 Phone: (555) 123-4500
📧 Email: cte@college.edu
🏢 Office: Building C, Room 150
⏰ Hours: Monday-Friday 8 AM - 5 PM
🌐 Website: www.college.edu/cte

You can also visit us in person for personalized assistance!`
      },
      requirements: {
        keywords: ['requirement', 'prerequisite', 'need', 'qualify'],
        response: `General CTE Program Requirements:
• High school diploma or GED
• Basic math and reading proficiency
• Some programs may require placement tests
• Specific programs may have additional requirements (e.g., background checks for healthcare)

Which specific program are you interested in? I can provide detailed requirements.`
      },
      credentials: {
        keywords: ['certificate', 'degree', 'credential'],
        response: `We offer both certificates and degrees:

📜 Certificates (6 months - 1 year):
• Focused skill training
• Quick entry into workforce
• Industry-recognized credentials

🎓 Associate Degrees (2 years):
• Comprehensive education
• Transfer options to 4-year schools
• Higher earning potential

Which option interests you more?`
      },
      greetings: {
        keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon'],
        response: "Hello! Welcome to the CTE Department. I'm here to help you learn about our Career and Technical Education programs. What would you like to know about?"
      },
      thanks: {
        keywords: ['thank', 'thanks', 'appreciate'],
        response: "You're welcome! I'm glad I could help. If you have any other questions about our CTE programs or need further assistance, feel free to ask. Good luck with your educational journey!"
      }
    };
    
    this.defaultResponse = `I'd be happy to help you with information about our CTE programs! I can assist with:
• Program details and course offerings
• Enrollment and application process
• Schedules and class times
• Costs and financial aid
• Job placement and career services
• Contact information

What specific topic would you like to know more about?`;
  }

  getResponse(userInput) {
    const input = userInput.toLowerCase();
    
    // Check each category for keyword matches
    for (const [category, data] of Object.entries(this.responses)) {
      for (const keyword of data.keywords) {
        if (input.includes(keyword)) {
          return {
            response: data.response,
            category: category,
            confidence: this.calculateConfidence(input, data.keywords)
          };
        }
      }
    }
    
    return {
      response: this.defaultResponse,
      category: 'general',
      confidence: 0.5
    };
  }
  
  calculateConfidence(input, keywords) {
    let matches = 0;
    keywords.forEach(keyword => {
      if (input.includes(keyword)) matches++;
    });
    return Math.min(matches / keywords.length + 0.3, 1.0);
  }
}

const knowledgeBase = new CTEKnowledgeBase();

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'CTE Chatbot API is running',
    endpoints: {
      'POST /api/chat': 'Send a message to the chatbot',
      'GET /api/programs': 'Get list of available programs',
      'GET /api/contact': 'Get contact information'
    }
  });
});

// Chat endpoint
app.post('/api/chat', (req, res) => {
  try {
    const { message, userId = 'anonymous' } = req.body;
    
    if (!message) {
      return res.status(400).json({ 
        error: 'Message is required',
        success: false 
      });
    }
    
    // Get response from knowledge base
    const result = knowledgeBase.getResponse(message);
    
    // Log interaction (in production, you might want to save to database)
    console.log(`[${new Date().toISOString()}] User ${userId}: ${message}`);
    console.log(`[${new Date().toISOString()}] Bot response: ${result.category} (confidence: ${result.confidence})`);
    
    res.json({
      success: true,
      response: result.response,
      category: result.category,
      confidence: result.confidence,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      success: false 
    });
  }
});

// Get available programs
app.get('/api/programs', (req, res) => {
  const programs = [
    {
      id: 1,
      name: 'Healthcare & Medical Technology',
      duration: '6-24 months',
      type: 'Certificate/Associate',
      description: 'Prepare for careers in healthcare including medical assistant, pharmacy tech, and more.'
    },
    {
      id: 2,
      name: 'Information Technology & Cybersecurity',
      duration: '12-24 months',
      type: 'Certificate/Associate',
      description: 'Learn networking, programming, cybersecurity, and IT support skills.'
    },
    {
      id: 3,
      name: 'Engineering & Manufacturing',
      duration: '18-24 months',
      type: 'Certificate/Associate',
      description: 'Hands-on training in manufacturing processes, quality control, and engineering principles.'
    },
    {
      id: 4,
      name: 'Business & Entrepreneurship',
      duration: '12-24 months',
      type: 'Certificate/Associate',
      description: 'Develop business management, marketing, and entrepreneurial skills.'
    },
    {
      id: 5,
      name: 'Culinary Arts & Hospitality',
      duration: '6-18 months',
      type: 'Certificate/Associate',
      description: 'Professional culinary training and hospitality management skills.'
    },
    {
      id: 6,
      name: 'Automotive Technology',
      duration: '12-24 months',
      type: 'Certificate/Associate',
      description: 'Comprehensive auto repair and maintenance training with modern diagnostic tools.'
    },
    {
      id: 7,
      name: 'Construction & Trades',
      duration: '6-18 months',
      type: 'Certificate',
      description: 'Learn carpentry, electrical, plumbing, and general construction skills.'
    }
  ];
  
  res.json({ 
    success: true,
    programs: programs,
    total: programs.length
  });
});

// Get contact information
app.get('/api/contact', (req, res) => {
  res.json({
    success: true,
    contact: {
      department: 'CTE Department',
      phone: '(555) 123-4500',
      email: 'cte@college.edu',
      office: 'Building C, Room 150',
      hours: 'Monday-Friday 8 AM - 5 PM',
      website: 'www.college.edu/cte',
      financialAid: {
        phone: '(555) 123-4567',
        email: 'finaid@college.edu'
      }
    }
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    success: false 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 CTE Chatbot Backend running on port ${PORT}`);
  console.log(`📝 API Documentation available at http://localhost:${PORT}`);
  console.log(`💬 Chat endpoint: POST http://localhost:${PORT}/api/chat`);
});

module.exports = app;
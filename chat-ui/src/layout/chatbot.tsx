import React, {
  useState,
  useRef,
  useEffect,
  type KeyboardEvent,
  type ChangeEvent,
} from "react";
import { Send, User, Cpu } from "lucide-react"; // Replaced Bot with Cpu
import "./css/chatbot.css";

// Define the shape of a message
interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const CTEChatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm the CTE Department assistant. I can help you with information about our Career and Technical Education programs, enrollment, schedules, and more. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);

  const [inputText, setInputText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (
      input.includes("program") ||
      input.includes("course") ||
      input.includes("major")
    ) {
      return "We offer several CTE programs including:\n• Healthcare & Medical Technology\n• Information Technology & Cybersecurity\n• Engineering & Manufacturing\n• Business & Entrepreneurship\n• Culinary Arts & Hospitality\n• Automotive Technology\n• Construction & Trades\n\nWhich program would you like to learn more about?";
    }

    if (
      input.includes("enroll") ||
      input.includes("apply") ||
      input.includes("admission") ||
      input.includes("register")
    ) {
      return "To enroll in our CTE programs:\n1. Complete the online application at our website\n2. Submit high school transcripts or GED\n3. Attend an orientation session\n4. Meet with an academic advisor\n\nApplication deadlines are typically 2 months before each semester starts. Would you like specific information about any program's requirements?";
    }

    if (
      input.includes("schedule") ||
      input.includes("time") ||
      input.includes("when") ||
      input.includes("semester")
    ) {
      return "Our CTE programs offer flexible scheduling:\n• Full-time day programs (8 AM - 3 PM)\n• Evening classes (6 PM - 9 PM)\n• Weekend workshops\n• Online/hybrid options for select programs\n\nSemesters start in Fall (August), Spring (January), and Summer (June). What type of schedule works best for you?";
    }

    if (
      input.includes("cost") ||
      input.includes("tuition") ||
      input.includes("financial") ||
      input.includes("aid") ||
      input.includes("scholarship")
    ) {
      return "CTE Program costs vary by program:\n• Certificate programs: $2,500 - $8,000\n• Associate degree programs: $4,000 - $12,000 per year\n• Financial aid available including Pell Grants, scholarships, and payment plans\n• Many programs qualify for workforce development grants\n\nContact our Financial Aid office at (555) 123-4567 for personalized assistance.";
    }

    if (
      input.includes("job") ||
      input.includes("career") ||
      input.includes("employment") ||
      input.includes("placement")
    ) {
      return "Our CTE programs have excellent job placement rates:\n• 85% of graduates find employment in their field within 6 months\n• Career services including resume help, interview prep, and job fairs\n• Industry partnerships with local employers\n• Internship opportunities in most programs\n\nOur Career Services team can help you explore career paths and connect with employers.";
    }

    if (
      input.includes("contact") ||
      input.includes("phone") ||
      input.includes("email") ||
      input.includes("office")
    ) {
      return "CTE Department Contact Information:\n📞 Phone: (555) 123-4500\n📧 Email: cte@college.edu\n🏢 Office: Building C, Room 150\n⏰ Hours: Monday-Friday 8 AM - 5 PM\n🌐 Website: www.college.edu/cte\n\nYou can also visit us in person for personalized assistance!";
    }

    if (
      input.includes("requirement") ||
      input.includes("prerequisite") ||
      input.includes("need") ||
      input.includes("qualify")
    ) {
      return "General CTE Program Requirements:\n• High school diploma or GED\n• Basic math and reading proficiency\n• Some programs may require placement tests\n• Specific programs may have additional requirements (e.g., background checks for healthcare)\n\nWhich specific program are you interested in? I can provide detailed requirements.";
    }

    if (
      input.includes("certificate") ||
      input.includes("degree") ||
      input.includes("credential")
    ) {
      return "We offer both certificates and degrees:\n\n📜 Certificates (6 months - 1 year):\n• Focused skill training\n• Quick entry into workforce\n• Industry-recognized credentials\n\n🎓 Associate Degrees (2 years):\n• Comprehensive education\n• Transfer options to 4-year schools\n• Higher earning potential\n\nWhich option interests you more?";
    }

    if (
      input.includes("hello") ||
      input.includes("hi") ||
      input.includes("hey")
    ) {
      return "Hello! Welcome to the CTE Department. I'm here to help you learn about our Career and Technical Education programs. What would you like to know about?";
    }

    if (input.includes("thank") || input.includes("thanks")) {
      return "You're welcome! I'm glad I could help. If you have any other questions about our CTE programs or need further assistance, feel free to ask. Good luck with your educational journey!";
    }

    return "I'd be happy to help you with information about our CTE programs! I can assist with:\n• Program details and course offerings\n• Enrollment and application process\n• Schedules and class times\n• Costs and financial aid\n• Job placement and career services\n• Contact information\n\nWhat specific topic would you like to know more about?";
  };

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getResponse(inputText),
        isBot: true,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div className="chat-container">
      {/* Header */}
      <div className="chat-header">
        <div className="chat-header-left">
          <div className="chat-avatar">
            <Cpu />
          </div>
          <div>
            <h1>CTE Department Assistant</h1>
            <p>Career and Technical Education Support</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="chat-messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`chat-message ${msg.isBot ? "bot" : "user"}`}
          >
            <div className="chat-message-inner">
              <div className="chat-avatar-small">
                {msg.isBot ? <Cpu /> : <User />}
              </div>
              <div
                className={`chat-bubble ${
                  msg.isBot ? "bot-bubble" : "user-bubble"
                }`}
              >
                <div className="chat-text">{msg.text}</div>
                <div className="chat-time">
                  {msg.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="chat-message bot">
            <div className="chat-message-inner">
              <div className="chat-avatar-small">
                <Cpu />
              </div>
              <div className="chat-bubble bot-bubble typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef}></div>
      </div>

      {/* Input */}
      <div className="chat-input-area">
        <textarea
          value={inputText}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Ask me about CTE programs, enrollment, schedules, or anything else..."
          rows={2}
        />
        <button onClick={handleSend} disabled={!inputText.trim()}>
          <Send />
        </button>
      </div>
    </div>
  );
};

export default CTEChatbot;

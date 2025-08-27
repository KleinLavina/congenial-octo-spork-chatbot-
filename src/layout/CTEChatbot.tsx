import React, { useState, useRef, useEffect } from "react";
import ChatHeader from "./components/ChatHeader";
import ChatInputArea from "./components/ChatInputArea";
import ChatMessages from "./components/ChatMessages";
import type { Message } from "./backend/chatService2";
import { getCTEResponse } from "./backend/chatService2";
import "./css/chatbot.css";
//import { contextBasedSuggestions } from "./backend/suggestedReplies";

const CTEChatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hey there! 👋 I'm your CTE Buddy from SJC Maasin!\n\nThink of me as your college bestie who actually knows where all the offices are! 😄\n\nWhat can I help you with today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () =>
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
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
      const botMessage: Message = {
        id: messages.length + 2,
        text: getCTEResponse(inputText),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <main className="chat">
      <div className="chat-container">
        <ChatHeader title="CTE Buddy" />
        <ChatMessages
          messages={messages}
          isTyping={isTyping}
          messagesEndRef={messagesEndRef}
          //suggestedReplies={contextBasedSuggestions["greetings"]}
          //onSuggestionClick={(reply) => {
          //setInputText(reply);
          //handleSend();
          // }}
        />

        <ChatInputArea
          inputText={inputText}
          setInputText={setInputText}
          handleSend={handleSend}
        />
      </div>
    </main>
  );
};

export default CTEChatbot;

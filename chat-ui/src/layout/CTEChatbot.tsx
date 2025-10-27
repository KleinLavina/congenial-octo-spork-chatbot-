import React, { useState, useRef, useEffect } from "react";
import ChatHeader from "./components/ChatHeader";
import ChatInputArea from "./components/ChatInputArea";
import ChatMessages from "./components/ChatMessages";
import type { Message } from "./backend/chatService2";
import { getMerchandiseResponse } from "./backend/chatService2"; // Updated import
import "./css/chatbot.css";
import type { SuggestedReply } from "./backend/suggestedReplies";

const CTEChatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! 👋 Welcome to Tatak Josephinian - Official SJC Merchandise Store!\n\nI'm here to help you with all your SJC merchandise needs. What can I help you find today? 🛍️",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [currentSuggestions, setCurrentSuggestions] = useState<
    SuggestedReply[]
  >([]);
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
    setCurrentSuggestions([]); // Clear suggestions when bot starts typing

    setTimeout(() => {
      const response = getMerchandiseResponse(inputText); // Updated function call
      const botMessage: Message = {
        id: messages.length + 2,
        text: response.message,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setCurrentSuggestions(response.suggestions);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (reply: string) => {
    setInputText(reply);
    handleSend();
  };

  return (
    <main className="chat">
      <div className="chat-container">
        <ChatHeader title="J-Gear Assistant" /> {/* Updated title */}
        <ChatMessages
          messages={messages}
          isTyping={isTyping}
          messagesEndRef={messagesEndRef}
          suggestedReplies={isTyping ? [] : currentSuggestions} // Hide suggestions when typing
          onSuggestionClick={handleSuggestionClick}
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

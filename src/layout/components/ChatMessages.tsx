import React from "react";
import { User, Cpu } from "lucide-react";
import type { Message } from "../backend/chatService2";
import "../css/chatmessage.css";
//import type { SuggestedReply } from "../backend/suggestedReplies";

// Props for ChatMessages
interface ChatMessagesProps {
  messages: Message[];
  isTyping: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
  //  suggestedReplies: SuggestedReply[];
  //  onSuggestionClick: (suggestion: string) => void;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({
  messages,
  isTyping,
  messagesEndRef,
  //  suggestedReplies, // ✅ now included
  //  onSuggestionClick, // ✅ now included
}) => (
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

    {/* Suggested Replies 
    {suggestedReplies.length > 0 && messages.length > 0 && (
      <div className="suggested-replies-section">
        <div className="suggested-replies-container">
          {suggestedReplies.map(
            (
              suggestion: SuggestedReply,
              index // ✅ typed
            ) => (
              <button
                key={index}
                className={`suggested-reply-bubble ${
                  suggestion.isExploreMore ? "explore-more" : ""
                }`}
                onClick={() => onSuggestionClick(suggestion.text)}
              >
                {suggestion.text}
              </button>
            )
          )}
        </div>
      </div>
      
    )}
*/}
    <div ref={messagesEndRef}></div>
  </div>
);

export default ChatMessages;

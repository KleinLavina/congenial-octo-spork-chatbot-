import React from "react";
import "./css/layout.css";
import "./css/chat.css";

const Chat: React.FC = () => {
  return (
    <main className="chat">
      <div className="chat-container">
        {/* Header */}
        <div className="chat-header">
          <h3>Chat Room</h3>
        </div>

        {/* Messages */}
        <div className="messages-contents">
          <div className="message ai">Hello! How can I help you?</div>
          <div className="message user">Hi there!</div>
          <div className="message ai">
            Great! What would you like to chat about?
          </div>
          <div className="message ai">Hello! How can I help you?</div>
          <div className="message user">Hi there!</div>
          <div className="message ai">
            Great! What would you like to chat about?
          </div>

          {/* Your real messages here */}
        </div>

        {/* Input bar */}
        <div className="input-container">
          <input type="text" placeholder="Type a message..." />
        </div>
      </div>
    </main>
  );
};

export default Chat;

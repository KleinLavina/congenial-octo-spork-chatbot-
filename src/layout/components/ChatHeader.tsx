import React from "react";
import { Cpu } from "lucide-react";
import { FiMoreHorizontal, FiBookmark, FiShare2 } from "react-icons/fi";

const ChatHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="chat-header">
      <div className="left-section">
        <div className="chat-avatar">
          <Cpu />
        </div>
        <div className="chat-title">{title}</div>
      </div>
      <div className="right-section">
        <FiMoreHorizontal className="chat-icon" />
        <FiBookmark className="chat-icon" />
        <FiShare2 className="chat-icon" />
      </div>
    </div>
  );
};

export default ChatHeader;

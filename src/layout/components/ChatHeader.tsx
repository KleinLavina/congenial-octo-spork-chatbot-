import React from "react";
import { Cpu } from "lucide-react";
import { FiMoreHorizontal, FiBookmark, FiShare2 } from "react-icons/fi";
import "../css/chatheader.css";

const ChatHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="chat-header">
      {/* Left Section */}
      <div className="left-section">
        {/* Avatar with Online Status */}
        <div className="avatar-container">
          <div className="chat-avatar">
            <Cpu />
          </div>
          <span className="online-indicator"></span>
        </div>

        {/* Title */}
        <div className="chat-title">{title}</div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <FiMoreHorizontal className="chat-icon" />
        <FiBookmark className="chat-icon" />
        <FiShare2 className="chat-icon" />
      </div>
    </div>
  );
};

export default ChatHeader;

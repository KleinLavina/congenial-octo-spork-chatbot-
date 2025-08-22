import React from "react";
import "./css/layout.css";

const SidebarLeft: React.FC = () => {
  return (
    <aside className="sidebar left">
      <h2>Left Sidebar</h2>
      <button className="new-chat">+ New Chat</button>
    </aside>
  );
};

export default SidebarLeft;

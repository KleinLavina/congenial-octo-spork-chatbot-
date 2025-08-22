import React from "react";
import "./css/layout.css";
const SidebarRight: React.FC = () => {
  return (
    <aside className="sidebar right">
      <h2>Right Sidebar</h2>
      <button className="new-chat">Settings</button>
    </aside>
  );
};

export default SidebarRight;

import React from "react";
import SidebarLeft from "./SidebarLeft";
import CTEChatbot from "./CTEChatbot";

const Layout: React.FC = () => {
  return (
    <div className="app">
      <SidebarLeft />
      <CTEChatbot />
    </div>
  );
};

export default Layout;

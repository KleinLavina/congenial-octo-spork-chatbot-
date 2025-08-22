import React from "react";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";
import Chat from "./Chat";
import Chatbot from "./chatbot";

const Layout: React.FC = () => {
  return (
    <div className="app">
      <SidebarLeft />
      <Chat />
      <SidebarRight />
    </div>
  );
};

export default Layout;

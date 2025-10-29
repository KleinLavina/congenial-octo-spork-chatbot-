import React, { useState } from "react";
import SidebarLeft from "./SidebarLeft";
import CTEChatbot from "./CTEChatbot";
import FaqsModal from "./modules/FaqsModal";

const Layout: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenFAQs = () => {
    console.log("Opening FAQ modal from Layout");
    setIsModalOpen(true);
  };

  const handleCloseFAQs = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <SidebarLeft onFAQsClick={handleOpenFAQs} />
      <CTEChatbot onFAQsClick={handleOpenFAQs} />
      <FaqsModal isOpen={isModalOpen} onClose={handleCloseFAQs} />
    </div>
  );
};

export default Layout;

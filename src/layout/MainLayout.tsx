import React, { useState } from "react";
import SidebarLeft from "./SidebarLeft";
import CTEChatbot from "./CTEChatbot";
import FaqsModal from "./modules/Faqs";
import AboutModal from "./modules/About";
import ProfileModal from "./modules/Profile";

const Layout: React.FC = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const handleOpenModal = () => setisModalOpen(true);
  const handleCloseModal = () => setisModalOpen(false);

  const [isAboutOpen, setisAboutOpen] = useState(false);
  const handleOpenAbout = () => setisAboutOpen(true);
  const handleCloseAbout = () => setisAboutOpen(false);

  const [isProfileOpen, setisProfileOpen] = useState(false);
  const handleOpenProfile = () => setisProfileOpen(true);
  const handleCloseProfile = () => setisProfileOpen(false);

  return (
    <div className="app">
      <SidebarLeft
        onOpenModal={handleOpenModal}
        onAboutModal={handleOpenAbout}
        onProfileModal={handleOpenProfile}
      />
      <CTEChatbot />
      <FaqsModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <AboutModal isShown={isAboutOpen} onHide={handleCloseAbout} />
      <ProfileModal isOpening={isProfileOpen} onClosing={handleCloseProfile} />
    </div>
  );
};

export default Layout;

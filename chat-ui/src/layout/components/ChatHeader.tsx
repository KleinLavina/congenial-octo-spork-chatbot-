import React, { useState, useEffect } from "react";
import { Menu, RefreshCw, HelpCircle, Facebook } from "lucide-react";
import logo from "../../assets/ashbro.png";
import "../css/chatheader.css";

const ChatHeader: React.FC<{ title: string }> = ({ title }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showRightSection, setShowRightSection] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 500) {
        // Show right section (mobile menu) on screens below 500px
        setShowRightSection(true);
      } else {
        // Hide right section on screens above 500px
        setShowRightSection(false);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleFAQs = () => {
    console.log("FAQs clicked");
    setIsMenuOpen(false);
  };

  const handleFacebook = () => {
    // Open Facebook page in new tab
    window.open(
      "https://www.facebook.com/profile.php?id=61578204130888",
      "_blank"
    );
    setIsMenuOpen(false);
  };

  return (
    <div className="chat-header">
      {/* Left Section */}
      <div className="left-section">
        {/* Avatar with Online Status */}
        <div className="avatar-container">
          <div className="chat-avatar">
            <img src={logo} alt="Chat avatar" />
          </div>
        </div>

        {/* Title with Online Status */}
        <div className="title-container">
          <div className="chat-title">{title}</div>
          <div className="online-status">
            <span className="online-dot"></span>
            Online
          </div>
        </div>
      </div>

      {/* Right Section - Only show when screen is below 500px */}
      {showRightSection && (
        <div className="right-section">
          {/* Desktop Options - Hidden since we only show mobile menu */}
          <div className="desktop-options" style={{ display: "none" }}>
            <button className="header-btn" onClick={handleFAQs} title="FAQs">
              <HelpCircle size={18} />
              <span>FAQs</span>
            </button>
            <button
              className="header-btn"
              onClick={handleRefresh}
              title="Refresh Chat"
            >
              <RefreshCw size={18} />
              <span>Refresh</span>
            </button>
          </div>

          {/* Mobile Menu Button (visible on small screens) */}
          <div className="mobile-menu">
            <button
              className="menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <Menu size={20} />
            </button>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
              <div className="mobile-dropdown">
                <button className="dropdown-item" onClick={handleFAQs}>
                  <HelpCircle size={16} />
                  <span>FAQs</span>
                </button>
                <button className="dropdown-item" onClick={handleRefresh}>
                  <RefreshCw size={16} />
                  <span>Refresh Chat</span>
                </button>
                {/* Facebook Page Option */}
                <button className="dropdown-item" onClick={handleFacebook}>
                  <Facebook size={16} />
                  <span>Our FB Page</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatHeader;

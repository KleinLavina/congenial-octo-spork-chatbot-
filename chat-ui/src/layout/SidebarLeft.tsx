import React, { useState, useEffect } from "react";
import "./css/layout.css";
import "./css/sidebarleft.css";
import { FaQuestionCircle, FaRedo, FaFacebook } from "react-icons/fa";
import logoSymbol from "../assets/haha.png";

const SidebarLeft: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleFacebook = () => {
    // Open Facebook page in new tab
    window.open(
      "https://www.facebook.com/profile.php?id=61578204130888",
      "_blank"
    );
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 500) {
        // Extra small screens: sidebar hidden, menu icon visible
        setIsVisible(false);
        setIsExpanded(false);
      } else if (width <= 600) {
        // Small screens: sidebar hidden, menu icon visible
        setIsVisible(false);
        setIsExpanded(false);
      } else if (width <= 1024) {
        // Medium screens: collapsed sidebar, no menu icon
        setIsVisible(true);
        setIsExpanded(false);
      } else {
        // Large screens: fully expanded
        setIsVisible(true);
        setIsExpanded(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Menu icon for small screens */}

      {/* Sidebar */}
      {isVisible && (
        <aside
          className={`sidebar left ${isExpanded ? "expanded" : "collapsed"}`}
        >
          <div className="sidebar-container">
            {/* Toggle Button */}
            <button
              className="toggle-btn"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "«  " : "»"}
              {isExpanded && <span> Minimize</span>}
            </button>

            {/* Top Section */}
            <div className="sidebar-top">
              <h2 className="logo">
                {isExpanded && (
                  <img
                    src={logoSymbol}
                    alt="CTE Buddy Logo"
                    className="w-6 h-6 inline-block"
                  />
                )}
                {isExpanded ? "J-Gear" : "J-G"}
              </h2>
              <div className="icon-wrapper">
                <button
                  className={`new-chat ${
                    isExpanded ? "expanded-btn" : "collapsed-btn"
                  }`}
                  onClick={handleRefresh}
                >
                  {isExpanded ? (
                    <>
                      <FaRedo size={18} /> Refresh Chat
                    </>
                  ) : (
                    <FaRedo size={18} />
                  )}
                </button>
                {!isExpanded && <span className="tooltip">Refresh Chat</span>}
              </div>
            </div>

            {/* Main Menu */}
            <nav className="sidebar-menu">
              <ul>
                <li>
                  <div className="icon-wrapper">
                    <FaQuestionCircle className="icon" />
                    {!isExpanded && <span className="tooltip">FAQs</span>}
                  </div>
                  {isExpanded && <span>FAQs</span>}
                </li>

                {/* New Facebook Page Option */}
                <li>
                  <div className="icon-wrapper">
                    <button onClick={handleFacebook} className="icon-button">
                      <FaFacebook className="icon" />
                    </button>
                    {!isExpanded && (
                      <span className="tooltip">Our FB Page</span>
                    )}
                  </div>
                  {isExpanded && (
                    <button onClick={handleFacebook} className="text-button">
                      Our FB Page
                    </button>
                  )}
                </li>
              </ul>
            </nav>

            {/* Footer */}
            {isExpanded && (
              <div className="sidebar-footer">
                <small>Student Portal • Google Classroom • Email</small>
              </div>
            )}
          </div>
        </aside>
      )}
    </>
  );
};

export default SidebarLeft;

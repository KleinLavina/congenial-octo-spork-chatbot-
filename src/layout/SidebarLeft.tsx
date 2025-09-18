import React, { useState, useEffect } from "react";
import "./css/layout.css";
import "./css/sidebarleft.css";
import { FaInfoCircle, FaQuestionCircle, FaUser, FaRedo } from "react-icons/fa";
import logoSymbol from "../assets/ctebuddylogo.png";

type SidebarPops = {
  onOpenModal: () => void;
  onAboutModal: () => void;
  onProfileModal: () => void;
};
const SidebarLeft: React.FC<SidebarPops> = ({
  onOpenModal,
  onAboutModal,
  onProfileModal,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [canToggle, setCanToggle] = useState(false); // menu icon visibility
  const handleRefresh = () => {
    window.location.reload();
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 500) {
        // Extra small screens: sidebar hidden, menu icon visible
        setIsVisible(false);
        setCanToggle(true); // menu icon always shows
        setIsExpanded(false);
      } else if (width <= 600) {
        // Small screens: sidebar hidden, menu icon visible
        setIsVisible(false);
        setCanToggle(true);
        setIsExpanded(false);
      } else if (width <= 1024) {
        // Medium screens: collapsed sidebar, no menu icon
        setIsVisible(true);
        setCanToggle(false);
        setIsExpanded(false);
      } else {
        // Large screens: fully expanded
        setIsVisible(true);
        setCanToggle(false);
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
      {canToggle && <div className="menu-icon">&#9776;</div>}

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
                {isExpanded ? "CTE Buddy" : "CB"}
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
                <li onClick={onOpenModal}>
                  <div className="icon-wrapper">
                    <FaQuestionCircle className="icon" />
                    {!isExpanded && <span className="tooltip">FAQs</span>}
                  </div>
                  {isExpanded && <span>FAQs</span>}
                </li>

                <li onClick={onAboutModal}>
                  <div className="icon-wrapper">
                    <FaInfoCircle className="icon" />
                    {!isExpanded && <span className="tooltip">About</span>}
                  </div>
                  {isExpanded && <span>About CTE Buddy</span>}
                </li>

                <li onClick={onProfileModal}>
                  <div className="icon-wrapper">
                    <FaUser className="icon" />
                    {!isExpanded && <span className="tooltip">Profile</span>}
                  </div>
                  {isExpanded && <span>Profile / Settings</span>}
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

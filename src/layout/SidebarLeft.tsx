import React, { useState, useEffect } from "react";
import "./css/layout.css";
import "./css/sidebarleft.css";
import {
  FaBook,
  FaCalendarAlt,
  FaQuestionCircle,
  FaUser,
  FaPencilAlt,
} from "react-icons/fa";

const SidebarLeft: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [canToggle, setCanToggle] = useState(false); // menu icon visibility

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 786) {
        // Small screens: sidebar hidden, menu icon visible
        setIsVisible(false);
        setCanToggle(true); // menu icon always shows
        setIsExpanded(false);
      } else if (width <= 800) {
        // Medium screens: collapsed sidebar, no menu icon
        setIsVisible(true);
        setCanToggle(false);
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

  const toggleSidebar = () => setIsVisible(!isVisible);

  return (
    <>
      {/* Menu icon for small screens */}
      {canToggle && (
        <div className="menu-icon" onClick={toggleSidebar}>
          &#9776;
        </div>
      )}

      {/* Sidebar */}
      {isVisible && (
        <aside
          className={`sidebar left ${isExpanded ? "expanded" : "collapsed"}`}
        >
          <div className="sidebar-container">
            {/* Toggle Button */}
            <button
              className="toggle-sidebar"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "«" : "»"}
            </button>

            {/* Top Section */}
            <div className="sidebar-top">
              <h2 className="logo">{isExpanded ? "CTE Buddy" : "CB"}</h2>
              <button
                className={`new-chat ${
                  isExpanded ? "expanded-btn" : "collapsed-btn"
                }`}
              >
                {isExpanded ? "+ Ask a Question" : <FaPencilAlt size={18} />}
              </button>
            </div>

            {/* Main Menu */}
            <nav className="sidebar-menu">
              <ul>
                <li>
                  <FaQuestionCircle className="icon" />
                  {isExpanded && <span>FAQs</span>}
                </li>
                <li>
                  <FaBook className="icon" />
                  {isExpanded && <span>Library</span>}
                </li>
                <li>
                  <FaCalendarAlt className="icon" />
                  {isExpanded && <span>Events / Calendar</span>}
                </li>
                <li>
                  <FaUser className="icon" />
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

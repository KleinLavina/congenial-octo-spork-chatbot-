import React from "react";
import "./css/faqs.css"; // Import your CSS file

const Layout: React.FC = () => {
  return (
    <div className="outer-container">
      <div className="inner-container">
        <h1>Hello, I’m the centered white box!</h1>
        <p>This is inside the floating container.</p>
      </div>
    </div>
  );
};

export default Layout;

import React from 'react';

const Header = ({ logo, title, threedot }) => {
    return (
      <div className="flex justify-between items-center p-4 shadow-md">
        {/* Left Icon */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-8" />
        </div>
  
        {/* Center - Page Title */}
        <span className="text-[#716966] font-semibold text-xl font-chivo">
          {title}
        </span>
  
        {/* Right Icon - Hamburger */}
        <div>
          <img src={threedot} alt="Menu Icon" className="h-6 w-6" />
        </div>
      </div>
    );
  };

export default Header;
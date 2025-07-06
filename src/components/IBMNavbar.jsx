

import React, { useState } from 'react';
import './Navbar.css';
import { Search, Globe, User, Menu, X, ChevronDown } from 'lucide-react';

const IBMNavbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: 'AI', key: 'ai' },
    { name: 'Hybrid Cloud', key: 'hybrid-cloud' },
    { name: 'Products', key: 'products' },
    { name: 'Consulting', key: 'consulting' },
    { name: 'Support', key: 'support' },
    { name: 'Think', key: 'think' }
  ];

  const dropdowns = {
    ai: ['Overview', 'watsonx', 'Agents', 'Granite models', 'Consulting', 'Research', 'Ethics and governance'],
    'hybrid-cloud': ['Overview', 'Cloud platform', 'IT infrastructure', 'Quantum computing'],
    products: ['AI & ML', 'Analytics', 'Databases', 'Security', 'Automation'],
    support: ['Docs', 'Fixes'],
    consulting: ['Overview', 'Industries', 'Services'],
    think: ['Innovation', 'Insights'],
  };

  return (
    <nav className="ibm-navbar">
      <div className="ibm-navbar-container">
        <div className="ibm-logo">IBM</div>

        <div className="ibm-menu-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <ul className={`ibm-nav-links ${mobileOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li
              key={item.key}
              className="ibm-nav-item-wrapper"
              onMouseEnter={() => setActiveDropdown(item.key)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className={`ibm-nav-item ${activeDropdown === item.key ? 'active' : ''}`}>
                <div className="ibm-nav-button">
                  {item.name}
                  <ChevronDown size={14} />
                </div>
                {activeDropdown === item.key && (
                  <div className="ibm-dropdown-horizontal">
                    {dropdowns[item.key].map((option, idx) => (
                      <div key={idx} className="ibm-dropdown-box">
                        <div className="ibm-dropdown-heading">{option}</div>
                        <p className="ibm-dropdown-desc">Explore {option} →</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="ibm-icons">
          <Search size={18} />
          <Globe size={18} />
          <User size={18} />
        </div>
      </div>
    </nav>
  );
};

export default IBMNavbar;

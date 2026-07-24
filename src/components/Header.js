'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header({ brandTitle = "Next.js Kit", navigationItems = [] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const defaultNavItems = navigationItems.length > 0 ? navigationItems : [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/#features' },
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
  ];

  return (
    <header className="site-header-wrapper">
      <div className="site-header">
        <div className="container header-container">
          <Link href="/" className="header-left">
            <div className="header-logo-badge">
              <span>DEB</span>
            </div>
            <div className="header-brand">
              <span className="header-title">{brandTitle}</span>
              <span className="header-badge-sub">DEV KIT</span>
            </div>
          </Link>

          <div className="header-middle">
            <button 
              className="burger-btn" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Navigation"
            >
              <span className="material-symbols-outlined burger-icon">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>

          <div className="header-right">
            <Link href="https://github.com/darioevaristobellotta/KIT" target="_blank" rel="noopener noreferrer" className="header-cta-pill">
              <span>GitHub Kit</span>
              <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>open_in_new</span>
            </Link>
          </div>
        </div>
      </div>

      <div className={`header-dropdown ${isMenuOpen ? 'open' : ''}`}>
        <div className="container dropdown-container">
          <nav className="dropdown-nav">
            {defaultNavItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="dropdown-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

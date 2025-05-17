import React, { useState } from 'react';
// import './Header.css';
// import { IonIcon } from 'react-ion-icon'; // Optional if you use `ion-icon`, or use <i> tags if you used CDN

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const handleToggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleNavLinkClick = () => {
    setMenuActive(false);
  };

  return (
    <header className="header">
      <div className="container">
        <h1>
          <a href="#" className="logo">Foodie<span className="span">.</span></a>
        </h1>

        <nav className={`navbar ${menuActive ? 'active' : ''}`}>
          <ul className="navbar-list">
            {[
              { href: '#home', text: 'Home' },
              { href: '#about', text: 'About Us' },
              { href: 'foodmenu.html', text: 'Food Menu' },
              { href: '#blog', text: 'Blog' },
              { href: '#footer', text: 'Contact Us' },
              { href: 'orderitem.html', text: 'Order Item' },
              { href: 'login.html', text: 'Login' },
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <a href={item.href} className="navbar-link" onClick={handleNavLinkClick}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-btn-group">
          <button className="search-btn" aria-label="Search">
            <IonIcon name="search-outline" />
          </button>

          <button className="btn btn-hover">Reservation</button>

          <button
            className={`nav-toggle-btn ${menuActive ? 'active' : ''}`}
            aria-label="Toggle Menu"
            onClick={handleToggleMenu}
          >
            <span className="line top"></span>
            <span className="line middle"></span>
            <span className="line bottom"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

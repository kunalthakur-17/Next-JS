import React from "react";

function Header() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Kunal Thakur home">
          <span className="brand-mark">KT</span>
          <span>Kunal Thakur</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="mailto:kunalthakur306@gmail.com">Let&apos;s talk</a>
      </nav>
    </header>
  );
}

export default Header;

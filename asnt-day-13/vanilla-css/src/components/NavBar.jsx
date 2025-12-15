import logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="brand">
          <img src={logo} alt="DON logo" className="logo"  />
        </div>

        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact" className="cta">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

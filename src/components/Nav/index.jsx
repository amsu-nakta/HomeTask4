export default function Nav() {
  return (
    <div className="header">
      <img className="header_logo" src="../img/logo.png" alt="Logo" />
      <div className="header_navigation-bar">
        <a className="header_navigation-bar_link" href="#home">HOME</a>
        <a className="header_navigation-bar_link" href="#project">PROJECT</a>
        <a className="header_navigation-bar_link" href="#services">SERVICES</a>
        <a className="header_navigation-bar_link" href="#about">ABOUT</a>
        <a className="header_navigation-bar_link" href="#blog">BLOG</a>
        <a className="header_navigation-bar_link" href="#shop">SHOP</a>
        <a className="header_navigation-bar_link" href="#subscribe">CONTACT</a>
        <a className="header_navigation-bar_button" href="#subscribe">Sign Up</a>
      </div>
    </div>
  );
}

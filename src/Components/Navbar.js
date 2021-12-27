import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="navbar__logo">Discord</span>

      <div className="navbar__links">
        <ul>
          <li>
            <a href="https://discord.com/">Download</a>
          </li>
          <li>
            <a href="https://discord.com/">Nitro</a>
          </li>
          <li>
            <a href="https://discord.com/">Safety</a>
          </li>
          <li>
            <a href="https://discord.com/">Support</a>
          </li>
          <li>
            <a href="https://discord.com/">Blog</a>
          </li>
          <li>
            <a href="https://discord.com/">Careers</a>
          </li>
        </ul>
      </div>

      <button className="navbar__log-in">Login</button>
    </nav>
  );
};

export default Navbar;

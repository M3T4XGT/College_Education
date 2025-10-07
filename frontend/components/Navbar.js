import { FaSearch, FaBars } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="old-gold row full">
      {/* Logo */}
      {/* <a href="/" className="logo-link">
        <img src="/logo-jc.png" alt="College Logo" className="logo" />
      </a> */}

      {/* Navigation */}
      <ul className="top-links">
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer">
            Visit
          </a>
        </li>
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer">
            Apply
          </a>
        </li>
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer">
            Academics
          </a>
        </li>
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer">
            Campus Life
          </a>
        </li>
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer">
            Admission
          </a>
        </li>
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer">
            Alumni
          </a>
        </li>
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer">
            Give
          </a>
        </li>
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer">
            Athletics
          </a>
        </li>
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer">
            About
          </a>
        </li>
        <li>
          <a href="/" className="icon-links">
            <FaSearch style={{ marginRight: "0.5em" }} />
            <FaBars />
          </a>
        </li>
      </ul>
    </div>
  );
}

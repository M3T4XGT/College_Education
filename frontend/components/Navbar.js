import { FaSearch, FaBars } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="old-gold row full">
      {/* Logo */}
      <a href="/" className="logo-link">
        <img src="/logo-jc.png" alt="College Logo" className="logo" />
      </a>

      {/* Navigation */}
      <ul className="top-links">
        <li>
          <a
            href="https://www.juniata.edu/admission/campus-visit/index.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit
          </a>
        </li>
        <li>
          <a
            href="https://www.juniata.edu/admission/apply/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply
          </a>
        </li>
        <li>
          <a
            href="https://www.juniata.edu/academics/index.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            Academics
          </a>
        </li>
        <li>
          <a
            href="https://www.juniata.edu/campus-life/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Campus Life
          </a>
        </li>
        <li>
          <a
            href="https://www.juniata.edu/admission/index.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            Admission
          </a>
        </li>
        <li>
          <a
            href="https://www.juniata.edu/alumni/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alumni
          </a>
        </li>
        <li>
          <a
            href="https://securelb.imodules.com/s/1809/lg23/form.aspx?sid=1809&gid=2&pgid=486&cid=1180&appealcode=juniatatopnavigation"
            target="_blank"
            rel="noopener noreferrer"
          >
            Give
          </a>
        </li>
        <li>
          <a
            href="https://www.juniatasports.net/landing/index"
            target="_blank"
            rel="noopener noreferrer"
          >
            Athletics
          </a>
        </li>
        <li>
          <a
            href="https://www.juniata.edu/about/"
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </a>
        </li>
        <li>
          <a href="https://www.juniata.edu/about/#" className="icon-links">
            <FaSearch style={{ marginRight: "0.5em" }} />
            <FaBars />
          </a>
        </li>
      </ul>
    </div>
  );
}

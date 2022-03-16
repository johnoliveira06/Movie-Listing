import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import "./src/components/Navbar/styles.css";
function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a
            href="https://github.com/johnoliveira06"
            target="_blank"
            rel="noreferrer"
          >
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p className="dsmovie-contact-link">/johnoliveira06</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

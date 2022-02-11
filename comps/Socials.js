import { FiLinkedin, FiInstagram, FiGithub, FiCodepen } from "react-icons/fi";

const Socials = () => {
  return (
    <div className="links">
      <ul className="icons">
        <li>
          <a
            className="icons-link"
            href="https://www.linkedin.com/in/mahmoud-ahmed-7973a4221/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
          </a>
        </li>
        <li>
          <a
            className="icons-link"
            href="https://github.com/MhmoudGit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub />
          </a>
        </li>
        <li>
          <a
            className="icons-link"
            href="https://www.instagram.com/mhmoud_a.a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram />
          </a>
        </li>
        <li>
          <a
            className="icons-link"
            href="https://codepen.io/MahmoudXO"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiCodepen />
          </a>
        </li>
      </ul>
      <div className="email">
        <p>
          <a href="mailto:mahmoud.a.a.y18@gmail.com">
            mahmoud.a.a.y18@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Socials;

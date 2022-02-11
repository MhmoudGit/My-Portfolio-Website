import { FiLinkedin, FiInstagram, FiGithub, FiCodepen } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <ul className="icons-mobile">
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
      <p>
        Inspired by{" "}
        <a
          href="https://brittanychiang.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brittany Chiang
        </a>{" "}
        built by{" "}
        <a
          href="https://github.com/MhmoudGit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mahmoud Ahmed
        </a>{" "}
        &copy;2022
      </p>
    </footer>
  );
};

export default Footer;

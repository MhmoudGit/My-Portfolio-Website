import { Twirl as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [show, setShow] = useState(true);
  const [isOpen, setOpen] = useState(false);

  let scrollPos = 0;
  const controllNav = () => {
    if (document.body.getBoundingClientRect().top > scrollPos) setShow(true);
    else setShow(false);
    // saves the new position for iteration.
    scrollPos = document.body.getBoundingClientRect().top;
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("scroll", controllNav);
    return () => {
      window.removeEventListener("scroll", controllNav);
    };
  }, []);

  const menu = (
    <nav className="mobile-nav">
      <div className="back" onClick={() => setOpen(!isOpen)}></div>
      <ul className="mobile-list">
        <li onClick={() => setOpen(!isOpen)}>
          <Link href="#About">
            <a>About</a>
          </Link>
        </li>
        <li onClick={() => setOpen(!isOpen)}>
          <Link href="#Projects">
            <a>Projects</a>
          </Link>
        </li>
        <li onClick={() => setOpen(!isOpen)}>
          <Link href="#Contacts">
            <a>Contact</a>
          </Link>
        </li>
        <button onClick={() => setOpen(!isOpen)}>
          <a href="/Front-End Dev Mahmoud Ahmed Abdel Sattar.pdf" download>
            Resume
          </a>
        </button>
      </ul>
    </nav>
  );

  return (
    <nav className={show || isOpen ? "nav-bar" : "nonav"}>
      <Link href="/">
        <a>
          <img className="logo" src="/Mahmoud LOgo hero.png" alt="logo" />
        </a>
      </Link>
      <Hamburger label="Show menu" toggled={isOpen} toggle={setOpen} />
      {isOpen ? menu : null}
      <ul className="nav-list">
        <li>
          <Link href="/#About">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/#Projects">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/#Contacts">
            <a>Contact</a>
          </Link>
        </li>
        <a href="/Front-End Dev Mahmoud Ahmed Abdel Sattar.pdf" download>
          <button>Resume</button>
        </a>
      </ul>
    </nav>
  );
};

export default Nav;

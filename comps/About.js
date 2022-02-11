import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiReact,
  DiPhotoshop,
  DiIllustrator,
  DiNodejs,
} from "react-icons/di";
import { SiFirebase, SiBlender } from "react-icons/si";

const About = () => {
  return (
    <div className="about" id="About">
      <h2 className="about-me">About Me</h2>
      <div className="about-intro">
        <div className="left">
          <p>
            Hello! My name is Mahmoud and I enjoy creating things that live on
            the internet. My interest in programming and coding started when I
            was in college, we had to do some geophysical data analysis and got
            introduced to python then I developed a curiosity for programming in
            general so I decided to try and learn some coding myself, turned out
            to be something i enjoy.
          </p>
          <p>
            Fast-forward to today, I’ve come a long way from where I started, I
            learned javascript and now I’m able to work with ReactJS and NextJS.
            There are tons of things that I’m curious about and would love to
            explore, discover and learn new things everyday.
          </p>
          <p>
            I focused on the Front-end web development, building (and
            occasionally designing) exceptional digital experiences. Currently,
            I’m focused on enhancing my skills and learning more while diving in
            Node.js when I can as I eventually want to be a full stack web
            developer.
          </p>
          <p>Here are some technologies i’ve recently worked with :</p>
          <ul className="techs">
            <li>
              <DiHtml5 className="skills" /> HTML
            </li>
            <li>
              <SiFirebase className="skills" /> Firebase
            </li>

            <li>
              <DiCss3 className="skills" /> CSS
            </li>
            <li>
              <DiIllustrator className="skills" /> Illustrator
            </li>
            <li>
              <DiJavascript1 className="skills" /> Javascript
            </li>
            <li>
              <SiBlender className="skills" /> Blender
            </li>
            <li>
              <DiReact className="skills" /> React JS/ Next JS
            </li>
            <li>
              <DiPhotoshop className="skills" /> Photoshop
            </li>
            <li>
              <DiNodejs className="skills" /> Node JS
            </li>
          </ul>
        </div>
        <div className="right">
          <img src="/profile1.png" alt="pic" />
        </div>
      </div>
    </div>
  );
};

export default About;

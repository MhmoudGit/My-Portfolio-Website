import { RiShareBoxLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";


const Projects = () => {
    return ( 
        <div className="projects" id="Projects">
        <h2 className="about-me">Some Things I’ve Built</h2>

        <div className="container">
          <div>
            <img className="project-pic" src="/portfolio.png" alt="portfolio pic" />
            <div className="cover"></div>
          </div>
          <div className="project-right">
            <p className="project-overline">Featured Project</p>
            <h3 className="project-header">Portfolio Website</h3>
            <div className="description">
              <p>
                While trying to learn NextJS I decided to make a portfolio website for myself.
                I got inspired by Brittany Chiang design and tested myself to build a similar
                one without using her code and it turned out to be this one you are currently viewing.
              </p>
            </div>
            <ul className="project-techs">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React JS</li>
              <li>Next JS</li>
            </ul>
            <div className="project-links">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiShareBoxLine />
              </a>
              <a
                href="https://github.com/MhmoudGit/My-Portfolio-Website"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
            </div>
          </div>
        </div>


        <div className="container">
          <div>
            <img className="project-pic" src="/chat.PNG" alt="" />
            <div className="cover"></div>
          </div>
          <div className="project-right">
            <p className="project-overline">Featured Project</p>
            <h3 className="project-header">ReactJs Chat Application</h3>
            <div className="description">
              <p>
                A chat web app that has a chat room where you can send and
                recieve real time messages, a home page which consumes a public
                free pics api and display them as a feed and a page that you can
                update your profile pic by sharing the link of the photo you
                want.
              </p>
            </div>
            <ul className="project-techs">
              <li>HTML</li>
              <li>Firebase</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React JS</li>
            </ul>
            <div className="project-links">
              <a
                href="https://mychat-759aa.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiShareBoxLine />
              </a>
              <a
                href="https://github.com/MhmoudGit/myChat-web-app.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <div>
            <img className="project-pic" src="/Crypto.PNG" alt="crypto pic" />
            <div className="cover"></div>
          </div>
          <div className="project-right">
            <p className="project-overline">Featured Project</p>
            <h3 className="project-header">Crypto Dashboard</h3>
            <div className="description">
              <p>
                I made this app with rabid api to display the news list on the
                right, a crypto currency converter and exchange rate display
                using Alpha Vantage APi.
              </p>
            </div>
            <ul className="project-techs">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React JS</li>
            </ul>
            <div className="project-links">
              <a
                href="https://mhmoudgit.github.io/Crypto-Currency-Dashboard/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiShareBoxLine />
              </a>
              <a
                href="https://github.com/MhmoudGit/Crypto-Currency-Dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <div>
            <img className="project-pic" src="/NASA.PNG" alt="nasa pic" />
            <div className="cover"></div>
          </div>
          <div className="project-right">
            <p className="project-overline">Featured Project</p>
            <h3 className="project-header">NASA POTD</h3>
            <div className="description">
              <p>
                A web app made using create-react-app and NASA APOD API to view
                the NASA photo of the day with some information displayed on
                it. There is a Home Page with the APOD description and the Nasa
                Photo page that displays the picture or video with the
                information.
              </p>
            </div>
            <ul className="project-techs">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>ReactJS</li>
            </ul>
            <div className="project-links">
              <a
                href="https://mhmoudgit.github.io/NASA-POTD/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiShareBoxLine />
              </a>
              <a
                href="https://github.com/MhmoudGit/NASA-POTD"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <div>
            <img className="project-pic" src="/RandomQuote.png" alt="anime pic" />
            <div className="cover"></div>
          </div>
          <div className="project-right">
            <p className="project-overline">Featured Project</p>
            <h3 className="project-header">Random Quote</h3>
            <div className="description">
              <p>
                A simple random Quotes generator i first made when i was
                learning about javascript Math object and its methods.
              </p>
            </div>
            <ul className="project-techs">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
            <div className="project-links">
              <a
                href="https://codepen.io/MahmoudXO/full/WNXbeBe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiShareBoxLine />
              </a>
              <a
                href="https://codepen.io/MahmoudXO/pen/WNXbeBe?editors=0010"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default Projects;

import './About.css';
import Lottie from "lottie-react";
import animation from '../../../public/animation.json';

const About = () => {
  return (
    <>
      <div id="about" className="about">
        <div className="about-title">
          <h1>~~~About me~~~</h1>
        </div>
        <div className="about-sections">
          <div className="about-left">
            <Lottie animationData={animation} style={{ width: 300, height: 300 }} loop={true} />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>
                My name is Najim Uddin, I’m a passionate MERN stack developer
                with expertise in HTML, CSS, JavaScript, React.js, Node.js,
                Express.js, and MongoDB. I enjoy building full-stack web
                applications that are both efficient and user-friendly.
              </p>
              <p>
                I’m always eager to learn new technologies and stay updated with
                the latest trends in web development. My focus is on delivering
                high-quality, scalable, and secure solutions for clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-center text-4xl font-extrabold mt-20">~~My Skill~~</h1>

      <div className="about-skills">
        <div className="about-skill-column">
          <div className="about-skill">
            <p>HTML & CSS</p>
            <hr style={{ width: "95%" }} />
          </div>
          <div className="about-skill">
            <p>Tailwind CSS</p>
            <hr style={{ width: "90%" }} />
          </div>
          <div className="about-skill">
            <p>Bootstrap</p>
            <hr style={{ width: "90%" }} />
          </div>
          <div className="about-skill">
            <p>JavaScript</p>
            <hr style={{ width: "60%" }} />
          </div>
          <div className="about-skill">
            <p>React JS</p>
            <hr style={{ width: "90%" }} />
          </div>
          <div className="about-skill">
            <p>Next JS</p>
            <hr style={{ width: "50%" }} />
          </div>
          <div className="about-skill">
            <p>MongoDB</p>
            <hr style={{ width: "70%" }} />
          </div>
        </div>
        <div className="about-skill-column">
         
          <div className="about-skill">
            <p>Node JS</p>
            <hr style={{ width: "60%" }} />
          </div>
          <div className="about-skill">
            <p>Express JS</p>
            <hr style={{ width: "50%" }} />
          </div>
          <div className="about-skill">
            <p>GitHub</p>
            <hr style={{ width: "70%" }} />
          </div>
          <div className="about-skill">
            <p>Axios</p>
            <hr style={{ width: "85%" }} />
          </div>
          <div className="about-skill">
            <p>TanStack Query</p>
            <hr style={{ width: "65%" }} />
          </div>
          <div className="about-skill">
            <p>Firebase</p>
            <hr style={{ width: "85%" }} />
          </div>
          <div className="about-skill">
            <p>React Router</p>
            <hr style={{ width: "80%" }} />
          </div>
          <div className="about-skill">
            <p>JWT</p>
            <hr style={{ width: "60%" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

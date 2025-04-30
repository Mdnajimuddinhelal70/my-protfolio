import Lottie from "lottie-react";
import animation from '../../../public/animation.json';
import './About.css';

const About = () => {
  return (
       <>
         <div id="about" className="about py-16 px-4">
        <div className="about-title text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">~~~ About me ~~~</h1>
        </div>

        <div className="about-sections flex flex-col md:flex-row justify-between items-center gap-12">
          
          {/* Left Section with Lottie Animation */}
          <div className="about-left flex justify-center md:w-1/2">
            <Lottie
              animationData={animation}
              style={{ width: "300px", height: "300px" }}
              loop={true}
            />
          </div>

          {/* Right Section with Description */}
          <div className="about-right md:w-1/2">
            <div className="about-para text-white">
              <p className="text-lg mb-4">
                My name is Najim Uddin, I’m a passionate MERN stack developer with expertise in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB. I enjoy building full-stack web applications that are both efficient and user-friendly.
              </p>
              <p className="text-lg">
                I’m always eager to learn new technologies and stay updated with the latest trends in web development. My focus is on delivering high-quality, scalable, and secure solutions for clients.
              </p>
            </div>
          </div>
        </div>
      </div>
                     {/* Skill section */}
      <h1 className="text-center text-4xl font-extrabold mt-20">~~My Skill~~</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[80%] items-center justify-center mx-auto mt-7">
        <div className="space-y-4">
          {[
            { name: "HTML & CSS", width: "w-[95%]" },
            { name: "Tailwind CSS", width: "w-[90%]" },
            { name: "Bootstrap", width: "w-[90%]" },
            { name: "JavaScript", width: "w-[60%]" },
            { name: "React JS", width: "w-[90%]" },
            { name: "Next JS", width: "w-[50%]" },
            { name: "MongoDB", width: "w-[70%]" },
          ].map((skill, idx) => (
            <div key={idx}>
              <p className="font-semibold text-white">{skill.name}</p>
              <div
                className={`h-2 ${skill.width} bg-gradient-to-r from-[#DF8908] to-[#B415FF] rounded-full mt-1 transition-transform duration-300 hover:scale-x-105 cursor-pointer`}
              ></div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {[
            { name: "Node JS", width: "w-[60%]" },
            { name: "Express JS", width: "w-[50%]" },
            { name: "GitHub", width: "w-[70%]" },
            { name: "Axios", width: "w-[85%]" },
            { name: "TanStack Query", width: "w-[65%]" },
            { name: "Firebase", width: "w-[85%]" },
            { name: "React Router", width: "w-[80%]" },
            { name: "JWT", width: "w-[60%]" },
          ].map((skill, idx) => (
            <div key={idx}>
              <p className="font-semibold text-white">{skill.name}</p>
              <div
                className={`h-2 ${skill.width} bg-gradient-to-r from-[#DF8908] to-[#B415FF] rounded-full mt-1 transition-transform duration-300 hover:scale-105 cursor-pointer`}
              ></div>
            </div>
          ))}
        </div>
      </div>

            
          </>
        );
      };

      export default About;

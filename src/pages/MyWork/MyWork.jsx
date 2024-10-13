import React from "react";
import "./MyWork.css";

const MyWork = () => {
  const projects = [
    {
      image: "https://i.ibb.co/Jrv0Sm8/medi4.jpg",
      name: "Medicine Management",
      description:
        "This is a description of Project 1. It involves technologies like React and Node.js.",
      liveLink: "https://b9-a12-project.web.app/",
      clientLink:
        "https://github.com/Mdnajimuddinhelal70/medicine-management-client",
      serverLink:
        "https://github.com/Mdnajimuddinhelal70/medicine-management-server",
    },
    {
      image: "https://i.ibb.co/S7WDPK1/latest1.png",
      name: "Volunteer Management",
      description:
        "This is a description of Project 2. It is a full-stack web application using MongoDB, Express, React, and Node.js.",
      liveLink: "https://b9-a11-assignment-f8c48.web.app/",
      clientLink:
        "https://github.com/Mdnajimuddinhelal70/volunteer-management-client",
      serverLink:
        "https://github.com/Mdnajimuddinhelal70/volunteer-management-server",
    },
    {
      image: "https://i.ibb.co/XLKrS9P/latest2.jpg",
      name: "Crafts & Glass Art",
      description:
        "This is a description of Project 3. It is a mobile-first application designed with React Native.",
      liveLink: "https://b9-a10-project.web.app/",
      clientLink:
        "https://github.com/Mdnajimuddinhelal70/craft-glass-art-client",
      serverLink:
        "https://github.com/Mdnajimuddinhelal70/craft-glass-art-server",
    },
  ];

  return (
    <>
      <div id="work">
        <h1 className="text-center font-extrabold text-4xl mb-5">
          ~~~SOME OF MY PROJECTS~~~
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 container mx-auto px-4">
          {projects.map((item, index) => (
            <div
              key={index}
              className="card glass w-full transform transition duration-500 hover:scale-105"
            >
              <figure>
                <img
                  className="w-full h-52 object-cover"
                  src={item.image}
                  alt={item.name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl font-bold">{item.name}</h2>
                <p>{item.description}</p>
                <div className="flex justify-around gap-2 mt-4">
                  <a
                    href={item.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Live Link
                  </a>
                  <a
                    href={item.clientLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Client Code
                  </a>
                  <a
                    href={item.serverLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Server Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyWork;

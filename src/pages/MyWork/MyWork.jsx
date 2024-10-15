import React, { useState } from "react";
import "./MyWork.css";

const MyWork = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      image: "https://i.ibb.co/Jrv0Sm8/medi4.jpg",
      name: "Medicine Management",
      description: `Medicine Management System

      The "Medicine Management System" is a full-stack web application designed to streamline the process of purchasing and managing medicines. Built with the MERN stack (MongoDB, Express, React, Node.js) and enhanced by technologies like Firebase, JWT, and Stripe for authentication and secure payment, the platform provides a seamless experience for both users and administrators.

      Key features include:

      - Role-based Access Control: Admins can manage users by assigning roles like "Admin", "Seller", or "User". Sellers can add and manage their medicines, while users can browse, select, and purchase medicines.
      - Secure Payment Integration: Users can purchase medicines through secure transactions using Stripe.
      - Admin Privileges: Admins have the ability to promote or demote users and manage all aspects of the platform, including sales reports and advertisements.
      - Responsive Design: The interface is crafted using Tailwind CSS and DaisyUI for a modern, user-friendly experience across devices.
      - State Management: Efficient data handling and caching are achieved using TanStack Query and Axios.`,
      liveLink: "https://b9-a12-project.web.app/",
      clientLink: "https://github.com/Mdnajimuddinhelal70/medicine-management-client",
      serverLink: "https://github.com/Mdnajimuddinhelal70/medicine-management-server",
    },
    {
      image: "https://i.ibb.co/S7WDPK1/latest1.png",
      name: "Volunteer Management",
      description: `Volunteer Management System

      The "Volunteer Management System" is a full-stack web application built to efficiently manage volunteer registration, tasks, and overall participation. This project is designed with modern web technologies to provide a seamless and interactive experience for both users and administrators.

      Key Features:
      - User Authentication & Authorization: Firebase authentication with JWT for secure user sessions.
      - CRUD Operations: Manage volunteer data and tasks with MongoDB.
      - Responsive UI: Designed with TailwindCSS and DaisyUI for a clean, mobile-friendly interface.`,
      liveLink: "https://b9-a11-assignment-f8c48.web.app/",
      clientLink: "https://github.com/Mdnajimuddinhelal70/volunteer-management-client",
      serverLink: "https://github.com/Mdnajimuddinhelal70/volunteer-management-server",
    },
    {
      image: "https://i.ibb.co/XLKrS9P/latest2.jpg",
      name: "Crafts & Glass Art",
      description: `The Crafts & Glass Art is a modern full-stack web application designed to showcase and manage a collection of handcrafted art pieces and glass works. The project was built using cutting-edge web technologies to provide a smooth and interactive experience for both users and administrators.
      
      Key Features:

      - User Authentication & Registration: Firebase is used for secure user authentication, allowing users to register, log in, and manage their accounts.
      - Art Collection Management: users can add, update, and delete various artworks in the collection, with full CRUD (Create, Read, Update, Delete) operations connected to MongoDB.
      - User-friendly Navigation: React Router DOM ensures seamless page transitions and a smooth user experience.
      - Data Handling: Efficient data fetching and updates are handled using Node.js and Express on the backend, with a MongoDB database.
      - Modern UI/UX: The application’s frontend is styled using Tailwind CSS and DaisyUI to provide a responsive and aesthetically pleasing design.
      - Icons & Alerts: React Icons are used to enhance the interface, and SweetAlert2 is integrated for clean and responsive pop-up notifications.`,
      liveLink: "https://b9-a10-project.web.app/",
      clientLink: "https://github.com/Mdnajimuddinhelal70/craft-glass-art-client",
      serverLink: "https://github.com/Mdnajimuddinhelal70/craft-glass-art-server",
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
              <div className="card-body flex flex-col">
                <h2 className="card-title text-xl font-bold">{item.name}</h2>
                <p>{item.description.slice(0, 100)}...</p>
                <div className="mt-4 flex flex-col gap-2">
                  <button
                    onClick={() => setSelectedProject(item)}
                    className="btn btn-info w-full"
                  >
                    Details
                  </button>
                  <div className="flex justify-between gap-5 mr-9 mt-2">
                    <a
                      href={item.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-1/3"
                    >
                      Live Link
                    </a>
                    <a
                      href={item.clientLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-1/3"
                    >
                      Client Code
                    </a>
                    <a
                      href={item.serverLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-1/3"
                    >
                      Server Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal modal-open">
          <div className="modal-box bg-white text-black">
            <h3 className="font-bold text-lg">{selectedProject.name}</h3>
            <p className="py-4 whitespace-pre-line">{selectedProject.description}</p>
            <div className="modal-action">
              <button onClick={() => setSelectedProject(null)} className="btn">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyWork;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
      fetch('/projects.json')
      .then(res => res.json())
      .then(data => {
        setProjects(data)
        console.log(data)
      })
  }, []);
  return (
    <div className="grid grid-cols-3 mt-20">
    {projects.map((item) => (
      <div
        key={item.name} 
        className="card card-compact bg-yellow-800 text-white w-96 shadow-xl mx-auto"
      >
        <figure>
          <img 
          className="flex w-[370px] h-[200px] pt-3 rounded-md"
          src={item.img} alt={item.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <p>{item.description}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-secondary"><Link>Secure code</Link></button>
            <button className="btn btn-secondary"><Link>Live Preview</Link></button>
            <button className="btn btn-secondary"><Link>Details</Link></button>
          </div>
        </div>
      </div>
    ))}
  </div>
  );
};

export default Projects;

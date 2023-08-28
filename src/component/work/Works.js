import React, { useEffect, useState } from "react";
import { projectsData } from "./Data";
import { projectNav } from "./Data";
import WorkItems from "./WorkItems";

export default function Works() {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const mewProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(mewProjects);
    }
  }, [item]);
  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index)
  };
  return (
    <>
      <div className="work__filters">
        {projectNav.map((item, index) => {
          return (
            <span
              className={`${active === index ? 'active-work' : "work__item"}`}
              key={index}
              onClick={(e) => {
                handleClick(e, index);
              }}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </>
  );
}

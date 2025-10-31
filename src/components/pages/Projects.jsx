import { useEffect } from "react";
import projectStyle from "../styles/project.module.css";
import projects from "../../data/projectData.json";
import { FaCalendar, FaPlane } from "react-icons/fa";

const Projects = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(projectStyle.show);
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.2 } 
    );

    const hiddenElements = document.querySelectorAll(`.${projectStyle.hidden}`);
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={projectStyle.container}>
      <h2>Project</h2>
      <div className={projectStyle.projectContainer}>
        {projects.map((proj) => (
          <div
            key={proj.id}
            className={`${projectStyle.project} ${projectStyle.hidden}`}
          >
            <div className={projectStyle.cardHead}>
              <div className={projectStyle.cardHeadLeft}>
                <div className={projectStyle.projectImg}>
                  <img loading="lazy" src={proj.logo} alt="project image" />
                </div>
                <div className={projectStyle.projectTitle}>
                  <p>{proj.title}</p>
                  <a href={proj.link}>Link</a>
                </div>
              </div>
              <div className={projectStyle.projDate}>
                <span>
                  <FaCalendar />
                </span>
                <p>{proj.date}</p>
              </div>
            </div>
            <div className={projectStyle.projectDescription}>
              <p>{proj.description}</p>
            </div>
            <div className={projectStyle.tech}>
              <span>-</span>
              {proj.TechStack.map((tech, index) => (
                <p key={index}>{tech}</p>
              ))}
            </div>
          </div>
        ))}
        <div
          className={`${projectStyle.projectTimeline} ${projectStyle.hidden}`}
        >
          <FaPlane className={projectStyle.projectTimelineIcon} />
        </div>
      </div>
    </div>
  );
};

export default Projects;

import { useEffect } from "react";
import experienceStyle from "../styles/experience.module.css";
import experience from "../../data/experience.json";
import { FaCalendar } from "react-icons/fa";

const Experience = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(experienceStyle.show);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const hiddenElements = document.querySelectorAll(`.${experienceStyle.hidden}`);
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={experienceStyle.container}>
      <h2>Experience</h2>
      <div className={experienceStyle.experienceContainer}>
        {experience.map((exp) => (
          <div
            className={`${experienceStyle.experience} ${experienceStyle.hidden}`}
            key={exp.id}
          >
            <div className={experienceStyle.experienceTop}>
              <div className={experienceStyle.experienceHead}>
                <div className={experienceStyle.logo}>
                  <img src={exp.logo} alt="company image" />
                </div>
                <p className={experienceStyle.name}>{exp.Company}</p>
                <a href="#" className={experienceStyle.link}>
                  link
                </a>
              </div>
              <div className={experienceStyle.date}>
                <FaCalendar />
                <span className={experienceStyle.experienceDate}>
                  {exp.date} - {exp.endDate}
                </span>
              </div>
            </div>
            <div className={experienceStyle.experienceBottom}>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

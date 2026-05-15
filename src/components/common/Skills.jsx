import skillStyle from "../styles/skills.module.css";
import skills from "../../data/skills.json";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiExpress, SiWordpress,
  SiNextdotjs, SiPostgresql, SiSupabase, SiFirebase, SiPrisma, SiPhp,
} from "react-icons/si";

const iconMap = {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  SiTailwindcss, SiMongodb, SiExpress, SiWordpress,
  SiNextdotjs, SiPostgresql, SiSupabase, SiFirebase, SiPrisma, SiPhp,
};

const Skills = () => {
  return (
    <div className={skillStyle.skills}>
      {skills.map((skill) => {
        const IconComponent = iconMap[skill.icon];
        return (
          <div key={skill.id} className={skillStyle.skill}>
            {IconComponent && <IconComponent />}
            <p>{skill.skill}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;

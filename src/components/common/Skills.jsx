import skillStyle from "../styles/skills.module.css";
import skills from "../../data/skills.json"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiWordpress } from "react-icons/si";
const Skills = () => {
  const iconMap = {
    FaHtml5: FaHtml5,
    FaCss3Alt: FaCss3Alt,
    FaJs: FaJs,
    FaReact: FaReact,
    FaNodeJs: FaNodeJs,
    SiTailwindcss: SiTailwindcss,
    SiMongodb: SiMongodb,
    SiExpress: SiExpress,
    SiWordpress: SiWordpress,
  };
  return (
    <div className={skillStyle.skills}>
      {skills.map((skill)=>{
         const IconComponent = iconMap[skill.icon];
         return(
         <div key={skill.id }className={skillStyle.skill}>
            {IconComponent && <IconComponent />} 
            <p>{skill.skill}</p>
         </div>
      )})}
    </div>
  )
}

export default Skills

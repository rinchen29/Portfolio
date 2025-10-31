import { assets } from "../../assets/assets";
import HeroStyle from "../styles/Hero.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Hero = () => {
  return (
    <div className={HeroStyle.container}>
       <div className={HeroStyle.left}>
         <div className={HeroStyle.leftContent}>
            <h1><span>👋</span>Hi, <span>I'm Rinchen Bhutia</span></h1>
            <div className={HeroStyle.info}>
              <p className={`${HeroStyle.typewriter} ${HeroStyle.title}`}>Web Developer</p>
              <p className={HeroStyle.text}>Passoniate web developer with expertise in MERN Stack,Wordpress building scalable, high-performance web applications.</p>
              <div className={HeroStyle.icons}>
                <a href="https://github.com/rinchen29" ><FaGithub className={HeroStyle.github}/></a>
                <a href="https://www.linkedin.com/in/rinchen-bhutia-9691332a6/" ><FaLinkedin className={HeroStyle.linkedin}/></a>
              </div>
            </div>
         </div>
       </div>
       <div className={HeroStyle.right}>
        <div className={HeroStyle.triangle}></div>
        <img src={assets.profile} loading="lazy" alt="Profile Image" className={HeroStyle.profileImage} />
       </div>
    </div>
  )
}

export default Hero

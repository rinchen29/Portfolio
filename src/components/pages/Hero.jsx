import { useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import HeroStyle from "../styles/Hero.module.css";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Next.js Developer",
  "WordPress Expert",
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex];
    let timeout;

    if (!isDeleting && currentRole.length < role.length) {
      timeout = setTimeout(
        () => setCurrentRole(role.slice(0, currentRole.length + 1)),
        100
      );
    } else if (!isDeleting && currentRole.length === role.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && currentRole.length > 0) {
      timeout = setTimeout(
        () => setCurrentRole(currentRole.slice(0, -1)),
        55
      );
    } else {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [currentRole, isDeleting, roleIndex]);

  return (
    <div className={HeroStyle.container}>
      <div className={HeroStyle.left}>
        <div className={HeroStyle.leftContent}>
          <p className={HeroStyle.greeting}>👋 Hello, I&apos;m</p>
          <h1 className={HeroStyle.name}>Rinchen Bhutia</h1>

          <div className={HeroStyle.typewriterWrapper}>
            <span className={HeroStyle.title}>{currentRole}</span>
            <span className={HeroStyle.cursor}>|</span>
          </div>

          <p className={HeroStyle.text}>
            Passionate Full Stack Developer with 3+ years of freelance
            experience building production-grade web apps using MERN Stack,
            Next.js, and WordPress across digital marketing, healthcare, and
            education sectors.
          </p>

          <div className={HeroStyle.stats}>
            <div className={HeroStyle.stat}>
              <span className={HeroStyle.statNumber}>3+</span>
              <span className={HeroStyle.statLabel}>Years Exp.</span>
            </div>
            <div className={HeroStyle.statDivider} />
            <div className={HeroStyle.stat}>
              <span className={HeroStyle.statNumber}>6+</span>
              <span className={HeroStyle.statLabel}>Projects</span>
            </div>
            <div className={HeroStyle.statDivider} />
            <div className={HeroStyle.stat}>
              <span className={HeroStyle.statNumber}>3</span>
              <span className={HeroStyle.statLabel}>Sectors</span>
            </div>
          </div>

          <div className={HeroStyle.cta}>
            <a href="#Contact" className={HeroStyle.hireBtn}>
              Hire Me
            </a>
            <a
              href="/src/assets/Rinchen_Bhutia_Resume.pdf"
              download="Rinchen_Bhutia_Resume.pdf"
              className={HeroStyle.cvBtn}
            >
              <FaDownload />
              Download CV
            </a>
          </div>

          <div className={HeroStyle.icons}>
            <a
              href="https://github.com/rinchen29"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className={HeroStyle.github} />
            </a>
            <a
              href="https://www.linkedin.com/in/rinchen-bhutia-9691332a6/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className={HeroStyle.linkedin} />
            </a>
          </div>
        </div>
      </div>

      <div className={HeroStyle.right}>
        <div className={HeroStyle.triangle}></div>
        <img
          src={assets.profile}
          loading="lazy"
          alt="Rinchen Bhutia"
          className={HeroStyle.profileImage}
        />
      </div>
    </div>
  );
};

export default Hero;

import NavBar from "../common/NavBar";
import Hero from "../pages/Hero";
import { assets } from "../../assets/assets";
import gradientStyle from "../styles/gradient.module.css";
import Project from "../pages/project";
import Experience from "../pages/Experience";
import Portfolio from "../pages/Portfolio";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import Footer from "../pages/footer";
const MainLayout = () => {
  return (
    <>
    <NavBar/>
    <main>
      <img src={assets.gradient}className={gradientStyle.image} alt="black gradient" />
      <div className={gradientStyle.blur}></div>
      <section id="Hero"> <Hero/></section>
      <section id="Project"> <Project/></section>
      <section id="Experience"> <Experience/></section>
      <section id="Portfolio"><Portfolio/></section>
      <section id="Service"> <Service/></section>
      <section id="Contact"><Contact/></section>
      <Footer/>
    </main>
    </>
  )
}

export default MainLayout

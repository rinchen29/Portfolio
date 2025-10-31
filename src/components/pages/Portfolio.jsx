import Certificate from "../common/Certificate";
import Education from "../common/Education";
import Skills from "../common/Skills";
import portfolioStyle from "../styles/portfolio.module.css";
import { useState } from "react";
const Portfolio = () => {
    const [activeTab,setActiveTab]=useState("skills");
  return (
    <div className={portfolioStyle.container}>
        <h2>Portfolio</h2>
        <div className={portfolioStyle.nav}>
            <span onClick={()=>setActiveTab("skills")} className={`${activeTab==="skills"?portfolioStyle.active:" "}`}>Skills</span>
            <span onClick={()=>setActiveTab("education")} className={`${activeTab==="education"?portfolioStyle.active:" "}`}>Education</span>
            <span onClick={()=>setActiveTab("certificate")} className={`${activeTab==="certificate"?portfolioStyle.active:" "}`}>Certificate</span>
        </div>
        <div className={portfolioStyle.info}>
         {activeTab==="skills"&&<Skills/>}
         {activeTab==="education"&&<Education/>}
         {activeTab==="certificate"&&<Certificate/>}
        </div>
    </div>
  )
}

export default Portfolio

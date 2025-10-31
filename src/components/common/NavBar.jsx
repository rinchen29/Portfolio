import NavBarStyle from "../styles/Navbar.module.css";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
const NavBar = () => {
  const [showMenu,setMenu]=useState(false);
  const handleClick=()=>{
     setMenu(!showMenu)
  }
  const handleClickMenu=()=>{
     setMenu(!showMenu)
  }
  return (
    <>
    <header className={NavBarStyle.header}>
      <div className={NavBarStyle.logo}>
        <h1>RB</h1>
      </div>
      <nav className={NavBarStyle.navLinks}>
        <a href="#Project">Projects</a>
        <a href="#Experience">Experience</a>
        <a href="#Service">Service</a>
        <a href="#Contact">Contact</a>
      </nav>
       <a href="#" className={NavBarStyle.dwnBtn}><button>Download CV</button></a>
       <BiMenu className={NavBarStyle.menuBar} onClick={handleClick}/> 
    </header>
      <div className={showMenu?NavBarStyle.menu:NavBarStyle.hideMenu} onClick={handleClickMenu}>
        <div onClick={(e)=>e.stopPropagation()}>
         <nav className={NavBarStyle.menuLinks}>
         <a href="">Projects</a>
         <a href="">Experience</a>
         <a href="">Contact</a>
         <a href="">Service</a>
        </nav>
       <button className={NavBarStyle.menu_btn}><a href="">Download CV</a></button> 
        </div>
    </div> 
    </>
  )
}

export default NavBar

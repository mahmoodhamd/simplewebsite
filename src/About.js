import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/assets/images/andriod2.png";
import Common from "./Common";
const About = () => {
    return (  
    <>
     <Common 
     name="Welcome to About page" 
     btn="Contact Now" 
     imgsrc={web} 
     visit='/contact'  />
    </>

    );
}
 
export default About;
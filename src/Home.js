import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/assets/images/pngtree.jpg";
import Common from "./Common";

const Home = () => {
    return (  
    <>
    <Common 
    name="Welcome to Home Page" 
    btn="Get Started" 
    imgsrc={web} 
    visit='/service' 
      
    />
    </>

    );
}
 
export default Home;
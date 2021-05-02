import React from "react";
import NavBar from "../Components/NavBar";

function AboutMe(props){
    console.log("run about me");

    return(
      <div>
          <NavBar name={"About"}/>
            <h2>About Me</h2>
      </div>
    );
}

export default AboutMe;
import React from "react";
import MainSection from "../Components/MainSection/MainSection";
import PostHandler from "./PostHandler";
import {BrowserRouter as Router} from "react-router-dom";
import SideBar from "../Components/SideBar/SideBar"
import NavBar from "../Components/NavBar";

function HomePage(props){
    console.log("going home");
    // debugger;

    return(
      <div>
          <NavBar name={"Home"}/>
          <SideBar
              popular={props.popular}
              latest={props.latest}
          />
          <PostHandler posts={props.posts}/>
      </div>
    );


}

export default HomePage;
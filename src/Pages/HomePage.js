import React from "react";
import MainSection from "../Components/MainSection/MainSection";

function HomePage(props){
    console.log("going home");

    return(
      <div>
          <MainSection user={props.user}/>
      </div>
    );


}

export default HomePage;
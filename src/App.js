import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Header from "./Components/header/Header";
import SideBar from "./Components/SideBar/SideBar";
import './Components/header/Header.css';
import './Components/SideBar/SideBar.css';
import './Components/MainSection/MainSection.css'
import MainSection from "./Components/MainSection/MainSection";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "user":{
                "name": ["mor", "adi", "bubu"],
                "days": [1,2,6],
                "postNum": [1,2,3]
            },
            "posts":[1,2,3],
            "popular":[1,2,3],
            "latest":[1,2,3]
        }
    }

    render() {
        return(
            <div>
                <Header />
                <SideBar
                    popular={this.state.popular}
                    latest={this.state.latest}
                />

                <MainSection user={this.state.user}/>

            </div>

        );

    }
}

export default App;

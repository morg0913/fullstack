import './App.css';
import React, {useState} from "react";
import Header from "./Components/header/Header";
import SideBar from "./Components/SideBar/SideBar";
import './Components/header/Header.css';
import './Components/SideBar/SideBar.css';
import './Components/MainSection/MainSection.css'
import MainSection from "./Components/MainSection/MainSection";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
// P A G E S
import HomePage from "./Pages/HomePage";
import AboutMe from "./Pages/AboutMe";
import PostPage from "./Pages/PostPage";
import NewPost from "./Pages/NewPost";
import Login from "./Pages/Login";
import post_handler from "./Pages/post_handler";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "user":{
                "name": ["mor", "adi", "bubu"],
                "published": [1,2,6],
                "title": [1,2,3],

            },
            "posts":[1,2,3],
            "popular":[1,2,3],
            "latest":[1,2,3],

            "postData": [{id:1, title: "post1", context:"bla bla bla 11111", publishTime: "publised 3 days ago by",
                author: "mor"}, {id:2, title: "post2", context:"bla bla bla 22222", publishTime: "publised 5 days ago by",
                author: "misha"}, {id:3, title: "post3", context:"bla bla bla 33333", publishTime: "publised 6 days ago by",
                author: "dudi"}]

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
                <Router>
                    <div>





                        <nav >
                            <ul className="left-items">
                                <li className="item">
                                    <Link to="/">HomePage</Link>
                                </li>

                                <li className="item">
                                    <Link to="/AboutMe">About</Link>
                                </li>

                                <li className="item">
                                    <Link to="/NewPost">NewPost</Link>
                                </li >

                                <li className="item">
                                    <Link to="/PostPage">PostPage</Link>
                                </li>

                                <li className="right-item">
                                    <Link to="/Login">Login</Link>
                                </li>


                            </ul>
                        </nav>

                        <Switch>

                            <Route path="/AboutMe">
                                <AboutMe />
                            </Route>

                            <Route path="/NewPost">
                                <NewPost />
                            </Route>

                            <Route path="/PostPage">
                                <post_handler posts={this.state.postData}/>
                            </Route>

                            <Route path="/Login">
                                <Login />
                            </Route>

                            <Route path="/">
                                <HomePage user={this.state.user}/>
                            </Route>
                        </Switch>
                    </div>
                </Router>

            </div>

        );

    }
}

export default App;
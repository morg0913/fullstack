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
import {Button} from "@material-ui/core";
// P A G E S
import HomePage from "./Pages/HomePage";
import AboutMe from "./Pages/AboutMe";
import PostPage from "./Pages/PostPage";
import NewPost from "./Pages/NewPost";
import Login from "./Pages/Login";
import PostHandler from "./Pages/PostHandler";
import Grid from "@material-ui/core/Grid";

import {createMuiTheme} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import NavBar from "./Components/NavBar";
 import {ThemeProvider} from "@material-ui/core/styles";
import {blueGrey} from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blueGrey[500],
        },
        secondary: {
            main: green[500],
        },
    },
});

//ctrl + alt + L
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                "name": ["mor", "adi", "bubu"],
                "published": [1, 2, 6],
                "title": [1, 2, 3],
            },
            posts: [1, 2, 3],
            popular: [1, 2, 3],
            latest: [1, 2, 3],

            postData: [{
                id: 1, title: "post1", context: "bla bla bla 11111", publishTime: "published 3 days ago by",
                author: "mor"
            }, {
                id: 2, title: "post2", context: "bla bla bla 22222", publishTime: "published 5 days ago by",
                author: "misha"
            }, {
                id: 3, title: "post3", context: "bla bla bla 33333", publishTime: "published 6 days ago by",
                author: "dudi"
            }]
        }
    }

    render() {
        return (
             <ThemeProvider theme={theme}>
                <div className="App">
                    <Header/>
                    <postHandler posts={this.state.postData}/>

                    <Router>
                            <Switch>
                                <Route path="/AboutMe">
                                    <AboutMe/>
                                </Route>

                                <Route path="/NewPost">
                                    <NewPost/>
                                </Route>

                                <Route path="/PostPage/:id">
                                    <PostPage posts={this.state.postData}/>
                                </Route>

                                <Route path="/Login">
                                    <Login/>
                                </Route>

                                <Route path="/">
                                    <HomePage posts={this.state.postData}
                                              popular={this.state.popular}
                                              latest={this.state.latest}
                                    />
                                </Route>
                            </Switch>
                    </Router>

                </div>
             </ThemeProvider>
        );
    }
}

export default App;
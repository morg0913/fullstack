import React from "react";
import Posts from "./Posts/Posts";
import SideBar from "../SideBar/SideBar";

function MainSection(props) {

    return (

        <section className="page-left">
            <div className="post">
                <div className="box">
                    <div className="cross"></div>
                </div>
                <h2 id="mainNormalFont">Blog post #{props.user.title[0]}</h2> <span id="square2">&#9746;</span>

                <p>My <b>first bold post</b> is all about my <span class="red">blog post</span> and
                    how to write a new post in my blog, you can find it
                    <a href=""> here</a></p>
                <div className="left-bottom">published {props.user.published[0]} day ago by {props.user.name[0]}</div>
            </div>

            <div className="post">
                <div className="box">
                    <div className="cross"></div>
                </div>
                <h2 id="mainNormalFont">Blog post #{props.user.title[1]}</h2> <span id="square2">&#9746;</span>

                <p>My <b>first bold post</b> is all about my <span className="red">blog post</span> and
                    how to write a new post in my blog, you can find it
                    <a href=""> here</a></p>
                <div className="left-bottom">published {props.user.published[1]} day ago by {props.user.name[1]}</div>
            </div>

            <div className="post">
                <div className="box">
                    <div className="cross"></div>
                </div>
                <h2 id="mainNormalFont">Blog post #{props.user.title[2]}</h2> <span id="square2">&#9746;</span>

                <p>My <b>first bold post</b> is all about my <span className="red">blog post</span> and
                    how to write a new post in my blog, you can find it
                    <a href=""> here</a></p>
                <div className="left-bottom">published {props.user.published[2]} day ago by {props.user.name[2]}</div>
            </div>
        </section>


    );
}

export default MainSection;
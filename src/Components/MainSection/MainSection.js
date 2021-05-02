import React from "react";
import Posts from "./Posts/Posts";
import SideBar from "../SideBar/SideBar";

function MainSection(props) {


        const { post } = props;
        return (
            <div className="post-border">
                <section className="page-left">
                         <div className="post">
                             <div className="box">
                                 <div className="cross"></div>
                             </div>
                             <h2 id="mainNormalFont">Blog #{post.title}</h2> <span id="square2">&#9746;</span>

                             <p>My <b>first bold post</b> is all about my <span class="red">{post.context}</span> and
                                 how to write a new post in my blog, you can find it
                                 <a href=""> here</a></p>
                             <div className="left-bottom">published {props.publishTime} day ago by {props.author}</div>
                         </div>
                </section>

            </div>
        );



}

export default MainSection;
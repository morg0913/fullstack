import React from "react";

function sideBar(props) {

    return (

        <aside className="page-right">

            <ul className="latest">
                <h1>Latest</h1>

                <li>
                    <h4>Blog post #{props.latest[0]} <a href="">go to page</a></h4>
                </li>
                <li>
                    <h4>Blog post #{props.latest[1]} <a href="">go to page</a></h4>
                </li>
                <li>
                    <h4>Blog post #{props.latest[2]} <a href="">go to page</a></h4>
                </li>
            </ul>
            <hr className="horizontal-line"/>
            <ul className="popular">
                <h1>Popular</h1>
                <li>
                    <h4>Blog post #{props.popular[0]} <a href="">go to page</a></h4>
                </li>
                <li>
                    <h4>Blog post #{props.popular[1]} <a href="">go to page</a></h4>
                </li>
                <li>
                    <h4>Blog post #{props.popular[2]} <a href="">go to page</a></h4>
                </li>
            </ul>
        </aside>
    );
}

export default sideBar;
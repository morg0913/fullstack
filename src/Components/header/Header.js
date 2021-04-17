import React from "react";


class Header extends React.Component {



    render() {
        return(
            <div>
                <div className="toolbar">
                    <span className="left-items">
                       <a href="">Home</a>
                       <span className="vertical-line"></span>
                        <a href="">About Me</a>
                        <span className="vertical-line"></span>
                         <a href="">Contact Me</a>
                    </span>
                    <a href="" className="right-item">Login</a>
                </div>
                <h1 > This is my blog</h1>
            </div>);



    }

}


export default Header;
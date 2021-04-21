import React from "react";

class PostPage extends React.Component{


    render()
    {
        return (
            <div className="post-border">
                <h1>{this.props.title}</h1>
                <p>{this.props.content}</p>
            </div>
        );
    }
};

export default PostPage;
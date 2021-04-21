import React from "react";

class PostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return (
            <div className="post-border">
                <h1>lalala</h1>
                <h1>{this.state.title}</h1>
                <p>{this.state.content}</p>
            </div>
        );
    }
}

export default PostPage;
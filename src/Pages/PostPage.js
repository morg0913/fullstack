import React from "react";
class PostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }
    render() {
        return (
            <div className="post-border">
                {
                    this.state.posts.map((item =>
                        <div>
                            id={item.id}, title={item.title}, context={item.context}
                        </div>))
                }
            </div>
        );
    }
}
export default PostPage;
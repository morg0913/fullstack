import React from "react";
import PostPage from "./PostPage";

const postHandler = (props) => {
    const {posts} = props;
    const listItems = posts.map((postItem) => (
        <PostPage key={postItem.id} post={postItem}/>
    ));
    return <div>{listItems}</div>;
}

export default postHandler;
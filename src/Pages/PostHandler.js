import React from "react";
import PostPage from "./PostPage";
import MainSection from "../Components/MainSection/MainSection";

function PostHandler(props){


        debugger;
        const {posts} = props;
        const listItems = posts.map((postItem) => (
            <MainSection key={postItem.id} post={postItem}/>
        ));
        return <div>{listItems}</div>;

}


export default  PostHandler;
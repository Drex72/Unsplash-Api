import React from "react";
import CommentDetails from "./CommentDetails";

const Comments = () =>{
    return (<div>
            <CommentDetails name="Tobi" comment="Nice head" date="Today at 2:44pm"/>
            <CommentDetails name="Levi" comment="Seriously?" date="Today at 2:47pm"/>
            <CommentDetails name="David" comment="Sheesh!!" date="Today at 2:49pm"/>
       </div>) 
}

export default Comments;
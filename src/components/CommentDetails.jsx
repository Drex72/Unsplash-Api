import React from "react";
import "./comment.css";
const CommentDetails = (props) => {
    return(<div className="comment">
        <div className="avatar"><img src="" alt="" /></div>
        <div className="details">
            <h1>{props.name}</h1>
            <h2>{props.comment}</h2>
            <p>{props.date}</p>
        </div>
    </div>
    )

}

export default CommentDetails;
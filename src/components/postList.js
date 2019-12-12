import React from "react";

const PostList = (props) => {


  return (
  <div>
    {props.posts.map((post, key) =>
      <div key={key} className="post-wrapper">
        <h4>{post.title}</h4>
        <p> {post.content}</p>
        <p>{post.voteCount}</p>
        {/* <i className="fa fa-angle-double-down" onClick={(e) => this.vote(e, post, "plus")}></i> */}
        <button onClick={(e) => props.vote(e, post, "plus")}>VOTE UP!</button>
        <button onClick={(e) => props.vote(e, post, "minus")}>FUCK this! </button>
        <br></br>
        {post.comments.length > 0 && <Comments comments={post.comments} />}
    </div>    
            
      
      )}
      </div>
  )


}


export default PostList;
import React from "react";

const CreatePost = (props) => {


  return (
    <div>
      <form onSubmit={props.postSubmit} className="post-form">
        <input type="text"
          name="title"
          value={props.title}
          placeholder="title"
          onChange={props.onContentChange}
        />
        <br></br>
        <input
          type="textarea"
          name="content"
          value={props.content}
          placeholder="P O S T IT"

          onChange={props.onContentChange} />
        <input type="submit" value="POST" />
      </form>
    </div>
  )
}

export default CreatePost;
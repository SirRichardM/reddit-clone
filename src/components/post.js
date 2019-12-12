import React, { Component } from "react"
import PostList from "./postList"
import CreatePost from "./createPost"


class Post extends Component {
  constructor(props) {
    super(props);


    this.state = {
      
      title: "",
      content: "",
      author: "Ya Boy",
      voteCount: 0,
      posts: [{
        title: "this is a post",
        content: "My post",
        author: "still ya boy",
        voteCount: 0
      }]
  
    }
  
  }
  
  onContentChange = (e) => {
    const name = e.target.name
    const content = e.target.value;
    console.log(content)
    this.setState({
      [name]: content
    })
  }

  postSubmit = (e) => {
    e.preventDefault();
    const posts = this.state.posts;
    const newPost = {
      author: this.state.author,
      content: this.state.content,
      title: this.state.title,
      voteCount: 0
    }
    posts.push(newPost)
    // taking the posts array defined in original set of state and pushing content defined by user into the array and setting that in state
    this.setState({
      posts: posts,
      content: "",
      title: ""
    })
  }

  vote = (e, sentPost, operator) => {
    e.preventDefault();
    const posts = this.state.posts.filter(checkPost => sentPost.title !== checkPost.title);

    switch (operator) {
      case "plus":
        sentPost.voteCount++
        break;
      case "minus":
        sentPost.voteCount--
        break;
      default:
        console.error("you fucked it up")
    }

    posts.push(sentPost);
    posts.sort((a, b) => b.voteCount - a.voteCount)

    this.setState({
      posts: posts
    })
  
  }
  
  render() {
    return (
      <div>
        <CreatePost
          postSubmit={this.postSubmit}
          onContentChange={this.onContentChange}
          title={this.state.title}
          content={this.state.content}
        />
        <PostList
          posts={this.state.posts}
          vote={this.vote}
        />
        
      
      
      </div>
    )
  }     
  

  }

  

export default Post;
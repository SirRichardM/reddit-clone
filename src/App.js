import React, { Component } from 'react';
import CreatePost from "./components/createPost"

import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import { thisExpression } from '@babel/types';

class App extends Component {
  constructor(props) {
    super(props)

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
    posts.sort((a,b) => b.voteCount - a.voteCount)

    this.setState({
      posts: posts
    })
  
}



  // upVote = (e, sentPost) => {
  //   e.preventDefault();
  //   const posts = this.state.posts.filter(checkPost => sentPost.title !== checkPost.title);
  //    //Filter, under the hood, is doing this
  //   // for (let i = 0; i < this.state.posts.length; i++) {
  //   //   if (this.state.posts[i].title !== sentPost.title) {
  //   //     posts.push(this.state.posts[i]);
  //   //   }
  //   // }
  //   sentPost.voteCount++;
  //   this.setState({
  //     posts: [...posts, sentPost]
  //   })
  // }

  // downVote = (e, sentPost) => {
  //   e.preventDefault();
  //   const posts = this.state.posts.filter(checkPost => sentPost.title !== checkPost.title);
  //   sentPost.voteCount--;
  //   this.setState({
  //     posts: [...posts, sentPost]
  //   })
  // }

  // ^^^^^^^^^^^^^The code above here is what we used before combining into one function



  render() {
    console.log(this.state.posts)
    return (
      <div className="App">
        <h1>Reddit</h1>
        <CreatePost
          postSubmit={this.postSubmit}
          onContentChange={this.onContentChange}
          title={this.state.title}
          content={this.state.content}
        />
        <br />
            
        {this.state.posts.map((post, key) =>
          <div key={key} className="post-wrapper">
            <h4>{post.title}</h4>
            <p> {post.content}</p>
            <p>{post.voteCount}</p>
            {/* <i className="fa fa-angle-double-down" onClick={(e) => this.vote(e, post, "plus")}></i> */}
            <button onClick={(e) => this.vote(e, post, "plus")}>VOTE UP!</button>
            <button onClick={(e) => this.vote(e, post, "minus")}>FUCK this! </button>
            <br></br>
                
          </div>
        )}
      </div>
    );
  }
}

export default App;

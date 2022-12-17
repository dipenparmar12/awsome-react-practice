import React, { Component } from 'react'
import Post from './Post'
import './Post.css'

class Posts extends Component {
  showPosts = () => {
		// console.log('Posts.js::this.props.posts', this.props.posts);
    const posts = this.props.posts
    if (posts && posts.length === 0) return <h4> No posts found</h4>
    return (
      <div className='post_list_item'>
        {posts &&
          Object.values(posts).map((post) => (
            <Post key={Math.random()} post={post} deletePost={this.props.deletePost} />
          ))}
      </div>
    )
  }
	
  render() {
    return <div> {this.showPosts()} </div>
  }
}

export default Posts

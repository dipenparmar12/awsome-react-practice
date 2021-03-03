import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
//
import Test from './Test'
import Header from './Layout/Header'
import Navigation from './Layout/Navigation'
import Posts from './Posts'
import PostCreateForm from './PostCreateForm'
import PostEditForm from './PostEditForm'

class Router extends Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    console.clear()
    this.getPosts()
  }

  getPosts = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?limit=20`)
      .then((res) => {
        this.setState({
          posts: res.data,
        })
      })
  }

  createPost = (post) => {
    console.log('Crud.js::post', post)
    return axios
      .post(`https://jsonplaceholder.typicode.com/posts`, { post })
      .then((res) => {
        if (res.status === 201) {
          Swal.fire('New post Created', 'It is created correctly.', 'success')
        }
        console.log('Crud.js::createPost', res)
        // TODO Add new post in list
        // const newPost = Object.assign({}, )
      })
  }

  editPost = (updatePost) => {
    const { id } = updatePost
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, { updatePost })
      .then((res) => {
        if (res.status === 200) {
          Swal.fire(
            'Post Updated',
            'The changes were saved correctly.',
            'success'
          )
          let postId = res.data.id
          const posts = [...this.state.posts]
          const postEdit = posts.findIndex((post) => postId === post.id)
          posts[postEdit] = updatePost
          this.setState({
            posts,
          })
        }
      })
  }

	deletePost = (id)=>{
		console.log('Crud.js::[deletePost]id', id);
	}

  render() {
    return (
      <BrowserRouter>
        <div className='container' style={{ padding: '20px' }}>
          <Header />
          <div className='row justify-content-center'>
            <Navigation />

            <Switch>
              {/* List Post */}
              <Route
                exact
                path='/'
                render={(props) => (
                  <Posts posts={this.state.posts} {...props} deletePost={this.deletePost} />
                )}
              />

              {/* Create Post */}
              <Route
                exact
                path='/create'
                render={() => <PostCreateForm createPost={this.createPost} />}
              />

              {/* Edit Post */}
              <Route
                exact
                path={`/edit/:id`}
                render={(props) => {
                  const postId = props.match.params.id
                  const post = this.state.posts
                    ?.filter((p) => p.id === Number(postId))
                    .shift()

                  return (
                    <PostEditForm
                      post={post}
                      id={postId}
                      editPost={this.editPost}
                    />
                  )
                }}
              />

              {/* Test Route */}
              <Route path='/test' render={(props) => <Test {...props} />} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default Router

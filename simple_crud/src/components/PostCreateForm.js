import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './PostCreateForm.css'

class PostCreateForm extends Component {
  state = {
    categories: ['cateOne','Home', 'Laptop', 'Car', 'Ac', 'Table'],
  }
  titleRef = React.createRef()
  contentRef = React.createRef()
  categoryRef = React.createRef()
  dateRef = React.createRef()
  // Number, checkbox, radioBox, dropDownList, TODO

  componentDidMount() {
    console.clear()
    // console.log('PostCreateForm.js::this.props', this.props)
  }

  createPost = (e) => {
    e.preventDefault()
    const newPost = {
      title: this.titleRef.current?.value,
      content: this.contentRef.current?.value,
      category: this.categoryRef.current?.value,
      date: this.dateRef.current?.value,
    }
		
    console.log('PostCreateForm.js::newPost', newPost)

    this.props.createPost(newPost)

		/// Redirect
    this.props.history.push('/')
  }

  render() {
    return (
      <>
        <form onSubmit={this.createPost}>
          <h1 style={{ color: '#114' }}>CreatePost</h1>

          {/* Title */}
          <div className='form-group'>
            <label>Title:</label>
            <input
              type='text'
              ref={this.titleRef}
              className='form-control'
              placeholder='Title..'
            />
          </div>

          {/* Body */}
          <div className='form-group'>
            <label>Content:</label>
            <textarea
              className='form-control'
              rows='7'
              cols='25'
              ref={this.contentRef}
              placeholder='Here write your content..'
            ></textarea>
          </div>

          {/* Category */}
          <div className='form-group'>
            <label>Category</label>
            <select ref={this.categoryRef}>
              <option value='car'>Car</option>
              <option value='home'>Home</option>
              <option value='laptop'>Laptop</option>
            </select>
          </div>

          {/* Date */}
          <div className='form-group'>
            <label>Date </label>
            <input type='date' ref={this.dateRef} />
          </div>

          <button type='submit' className='btn btn-primary'>
            Create
          </button>
        </form>
      </>
    )
  }
}

export default withRouter(PostCreateForm)

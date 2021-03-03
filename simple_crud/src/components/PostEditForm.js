import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class PostEditForm extends Component {
  state = {
    categories: ['cateOne', 'Home', 'Laptop', 'Car', 'Ac', 'Table'],
    category: null,
  }

  titleRef = React.createRef()
  bodyRef = React.createRef()
  categoryRef = React.createRef()
  dateRef = React.createRef()

  componentDidMount() {
    // console.log('PostEditForm.js::this.props', this.props)
    var randCategory = this.state.categories[
      Math.floor(Math.random() * this.state.categories.length)
    ]
    this.setState({ category: randCategory }, () => {
      console.log(this.state.category, 'randCategory')
    })
  }

  editPost = (e) => {
    e.preventDefault()
    const post = {
      title: this.titleRef.current?.value,
      body: this.bodyRef.current?.value,
      category: this.categoryRef.current?.value,
      dateRef: this.dateRef.current?.value,
      id: this.props?.post?.id,
    }
    this.props.editPost(post)
  }

  loadForm = () => {
    if (!this.props.post) return null
    const { title, body } = this.props.post

    return (
      <form onSubmit={this.editPost}>
        <h1 style={{ color: '#114' }}> Edit Post</h1>

        {/* Title */}
        <div className='form-group'>
          <label>Title: </label>
          <input
            type='text'
            ref={this.titleRef}
            className='form-control'
            defaultValue={title}
          />
        </div>

        {/* Body */}

        {/* Body */}
        <div className='form-group'>
          <label>Content:</label>
          <textarea
            className='form-control'
            rows='7'
            cols='25'
            ref={this.bodyRef}
            placeholder='Here write your content..'
            defaultValue={body}
          ></textarea>
        </div>

        {/* Category */}
        <div className='form-group'>
          <label>Category</label>
          <select ref={this.categoryRef} defaultValue={this.state.category}>
            {this.state.categories.map((cate, i) => (
              <option key={cate} value={cate}>
                {cate}
              </option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div className='form-group'>
          <label>Date </label>
          <input type='date' ref={this.dateRef} />
        </div>

        {/* Submit btn  */}
        <button type='submit' className='btn btn-primary'>
          Save changes
        </button>
        {/* --- END --- */}
      </form>
    )
  }

  render() {
    return <React.Fragment>{this.loadForm()}</React.Fragment>
  }
}

export default withRouter(PostEditForm)

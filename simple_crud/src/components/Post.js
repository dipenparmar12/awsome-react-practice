import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import './Post.css'

class Post extends Component {
  randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  getRandom() {
    return Array(this.randomInteger(3, 13))
      .fill('')
      .map((v) => Math.random().toString(36).charAt(2))
      .join('')
  }

  confirmDeletion = () => {
    const { id } = this.props.post

    Swal.fire({
      title: 'Delete this one?',
      text: 'This action can not be canceled!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete',
      cancelButtonText: 'No, Cancel',
    }).then((result) => {
      if (result.value) {
        this.props.deletePost(id)
        Swal.fire('Press OK to back', 'The post has been deleted', 'success')
      }
    })
  }

  render() {
    // console.log('Post.js::this.props.post', this.props.post);
    const { id, title, body, category } = this.props.post
    return (
      <div>
        <Paper style={{ marginBottom: '5px' }}>
          {/* Title */}
          <p>
            <span className='post-preview'>
              Title:
              <b>{title.length > 30 ? `${title.substr(0, 25)}...` : title}</b>
            </span>
          </p>
          <Divider light />

          {/* Body */}
          <p className='post_body'>
            <span className='post-preview'>
              {body.length > 300 ? `${body.substr(0, 300)}...` : body}
            </span>
          </p>
          <Divider light />

          {/* Category */}
          <p className='post_category'>
            Category: <b> {category ? category : this.getRandom()}</b>
          </p>
          <Divider light />

          {/* Actions */}
          <ButtonGroup
            variant='text'
            color='primary'
            aria-label='text primary button group'
          >
            <Button>
              <Link to={`/post/${id}`} className='btn btn-primary'>
                Show
              </Link>
            </Button>
            <Button>
              <Link to={`/edit/${id}`} className='btn btn-warning'>
                Edit
              </Link>
            </Button>
            <Button onClick={this.confirmDeletion}>
							Delete
            </Button>
          </ButtonGroup>
        </Paper>
      </div>
    )
  }
}

export default Post

import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../store/postReducer";
import PostForm from "./PostForm";

const Posts = ({ fetchPosts, posts, item }) => {
  React.useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <PostForm />
      <br />

      <h4> {"Form Title: " + item.title}</h4>
      <p> {item.body}</p>

      {posts &&
        posts.map((el) => {
          return (
            <React.Fragment key={el.id}>
              <h4> {el.title}</h4>
              <p> {el.body}</p>
            </React.Fragment>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  item: state.posts.item,
  posts: state.posts.items,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => {
      dispatch(fetchPosts());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

/// class component approch..
//////////////////////////////
// class Posts extends React.Component {
//   componentDidMount() {
//     this.props.fetchPosts();
//   }
//   render() {
//     const posts = this.props.posts;
//     console.log("Posts.js::posts", posts);
//     return <div></div>;
//   }
// }
// const mapStateToProps = (state) => {
//   console.log("Posts.js::state", state);
//   return {
//     posts: state.posts.items,
//   };
// };

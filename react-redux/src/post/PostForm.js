import React from "react";
import { connect } from "react-redux";
import { postCreate } from "../store/postReducer";
import styles from "./PostCreate.module.css";

const PostForm = ({ postCreate }) => {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("PostCreate.js::submited");

    postCreate({ title, body });
  };

  return (
    <div>
      <h1> Create post </h1>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Body"
          onChange={(e) => {
            setBody(e.target.value);
          }}
          value={body}
        />
        <input className={styles.submit} type="submit" value="Submit" />
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postCreate: (postData) => dispatch(postCreate(postData)),
  };
};

export default connect(null, mapDispatchToProps)(PostForm);

import Axios from "axios";

const POST_FETCH = "POST_FETCH";
const POST_CREATE = "POST_CREATE";

const initialState = {
  items: [],
  item: {},
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_FETCH:
      return {
        ...state,
        items: action.payload.items,
      };
    case POST_CREATE:
      return {
        ...state,
        item: {
          id: Math.random(),
          title: action.payload.title,
          body: action.payload.body,
        },
      };

    default:
      return state;
  }
};

/// post Action creators
export const fetchPosts = () => async (dispatch) => {
  const res = await Axios.get(`https://jsonplaceholder.typicode.com/posts`);
  // console.log("postReducer.js::res.data", res.data);
  dispatch({
    type: POST_FETCH,
    payload: {
      items: res.data,
    },
  });
};

export const postCreate = (postData) => async (dispatch) => {
  const res = await Axios.post(`https://jsonplaceholder.typicode.com/posts`);
  console.log("postReducer.js::res", res);
  dispatch({
    type: POST_CREATE,
    payload: {
      title: postData.title,
      body: postData.body,
    },
  });
};

export default postReducer;

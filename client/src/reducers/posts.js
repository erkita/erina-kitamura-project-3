import * as call from "../actions/actionCalls.js";

const reducerPosts = (posts = [], action) => {
  switch (action.type) {
    case call.FETCH_ALL:
      return action.payload;
    case call.FETCH_POST:
      return action.payload.post;
    case call.CREATE:
      return [...posts, action.payload];
    case call.UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case call.DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case call.LIKE_POST:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    default:
      return posts;
  }
};
export default reducerPosts;

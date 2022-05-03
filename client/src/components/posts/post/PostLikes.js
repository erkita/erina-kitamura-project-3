import React from "react";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";

const PostLikes = (props) => {
  const likes = props.likes;

  const displayLikes = () => {
    return `${likes.length} like${likes.length === 1 ? "" : "s"}`;
  };

  const userLikePost = () => {
    return (
      <>
        <ThumbUpAltIcon fontSize="small" />
        &nbsp;{displayLikes()}
      </>
    );
  };

  const userUnlikePost = () => {
    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;{displayLikes()}
      </>
    );
  };

  return (
    <>
      {likes.length > 0 ? (
        likes.find((like) => like === props.userId) ? (
          userLikePost()
        ) : (
          userUnlikePost()
        )
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;Like
        </>
      )}
    </>
  );
};

export default PostLikes;

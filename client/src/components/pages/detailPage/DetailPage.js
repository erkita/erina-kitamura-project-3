import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  Paper,
  Typography,
  Divider,
  CardActions,
  Button,
} from "@material-ui/core";
import moment from "moment";
import useStyles from "./styles";
import { getPost } from "../../../actions/posts";
import default_post_bg from "../../../images/default_post_bg.png";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import DeleteIcon from "@material-ui/icons/Delete";

const DetailPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts);
  const { id } = useParams();
  const [prevId, setPrevId] = useState("");
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));
  const userId = user?.result?._id;

  useEffect(() => {
    if (post.length === 0 && id === prevId) {
      return history.push("/");
    }
    setPrevId("id");
    dispatch(getPost(id));
  }, [id, dispatch]);

  const displayLikes = (likes) => {
    return `${likes?.length} like${likes?.length === 1 ? "" : "s"}`;
  };

  const userLikePost = (likes) => {
    return (
      <>
        <ThumbUpAltIcon fontSize="small" />
        &nbsp;{displayLikes(likes)}
      </>
    );
  };

  const userUnlikePost = (likes) => {
    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;{displayLikes(likes)}
      </>
    );
  };

  const Likes = (postLikes) => {
    postLikes = Object.values(postLikes);
    if (postLikes[0] !== undefined && postLikes[0].length > 0) {
      return postLikes[0].find((like) => like === userId)
        ? userLikePost(postLikes[0])
        : userUnlikePost(postLikes[0]);
    }
    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  return (
    <Paper className={classes.paper}>
      <div className={classes.card}>
        <div className={classes.textSection}>
          <Typography variant="h3" className={classes.subject}>
            {post.subject}
          </Typography>
          <Typography variant="h6">{`Posted by: ${post.name}`}</Typography>
          <Typography variant="body1">
            {moment(post.created).fromNow()}
          </Typography>
          <Divider className={classes.divider} />
          <Typography
            className={classes.plantDetails}
            variant="body1"
            component="p"
          >
            <b>USDA Zone: &nbsp;&nbsp;&nbsp;</b>
            {post.usdaZone}
          </Typography>
          <Typography
            className={classes.plantDetails}
            variant="body1"
            component="p"
          >
            <b>Light Needs: &nbsp;&nbsp;</b>
            {post.lightNeeds}
          </Typography>
          <Typography
            className={classes.plantDetails}
            variant="body1"
            component="p"
          >
            <b>Water Needs: &nbsp;</b>
            {post.waterNeeds}
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {post.message}
          </Typography>
        </div>
        <div className={classes.imageSection}>
          <img
            className={classes.media}
            src={post.selectedFile || default_post_bg}
            alt={post.title}
          />
        </div>
      </div>
      <CardActions className={classes.postActions}>
        <Button className={classes.postActionButton} disabled={true}>
          <Likes postLikes={post?.likes} />
        </Button>
        {user?.result?._id === post?.user && (
          <Button className={classes.postActionButton} disabled={true}>
            <DeleteIcon></DeleteIcon>
            &nbsp;Delete
          </Button>
        )}
      </CardActions>
    </Paper>
  );
};

export default DetailPage;

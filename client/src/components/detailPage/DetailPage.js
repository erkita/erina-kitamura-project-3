import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";
import { Paper, Typography, Divider } from "@material-ui/core";
import moment from "moment";
import useStyles from "./styles";
import { getPost } from "../../actions/posts";
import default_post_bg from "../../images/default_post_bg.png";

const DetailPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const post = useSelector((state) => state.posts);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  if (!post) {
    return null;
  }

  return (
    // <div>this pg is dumb and so am i :)</div>
    <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">
            {post.subject}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {post.message}
          </Typography>
          <Typography variant="h6">
            Created by:
            <Link
              to={`/users/${post.name}`}
              style={{ textDecoration: "none", color: "#3f51b5" }}
            >
              {` ${post.name}`}
            </Link>
          </Typography>
          <Typography variant="body1">
            {moment(post.createdAt).fromNow()}
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
        </div>
        <div className={classes.imageSection}>
          <img
            className={classes.media}
            src={post.selectedFile || default_post_bg}
            alt={post.title}
          />
        </div>
      </div>
    </Paper>
  );
};

export default DetailPage;

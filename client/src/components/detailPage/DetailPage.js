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
    </Paper>
  );
};

export default DetailPage;

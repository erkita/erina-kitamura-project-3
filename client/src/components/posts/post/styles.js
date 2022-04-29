import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    flex: "0 auto",
    justifyContent: "center",
    borderRadius: "4px",
    height: "100%",
    width: "55vw",
  },
  cardMedia: {
    height: "0.25vh",
    paddingTop: "40%",
  },
  button: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "black",
  },
  editButton: {
    color: "black",
    border: "1px solid white",
    padding: 0,
    size: "medium",
  },
  postActionButton: {
    size: "small",
    color: "#366954",
  },
  subject: {
    padding: "10px 15px",
  },
  postInfo: {
    padding: "1px 15px",
  },
  postAction: {
    display: "block",
    textAlign: "initial",
  },
  postActions: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

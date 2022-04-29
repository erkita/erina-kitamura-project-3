import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "4px",
    height: "100%",
    width: "55vw",
    position: "relative",

    [theme.breakpoints.down("md")]: {
      // width: "70vw",
      border: "1px solid red",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "2.75vw",
      marginBottom: "-1vh",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "2.55vw",
      marginBottom: "-2vh",
    },
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

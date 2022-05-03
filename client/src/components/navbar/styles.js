import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1vh 4vw",
    backgroundColor: "#61975b",
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  typography: {
    fontFamily: "Arial Black",
    textDecoration: "none",
    color: "#ffebdb",
    fontSize: "1.5em",
    fontWeight: "900px",
    letterSpacing: ".2rem",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "15vw",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "20vw",
    },
    [theme.breakpoints.down("sm")]: {
      width: "28vw",
      marginRight: "2.5em",
    },
  },
  logInOut: {
    color: "#366954",
    backgroundColor: "#ffebdb",
    textDecoration: "none",
    fontSize: "0.75em",
    borderRadius: "8em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.5em",
      marginLeft: "1em",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  userName: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  addCircle: {
    color: "#ffebdb",
    height: theme.spacing(6),
    width: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      marginRight: "0.2em",
    },
  },
  avatar: {
    color: "#366954",
    backgroundColor: "#ffebdb",
    height: theme.spacing(5),
    width: theme.spacing(5),
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: "1em",
  },
}));

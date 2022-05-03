import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  form: {
    autoComplete: "off",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  typography: {
    color: "#366954",
    fontWeight: 600,
    letterSpacing: 2,
    wordSpacing: 4,
    margin: "2vh auto 2vh",
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    marginTop: "8em",
    marginLeft: "5vw",
    padding: theme.spacing(2),
    width: "48vw",
    [theme.breakpoints.down("md")]: {
      left: "-0.1vw",
    },
    [theme.breakpoints.down("sm")]: {
      width: "60vw",
    },
    [theme.breakpoints.down("xs")]: {
      width: "70vw",
      marginLeft: "3vw",
    },
  },
  fileInput: {
    width: "95%",
    margin: "10px 0",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  submitButton: {
    margin: "1vh auto",
    marginBottom: 10,
    width: "15vh",
    color: "#e7ded9",
    backgroundColor: "#366954",
  },
  clearButton: {
    margin: "0 auto",
    marginBottom: 10,
    width: "15vh",
    color: "#366954",
    backgroundColor: "#e7ded9",
  },
}));

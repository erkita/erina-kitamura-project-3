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
    position: "fixed",
    marginTop: "11.4vh",
    right: "5vw",
    padding: theme.spacing(2),
    width: "38vh",
    [theme.breakpoints.down("md")]: {
      position: "relative",
      left: "calc(50vw - ((100vw - 100%)/1.23))",
      width: "75.5vw",
    },
    [theme.breakpoints.down("md")]: {
      position: "relative",
      width: "77.25vw",
      left: "-0.1vw",
    },
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      width: "76.55vw",
      left: "2.8vw",
    },
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      width: "73vw",
      left: "3vw",
    },
  },
  fileInput: {
    width: "97%",
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

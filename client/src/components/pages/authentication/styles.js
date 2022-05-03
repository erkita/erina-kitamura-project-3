import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  fontColor: {
    color: "#366954",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20vh",
    padding: theme.spacing(2),
  },
  avatar: {
    backgroundColor: "#988780",
    margin: theme.spacing(2),
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submitButton: {
    color: "#e7ded9",
    backgroundColor: "#366954",
    margin: theme.spacing(3, 0, 2),
    "&:hover": {
      backgroundColor: "#366954",
    },
  },
  submitButtonInverse: {
    color: "#366954",
  },
}));

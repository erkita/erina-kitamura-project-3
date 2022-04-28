import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: "10vh",
    width: "100%",
    // border: "2px solid red",
    [theme.breakpoints.down("md")]: {
      marginTop: "1vh",
      width: "90vw",
    },
  },
}));

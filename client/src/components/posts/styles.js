import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "10vh",
    [theme.breakpoints.down("md")]: {
      marginTop: "2vh",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "3vh",
    },
  },
}));

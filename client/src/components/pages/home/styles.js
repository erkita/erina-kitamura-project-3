import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  gridContainer: {
    [theme.breakpoints.down("md")]: {
      marginTop: "10vh",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "8vh",
    },
  },
}));

import React, { useState, useEffect } from "react";
import { AppBar, Avatar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { LOGOUT } from "../../actions/actionCalls";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const getUsersFirstInitial = () => {
    return user.result.name.charAt(0);
  };

  const logOutUser = () => {
    dispatch({ type: LOGOUT });
    history.push("/");
    setUser(null);
  };

  const checkTokenExpiration = () => {
    const token = user?.token;
    if (token) {
      let currentTimestamp = new Date().getTime() / 1000;
      const decodedToken = decode(token);
      if (currentTimestamp > decodedToken.exp) {
        logOutUser();
      }
    }
  };

  useEffect(() => {
    checkTokenExpiration();
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    // <div></div>;
    <AppBar className={classes.appBar}>
      <div className={classes.container}>
        <Typography
          component={Link}
          to="/"
          className={classes.typography}
          variant="h6"
        >
          PLANT A POST
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.avatar} alt={user.result.name}>
              {getUsersFirstInitial()}
            </Avatar>
            <Button
              className={classes.logInOut}
              variant="contained"
              onClick={logOutUser}
            >
              Log out
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/authentication"
            className={classes.logInOut}
            variant="contained"
          >
            Log in
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

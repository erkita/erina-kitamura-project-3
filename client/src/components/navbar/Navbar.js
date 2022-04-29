import React, { useState, useEffect } from "react";
import { AppBar, Avatar, Toolbar, Typography, Button } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
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
    history.push("/authentication");
    setUser(null);
  };

  const goAddPost = () => {
    history.push("/create-a-post");
  };

  useEffect(() => {
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

    checkTokenExpiration();
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
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
            <AddCircleOutlineIcon
              className={classes.addCircle}
              onClick={() => goAddPost()}
            ></AddCircleOutlineIcon>
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
            Sign in
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

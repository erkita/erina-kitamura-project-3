import React, { useState } from "react";
import {
  Avatar,
  Paper,
  Grid,
  Typography,
  Container,
  Button,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import UserInfo from "./UserInfo";
import { useDispatch } from "react-redux";
import { signIn, signUp } from "../../../actions/authentication.js";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";

const initialUserState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Authentication = () => {
  const [hasAccount, setHasAccount] = useState(true);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [userData, setUserData] = useState(initialUserState);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hasAccount) {
      dispatch(signIn(userData, history));
    } else {
      dispatch(signUp(userData, history));
    }
  };

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setVisiblePassword((prevHasAccount) => !prevHasAccount);
  };

  const handleSignInAndUp = () => {
    setUserData(initialUserState);
    setHasAccount((prevHasAccount) => !prevHasAccount);
    setVisiblePassword(false);
  };

  const displaySignInOrUp = () => {
    return hasAccount ? "Sign in" : "Sign up";
  };

  const displayCreateOrSignInAccount = () => {
    return hasAccount
      ? "Create an account"
      : "Already have an account? Sign in";
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography className={classes.fontColor} variant="h5">
          {displaySignInOrUp()}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {!hasAccount && (
              <>
                <UserInfo
                  name="firstName"
                  label="First Name"
                  handleInputChange={handleInputChange}
                  autoFocus
                />
                <UserInfo
                  name="lastName"
                  label="Last Name"
                  handleInputChange={handleInputChange}
                />
              </>
            )}
            <UserInfo
              name="email"
              label="Email Address"
              handleInputChange={handleInputChange}
              type="email"
            />
            <UserInfo
              name="password"
              label="Password"
              handleInputChange={handleInputChange}
              type={visiblePassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {!hasAccount && (
              <UserInfo
                name="confirmPassword"
                label="Confirm password"
                handleInputChange={handleInputChange}
                type="password"
              />
            )}
          </Grid>
          <Button type="submit" fullWidth className={classes.submitButton}>
            {displaySignInOrUp()}
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Button
                className={classes.submitButtonInverse}
                onClick={handleSignInAndUp}
              >
                {displayCreateOrSignInAccount()}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Authentication;

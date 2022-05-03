import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Container } from "@material-ui/core";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/home/HomePage";
import Authentication from "./components/authentication/Authentication";
import DetailPage from "./components/detailPage/DetailPage";
import PostFormPage from "./components/postFormPage/PostFormPage";

function App() {
  const user = JSON.parse(localStorage.getItem("profile"));

  const handleAuthenticationSwitch = () => {
    return user ? <Redirect to="/" /> : <Authentication />;
  };

  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/authentication"
            exact
            component={() => handleAuthenticationSwitch()}
          />
          <Route path="/posts/:id" exact component={DetailPage} />
          <Route path="/create-a-post" exact component={PostFormPage} />
          <Route path="/create-a-post/:id" exact component={PostFormPage} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;

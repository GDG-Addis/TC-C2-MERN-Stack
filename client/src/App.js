import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/login";
import SignUpPage from "./pages/sign-up";
import HomePage from "./pages/home";
import CollaborationPage from "./pages/collaboration";
import NotFoundPage from "./pages/not-found";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/sign-up">
        <SignUpPage />
      </Route>
      <Route path="/books/:id/edit">
        <CollaborationPage />
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default App;

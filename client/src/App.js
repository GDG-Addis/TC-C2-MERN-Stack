import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import LoginPage from "./pages/login";
import SignUpPage from "./pages/sign-up";
import HomePage from "./pages/home";
import CollaborationPage from "./pages/collaboration";
import NotFoundPage from "./pages/not-found";
import GuardedRoute from "./components/guarded-route";

const App = () => {
  return (
    <Switch>
      <GuardedRoute exact path="/">
        <HomePage />
      </GuardedRoute>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/sign-up">
        <SignUpPage />
      </Route>
      <GuardedRoute path="/books/:id/edit">
        <CollaborationPage />
      </GuardedRoute>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default App;

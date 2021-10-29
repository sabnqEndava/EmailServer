import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { LoginScreen } from "../app/login/LoginScreen";
import { SignInScreen } from "../app/login/SignInScreen";
import { MainView } from "../app/MainView/MainView";

export const AppRouter = () => {
  const isAuthenticated = false;
  return (
    <Router>
      <div className="h-full">
        <Switch>
          <Route
            exact
            path="/login"
            component={() =>
              !isAuthenticated ? <LoginScreen /> : <Redirect to="/" />
            }
          />
          <Route
            exact
            path="/signin"
            component={() =>
              !isAuthenticated ? <SignInScreen /> : <Redirect to="/" />
            }
          />
          <Route
            path="/"
            component={() =>
              isAuthenticated ? <MainView /> : <Redirect to="/login" />
            }
          />
        </Switch>
      </div>
    </Router>
  );
};

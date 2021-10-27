import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { LoginScreen } from "../app/login/LoginScreen";
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
              !isAuthenticated ? <LoginScreen /> : <MainView />
            }
          />
          <Route
            path="/"
            component={() => (isAuthenticated ? <MainView /> : <LoginScreen />)}
          />
        </Switch>
      </div>
    </Router>
  );
};

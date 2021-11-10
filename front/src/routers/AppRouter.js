import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../app/login/LoginScreen";
import { SignInScreen } from "../app/login/SignInScreen";
import { MainView } from "../app/mainView/MainView";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);
  const isAuthenticated = user.logged;
  return (
    <Router>
      <div className="h-full">
        <Switch>
          <Route
            exact
            path="/login"
            component={(props) =>
              !isAuthenticated ? (
                <LoginScreen {...props} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            exact
            path="/signin"
            component={(props) =>
              !isAuthenticated ? (
                <SignInScreen {...props} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/"
            component={(props) =>
              isAuthenticated ? (
                <MainView {...props} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </Switch>
      </div>
    </Router>
  );
};

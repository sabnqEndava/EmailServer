import React, { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";
import overlayReducer from "./redux/reducer/overlay";
import { OverlayContext } from "./redux/reducer/index";
import { AppRouter } from "./routers/AppRouter";
import { Overlay } from "./app/mainView/components/overlay/index";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

export const App = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);
  const [value, dispatchOverlay] = useReducer(overlayReducer, false);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <OverlayContext.Provider value={{ value, dispatchOverlay }}>
      <AuthContext.Provider value={{ user, dispatch }}>
        <AppRouter />
        <Overlay />
      </AuthContext.Provider>
    </OverlayContext.Provider>
  );
};

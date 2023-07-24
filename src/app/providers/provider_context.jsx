import React, { createContext, useContext, useState } from "react";
import secureLocalStorage from "react-secure-storage";

/* Context state */
const ContextState = createContext({
  CurrentUser: {},
  UserToken: null,
  UserTokenId: null,
  SetCurrentUser: () => {},
  SetUserToken: () => {},
  SetUserTokenId: () => {}
});

/* Set Context Provider */
const ContextProvider = ({ children }) => {
  /* Get user session */
  const [CurrentUser, _SetCurrentUser] = useState(
    secureLocalStorage.getItem("Session") || ""
  );
  const setCurrentUser = data => {
    if (data) {
      secureLocalStorage.setItem("Session", data);
    } else {
      secureLocalStorage.removeItem("Session");
    }
    _SetCurrentUser(data);
  };

  /* Get user Token */
  const [UserToken, _SetUserToken] = useState(
    secureLocalStorage.getItem("AuthToken") || ""
  );
  const setUserToken = data => {
    if (data) {
      secureLocalStorage.setItem("AuthToken", data);
    } else {
      secureLocalStorage.removeItem("AuthToken");
    }
    _SetUserToken(data);
  };

  /* Get user TokenId */
  const [UserTokenId, _SetUserTokenId] = useState(
    secureLocalStorage.getItem("AuthTokenId") || ""
  );
  const setUserTokenId = data => {
    if (data) {
      secureLocalStorage.setItem("AuthTokenId", data);
    } else {
      secureLocalStorage.removeItem("AuthTokenId");
    }
    _SetUserTokenId(data);
  };

  return (
    <ContextState.Provider
      value={{
        CurrentUser,
        setCurrentUser,
        UserToken,
        setUserToken,
        UserTokenId,
        setUserTokenId
      }}
    >
      {children}
    </ContextState.Provider>
  );
};

/* Set UseStateContext */
const useStateContext = () => useContext(ContextState);

export { ContextProvider, useStateContext };

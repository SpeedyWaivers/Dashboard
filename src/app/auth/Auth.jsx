/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setUserData } from "../redux/actions/UserActions";
import { getNavigationByUser } from "../redux/actions/NavigationAction";
import localStorageService from "../services/localStorageService";
import history from "history.js";
import { useLocation } from "react-router-dom";
import jwtAuthService from "app/services/jwtAuthService";

const checkJwtAuth = async (setUserData, pathname) => {
  let user = jwtAuthService.loginWithToken();
  if (user) setUserData(user);
  else if (pathname !== "/") {
    history.push({
      pathname: "/session/signin",
    });
  }
  return user;
};

const Auth = ({ children, user, setUserData, getNavigationByUser }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    setUserData(localStorageService.getItem("auth_user"));
    checkJwtAuth(setUserData, pathname);
  }, [pathname, setUserData]);

  useEffect(() => {
    getNavigationByUser();
  }, [user.username]);

  return <Fragment>{children}</Fragment>;
};

const mapStateToProps = (state) => ({
  setUserData: PropTypes.func.isRequired,
  getNavigationByUser: PropTypes.func.isRequired,
  login: state.login,
  user: state.user,
});

export default connect(mapStateToProps, { setUserData, getNavigationByUser })(
  Auth
);

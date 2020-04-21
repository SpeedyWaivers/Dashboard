import React, { useEffect, Fragment, useState } from "react";
import {
  Switch,
  Icon,
  MenuItem,
  Tooltip,
  IconButton,
  Avatar,
  useMediaQuery,
} from "@material-ui/core";
import { withStyles, useTheme } from "@material-ui/core/styles";

import { useDispatch, useSelector } from "react-redux";
import {
  setLayoutSettings,
  setDefaultSettings,
} from "app/redux/actions/LayoutActions";
import { logoutUser } from "app/redux/actions/UserActions";
import { useLocation } from "react-router-dom";
import { MatxMenu } from "matx";
import Sidenav from "../SharedCompoents/Sidenav";
import Brand from "../SharedCompoents/Brand";
import SidenavTheme from "../MatxTheme/SidenavTheme/SidenavTheme";
import { merge } from "lodash";

const IconButtonWhite = withStyles((theme) => ({
  root: {
    backgroundColor: "transparent",
    padding: "5px",
  },
}))(IconButton);

const IconSmall = withStyles(() => ({
  root: {
    fontSize: "1rem",
  },
}))(Icon);

const Layout1Sidenav = () => {
  const dispatch = useDispatch();
  const { settings } = useSelector((state) => state.layout);
  const { user } = useSelector((state) => state);
  const { pathname } = useLocation();
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (isMdScreen) {
      updateSidebarMode({ mode: "close" });
    }
  }, [pathname]);

  const updateSidebarMode = (sidebarSettings) => {
    const updatedSettings = merge({}, settings, {
      layout1Settings: {
        leftSidebar: {
          ...sidebarSettings,
        },
      },
    });

    dispatch(setLayoutSettings(updatedSettings));
    dispatch(setDefaultSettings(updatedSettings));
  };

  const handleSidenavToggle = () => {
    let {
      layout1Settings: {
        leftSidebar: { mode },
      },
    } = settings;

    console.log(mode);

    updateSidebarMode({ mode: mode === "compact" ? "full" : "compact" });
  };

  const handleSignOut = () => {
    dispatch(logoutUser());
  };

  const sidenavTheme =
    settings.themes[settings.layout1Settings.leftSidebar.theme] || theme;

  return (
    <SidenavTheme theme={sidenavTheme} settings={settings}>
      <div className="sidenav">
        <div
          className="sidenav__hold"
          style={{
            backgroundImage: `url(${settings.layout1Settings.leftSidebar.bgImgURL})`,
          }}
        >
          {!Object.keys(user).length && (
            <Fragment>
              {renderLogoSwitch(settings, handleSidenavToggle)}
              <Sidenav>{renderUser(user, handleSignOut)}</Sidenav>
            </Fragment>
          )}
        </div>
      </div>
    </SidenavTheme>
  );
};

const renderLogoSwitch = (settings, handleSidenavToggle) => (
  // Open Brand component file to replace logo and text
  <Brand>
    <Switch
      className="sidenav__toggle show-on-pc"
      onChange={handleSidenavToggle}
      checked={!(settings.layout1Settings.leftSidebar.mode === "full")}
      color="secondary"
    />
  </Brand>
);

const renderUser = (user, handleSignOut) => {
  return (
    <div className="sidenav__user">
      <Avatar className="h-40 w-40" src={user.imgUrl} />
      <div className="ml-4">
        <span className="username capitalize">
          {/* <Icon>lock</Icon> */}
          {user.firstName} {user.lastName}
        </span>
        <div className="user__menu">
          <MatxMenu
            menuButton={
              <Tooltip title="Settings">
                <IconButtonWhite aria-label="Delete" className="" size="small">
                  <IconSmall> settings </IconSmall>
                </IconButtonWhite>
              </Tooltip>
            }
          >
            <MenuItem className="flex items-center">
              <Icon> home </Icon>
              <span className="pl-4"> Home </span>
            </MenuItem>
            <MenuItem className="flex items-center">
              <Icon> settings </Icon>
              <span className="pl-4"> Account Setting </span>
            </MenuItem>
          </MatxMenu>

          <Tooltip title="Profile">
            <IconButtonWhite aria-label="Delete" className="" size="small">
              <IconSmall>person</IconSmall>
            </IconButtonWhite>
          </Tooltip>
          <Tooltip title="Sign out">
            <IconButtonWhite
              aria-label="Delete"
              className=""
              size="small"
              onClick={handleSignOut}
            >
              <IconSmall>exit_to_app</IconSmall>
            </IconButtonWhite>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Layout1Sidenav;

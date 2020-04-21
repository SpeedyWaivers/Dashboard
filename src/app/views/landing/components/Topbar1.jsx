import React, { useEffect, useState } from "react";
import { Button, useMediaQuery, Hidden, IconButton } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Menu, Clear } from "@material-ui/icons";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";
import { debounce } from "utils";
import clsx from "clsx";

const fixedTopbarHeight = 64;
const normalTopbarHeight = 128;
const sidenavWidth = 260;

const useStyles = makeStyles(({ palette, ...theme }) => ({
  topbarNormal: {
    height: normalTopbarHeight,
    display: "flex",
    alignItems: "center",
    background: "transparent",
    color: palette.primary.contrastText,
    transition: "height 250ms cubic-bezier(0.17, 0.67, 0.83, 0.67)",
  },
  topbarFixed: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    color: palette.text.primary,
    height: fixedTopbarHeight,
    background: palette.background.paper,
    boxShadow: theme.shadows[3],
    zIndex: 9999999,
    [theme.breakpoints.down("xs")]: {
      height: "auto",
      bottom: 0,
      right: "unset",
      width: sidenavWidth,
      left: (props) => (props.isSidebarOpen ? 0 : -sidenavWidth),
      alignItems: "flex-start",
      overflow: "auto",
      transition: "all 250ms cubic-bezier(0.17, 0.67, 0.83, 0.67)",
    },
  },
  topbarContent: {
    maxWidth: 1170,
    margin: "0 auto",
    padding: "0 1rem",
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      height: "100vh",
      padding: 0,

      "& .logo": {
        paddingLeft: "1.25rem",
        margin: "1.25rem 0 !important",
        "& h4": {
          fontSize: "1rem !important",
        },
      },
      "& a": {
        width: "100%",
      },
      "& [class^='MuiButtonBase-']": {
        justifyContent: "flex-start",
        margin: "0 !important",
        padding: "1rem 1.25rem !important",
      },
    },
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.54)",
    zIndex: 9999998,
  },
  menuButton: {
    position: "fixed",
    top: 14,
    left: 16,
    background: palette.background.paper,
    boxShadow: theme.shadows[6],
    zIndex: 9999997,
  },
}));

const Topbar1 = () => {
  const theme = useTheme();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isTopbarFixed, setTopbarFixed] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles({ isSidebarOpen });

  let scrollableElement =
    document.querySelector(".scrollable-content") || window;

  const scrollListener = debounce(({ target: { scrollTop } }) => {
    scrollTop > 128 ? setTopbarFixed(true) : setTopbarFixed(false);
  }, 18);

  const toggleSidenav = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    scrollableElement.addEventListener("scroll", scrollListener);
    return () => {
      scrollableElement.removeEventListener("scroll", scrollListener);
    };
  }, [scrollListener]);

  useEffect(() => {
    if (isMobile) {
      setTopbarFixed(true);
      scrollableElement.removeEventListener("scroll", scrollListener);
    } else scrollableElement.addEventListener("scroll", scrollListener);
  }, [isMobile, scrollListener, scrollableElement]);

  return (
    <div>
      <div
        className={clsx({
          [classes.topbarNormal]: true,
          [classes.topbarFixed]: isTopbarFixed,
        })}
      >
        <div className={classes.topbarContent}>
          <div
            className={clsx({
              "flex justify-between items-center": true,
              "w-full": isMobile,
            })}
          >
            <Scroll
              to="intro1"
              duration={400}
              smooth={true}
              onClick={toggleSidenav}
              containerId="scrollable-content"
              className="logo flex items-center cursor-pointer"
            >
              <img
                className="mr-4 h-36"
                src="/assets/images/logo192.png"
                alt="logo"
              />
              <h4 className="m-0 text-inherit">EZWaiver</h4>
            </Scroll>
            <Hidden smUp>
              <IconButton onClick={toggleSidenav}>
                <Clear className="text-error" />
              </IconButton>
            </Hidden>
          </div>
          <div
            className={clsx({
              "flex flex-wrap items-center": true,
              "flex-column  items-start w-full": isMobile,
            })}
          >
            <Scroll
              to="intro1"
              duration={400}
              smooth={true}
              onClick={toggleSidenav}
              containerId="scrollable-content"
            >
              <Button className="mx-1 px-4 w-full text-left font-medium text-inherit">
                Home
              </Button>
            </Scroll>
            <Scroll
              to="services1"
              smooth={true}
              duration={400}
              onClick={toggleSidenav}
              containerId="scrollable-content"
              offset={
                isTopbarFixed
                  ? isMobile
                    ? 0
                    : -fixedTopbarHeight
                  : -(normalTopbarHeight + 65)
              }
            >
              <Button className="mx-1 px-4 w-full text-left font-medium text-inherit">
                Services
              </Button>
            </Scroll>
            <Scroll
              to="testimonial1"
              smooth={true}
              duration={400}
              onClick={toggleSidenav}
              containerId="scrollable-content"
              offset={
                isTopbarFixed
                  ? isMobile
                    ? 0
                    : -fixedTopbarHeight
                  : -(normalTopbarHeight + 65)
              }
            >
              <Button className="mx-1 px-4 w-full text-left font-medium text-inherit">
                Reviews
              </Button>
            </Scroll>
            <Scroll
              to="contact1"
              smooth={true}
              duration={400}
              onClick={toggleSidenav}
              containerId="scrollable-content"
              offset={
                isTopbarFixed
                  ? isMobile
                    ? -80
                    : -(fixedTopbarHeight + 80)
                  : -(normalTopbarHeight + 145)
              }
            >
              <Button className="mx-1 px-4 w-full text-left font-medium text-inherit">
                Contact
              </Button>
            </Scroll>
            <Scroll
              to="footer1"
              smooth={true}
              duration={400}
              onClick={toggleSidenav}
              containerId="scrollable-content"
            >
              <Button className="mx-1 px-4 w-full text-left font-medium text-inherit">
                About
              </Button>
            </Scroll>
            <Link to="/waivers" onClick={toggleSidenav}>
              <Button className="mx-1 px-4 w-full text-left rounded font-medium text-inherit">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Hidden smUp>
        <IconButton
          className={classes.menuButton}
          onClick={toggleSidenav}
          containerId="scrollable-content"
        >
          <Menu className="text-black" />
        </IconButton>
      </Hidden>
      {isMobile && isSidebarOpen && (
        <div
          onClick={toggleSidenav}
          containerId="scrollable-content"
          className={classes.overlay}
        />
      )}
    </div>
  );
};

export default Topbar1;

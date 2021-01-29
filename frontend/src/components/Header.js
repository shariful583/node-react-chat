import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  makeStyles
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appbar: {
    flexGrow: 1
  },
  menu: {
    marginRight: theme.spacing(2)
  }

}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className="header">
      <AppBar className={classes.appbar}>
        <Toolbar>
          <IconButton className={classes.menu} edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">News</Typography>
          <Link to="/login" style={{textDecoration: 'none'}}>
            <Button color="inherit" style={{color:'white'}}>Login</Button>
          </Link>
          <Link to="/registration" style={{textDecoration: 'none'}}>
            <Button color="inherit" style={{color:'white'}}>Registration</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

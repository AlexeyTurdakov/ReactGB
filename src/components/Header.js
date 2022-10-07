import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { amber } from "@mui/material/colors";
import AppDrawer from "./Drawer.js";

export default class Header extends Component {
  state = {
    checkDrawer: false,
  };

  onChangeDrawer = () => {
    this.setState({ checkDrawer: !this.state.checkDrawer });
  };
  render() {
    return (
      <header>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" style={{ backgroundColor: amber[800] }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={this.onChangeDrawer}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Chat-BotHelper
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          <AppDrawer flag={this.state.checkDrawer} />
        </Box>
      </header>
    );
  }
}

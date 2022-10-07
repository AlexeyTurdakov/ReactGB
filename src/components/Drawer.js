import React, { Component } from "react";
import { Drawer, MenuItem } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import AddHomeIcon from "@mui/icons-material/AddHome";

export default class AppDrawer extends Component {
  render() {
    return (
      <Drawer open={this.props.flag}>
        <MenuItem>
          <AddHomeIcon />
          Main Page
        </MenuItem>
        <MenuItem>
          <AccessibilityIcon />
          Chat 1
        </MenuItem>
        <MenuItem>
          <AccessibilityNewIcon />
          Chat 2
        </MenuItem>
        <MenuItem>
          <AccessibilityIcon />
          Chat 3
        </MenuItem>
      </Drawer>
    );
  }
}

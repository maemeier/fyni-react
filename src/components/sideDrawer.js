import React from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = props => {
  return (
    <Drawer anchor="top" open={props.open} onClose={() => props.onClose(false)}>
      <List component="nav">
        <ListItem button onClick={() => console.log("Featured")}>
          <Link to="/">Home</Link>
        </ListItem>

        <ListItem button onClick={() => console.log("Venue NFO")}>
          <Link to="/coding">Coding</Link>
        </ListItem>

        <ListItem button onClick={() => console.log("Highlights")}>
          <Link to="/aboutMe">About Me</Link>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;

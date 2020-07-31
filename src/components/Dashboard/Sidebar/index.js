import React, { Component } from "react";
import styles from "./styles";
import { withStyles, Drawer } from "@material-ui/core";
import { ADMIN_ROUTES } from "./../../../constants";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  toggleDrawer = (value) => {
    const { onToggleSideBar } = this.props;
    if (onToggleSideBar) {
      onToggleSideBar(value);
    }
  };

  renderList = () => {
    const { classes } = this.props;
    let xhtml = null;
    xhtml = (
      <div className={classes.list}>
        <List component="div">
          {ADMIN_ROUTES.map((item) => {
            return (
              <NavLink
                key={item.path}
                activeClassName={classes.menuLinkActive}
                to={item.path}
                exact={item.exact}
                className={classes.menuLink}
              >
                <ListItem button key={item.path} className={classes.menuItem}>
                  {item.name}
                </ListItem>
              </NavLink>
            );
          })}
        </List>
      </div>
    );
    return xhtml;
  };

  render() {
    const { classes, showSideBar } = this.props;
    return (
      <Drawer
        open={showSideBar}
        onClose={() => this.toggleDrawer(false)}
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="persistent"
      >
        {this.renderList()}
      </Drawer>
    );
  }
}

export default withStyles(styles)(Sidebar);

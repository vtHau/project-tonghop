import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import * as uiActions from "./../../actions/ui";
import cn from "classname";

class Dashboard extends Component {
  handleToggleSideBar = (value) => {
    const { uiActionCreators } = this.props;
    const { showSideBar, hideSideBar } = uiActionCreators;
    if (value === true) {
      showSideBar();
    } else {
      hideSideBar();
    }
  };
  render() {
    const { children, classes, name, showSideBar } = this.props;

    return (
      <div className={classes.dashboard}>
        <Header
          name={name}
          showSideBar={showSideBar}
          onToggleSideBar={this.handleToggleSideBar}
        />
        <div className={classes.wrapper}>
          <Sidebar
            showSideBar={showSideBar}
            onToggleSideBar={this.handleToggleSideBar}
          />
          <div
            className={cn(classes.wrapperContent, {
              [classes.shiftLeft]: showSideBar === false,
            })}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  showSideBar: state.ui.showSideBar,
});

const mapDispatchToProps = (dispatch) => ({
  uiActionCreators: bindActionCreators(uiActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(Dashboard);

import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import LoadingIcon from "./../../assets/images/loader.gif";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import * as uiAction from "./../../actions/ui";

class GlobalLoading extends Component {
  render() {
    const { classes, showLoading } = this.props;
    let xhtml = null;
    if (showLoading) {
      xhtml = (
        <div className={classes.globalloading}>
          <img src={LoadingIcon} alt="loading" className={classes.icon} />
        </div>
      );
    }
    return xhtml;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    showLoading: state.ui.showLoading,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    uiAction: bindActionCreators(uiAction, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(GlobalLoading);

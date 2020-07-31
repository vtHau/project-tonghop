import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import { TextField } from "@material-ui/core";

class SearchBox extends Component {
  render() {
    const { classes, handleChange } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          autoComplete="off"
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          placeholder="Nhap tu khoa tim kiem"
        />
      </form>
    );
  }
}

export default withStyles(styles)(SearchBox);

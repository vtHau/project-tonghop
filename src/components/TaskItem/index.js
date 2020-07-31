import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Gird from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";

class TaksItem extends Component {
  render() {
    const { classes, task, status, onClickEdit, onClickDelete } = this.props;
    const { title } = task;
    return (
      <Card key={task.id} className={classes.card}>
        <CardContent>
          <Gird container justify="space-between">
            <Gird item md={8}>
              <Typography component="h2">{title}</Typography>
            </Gird>
            <Gird item md={4}>
              {status.label}
            </Gird>
          </Gird>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.CardActions}>
          <Fab
            size="small"
            color="primary"
            aria-label="Edit"
            className={classes.fab}
            onClick={onClickEdit}
          >
            <Icon fontSize="small">edit_icon</Icon>
          </Fab>
          <Fab
            size="small"
            color="primary"
            aria-label="Edit"
            className={classes.fab}
            onClick={onClickDelete}
          >
            <Icon fontSize="small">delete_icon</Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaksItem);

import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Gird from "@material-ui/core/Grid";
import styles from "./style";
import TaskItem from "../TaskItem";

class TaskList extends Component {
  render() {
    const { classes, task, status, onClickEdit, onClickDelete } = this.props;
    return (
      <Gird item md={4} xs={12} key={status.value}>
        <Box mt={1} mb={1}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        <div className={classes.wrapperListTask}>
          {task.map((task) => {
            return (
              <TaskItem
                onClickEdit={() => onClickEdit(task)}
                task={task}
                status={status}
                key={task.id}
                onClickDelete={() => onClickDelete(task)}
              />
            );
          })}
        </div>
      </Gird>
    );
  }
}

export default withStyles(styles)(TaskList);

import React from "react";
import { connect } from "react-redux";

export const Tasks = ({ tasks, name }) => (
  <div>
    <h3>{name}</h3>
    <div>
      {tasks.map((task) => (
        <div>{task.name}</div>
      ))}
    </div>
  </div>
);

function maptoState(state, ownProps) {
  console.log("group id is " + ownProps);
  let groupId = ownProps.id;
  return {
    name: ownProps.name,
    id: groupId,
    tasks: state.tasks.filter((task) => task.group === groupId),
  };
}

export const ConnectedTasks = connect(maptoState)(Tasks);

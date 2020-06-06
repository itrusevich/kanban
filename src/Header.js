import React from 'react';

import './App.css';

function Header(props) {

  return (
    <div className="container">
      <h1>Kanban</h1>

      {!props.isOpenCreateTaskForm && <button className="btn btn-primary" onClick={props.openCreateTaskForm}>Create Task</button>}

      {props.isOpenCreateTaskForm &&
        <form>
          <div className="form-group">

            <label htmlFor="exampleInputEmail1">Enter task name:</label>
            <input type="text" className="form-control"
              value={props.taskInput}
              onChange={props.onTaskChange} />

            <label htmlFor="exampleInputEmail1">Enter priority</label>
            <input type="text" className="form-control"
              value={props.priorityInput}
              onChange={props.onPriorityChange} />

          </div>

          <button type="submit" className="btn btn-primary"
            onClick={props.taskSubmit}
            disabled={!props.isActiveButtonTaskCreate}>Submit</button>

          <button className="btn btn-secondary"
            onClick={props.taskReset}
          >Cancel</button>
        </form>
      }
    </div>
  );
}

export default Header;

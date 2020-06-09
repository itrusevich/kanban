import React from 'react';
import '../App.css';

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

            <label htmlFor="exampleInputEmail2">Enter priority:</label>
            <select value={props.priorityValue} id="priority" className="form-control" onChange={props.onPriorityChange}>
            <option value="0">select priority</option>
              <option value="1">High</option>
              <option value="2">Medium</option>
              <option value="3">Low</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary"
            onClick={props.taskSubmit}
            disabled={!(props.isValidTaskInput && props.priorityValue !== '0')}>Submit</button>

          <button className="btn btn-secondary"
            onClick={props.taskReset}
          >Cancel</button>
        </form>
      }
    </div>
  );
}

export default Header;

import React, { useState } from 'react';
import '../App.css';

function Task(props) {
  const [taskEdit, setTaskEdit] = useState({});

  const editMode = (task) => {
    setTaskEdit(task);
  }

  const onEditTaskChange = (e) => {
    setTaskEdit({ ...taskEdit, name: e.target.value });
  };

  const taskSave = () => {
    props.onTaskSave(taskEdit);
    setTaskEdit({});
  }

  return (
    <li key={props.task.id} className="list-group-item">
      Task: {props.task.name} Priority:
      {
        (props.task.priority === 1) ? <span> High</span> : (props.task.priority === 2) ? <span> Medium</span> : <span> Low</span>
      }
      <br />

      <div className="buttons">

        {
          (props.task.status === 'TODO') ?
            <button onClick={() => props.onStatusChangeRight(props.task.id)}>▶️</button> :
            (props.task.status === 'DONE') ?
              <button onClick={() => props.onStatusChangeLeft(props.task.id)}>◀️</button> :
              <>
                <button onClick={() => props.onStatusChangeLeft(props.task.id)}>◀️</button>
                <button onClick={() => props.onStatusChangeRight(props.task.id)}>▶️</button>
              </>
        }

        <button onClick={() => props.onTaskDelete(props.task.id)}>🗑️</button>

        {
          taskEdit.id === props.task.id
            ? <>
              <input type="text" value={taskEdit.name} onChange={onEditTaskChange} />
              <button onClick={taskSave} disabled={!taskEdit.name.trim()}>Save</button>
            </>
            : <span onClick={() => editMode(props.task)}>🖊️</span>
        }

      </div>
    </li>
  )
}
export default Task;

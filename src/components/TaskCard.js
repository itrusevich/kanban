import React, { useState } from 'react';
import '../App.css';
import ModalDelete from './ModalDelete';


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

  const left = <svg className="bi bi-arrow-left" width="1.7em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z" />
    <path fillRule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
  </svg>

  const right = <svg className="bi bi-arrow-right" width="1.7em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z" />
    <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z" />
  </svg>

  const pen = <svg className="bi bi-pen" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M5.707 13.707a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391L10.086 2.5a2 2 0 0 1 2.828 0l.586.586a2 2 0 0 1 0 2.828l-7.793 7.793zM3 11l7.793-7.793a1 1 0 0 1 1.414 0l.586.586a1 1 0 0 1 0 1.414L5 13l-3 1 1-3z" />
    <path fillRule="evenodd" d="M9.854 2.56a.5.5 0 0 0-.708 0L5.854 5.855a.5.5 0 0 1-.708-.708L8.44 1.854a1.5 1.5 0 0 1 2.122 0l.293.292a.5.5 0 0 1-.707.708l-.293-.293z" />
    <path d="M13.293 1.207a1 1 0 0 1 1.414 0l.03.03a1 1 0 0 1 .03 1.383L13.5 4 12 2.5l1.293-1.293z" />
  </svg>

  const up = <svg className="bi bi-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z" />
    <path fillRule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z" />
  </svg>

  const down = <svg className="bi bi-dash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z"/>
</svg>

  return (
    <li key={props.task.id} className="task-card">
      <div className="task-title">
        {
          taskEdit.id === props.task.id
            ? <div>
                <input type="text" className="form-control" value={taskEdit.name} onChange={onEditTaskChange} />
                <button className="btn btn-outline-primary btn-sm margin-left mt-1" onClick={taskSave} disabled={!taskEdit.name.trim()}>Save</button>
              </div>
            : <label className="task-name mr-md-3">{props.task.name}</label>
        }
        {  taskEdit.id !== props.task.id && <div className="task-actions">
          <span onClick={() => editMode(props.task)}>{pen}</span>
          <ModalDelete onTaskDelete={props.onTaskDelete} task={props.task} />
        </div>}
      </div>
      <div className="task-priority">

        <button className="priority-button" disabled={props.task.priority === 1} onClick={() => props.changePriority(props.task.id, true)}>{up}</button>
        {
          (+props.task.priority === 1) ? <span className="badge badge-danger">High</span> : (+props.task.priority === 2) ? <span className="badge badge-warning">Medium</span> : <span className="badge badge-success">Low</span>
        }
        <button className="priority-button" disabled={props.task.priority === 3} onClick={() => props.changePriority(props.task.id)}>{down}</button>
      </div>

      <div className="buttons">
        {
          (props.task.status === 'TODO') ?
            <div className="margin-left" onClick={() => props.onStatusChangeRight(props.task.id)}>{right}</div> :
            (props.task.status === 'DONE') ?
              <div className="margin-left" onClick={() => props.onStatusChangeLeft(props.task.id)}>{left}</div> :
              <>
                <div className="margin-left" onClick={() => props.onStatusChangeLeft(props.task.id)}>{left}</div>
                <div onClick={() => props.onStatusChangeRight(props.task.id)}>{right}</div>
              </>
        }

      </div>
    </li>
  )
}
export default Task;

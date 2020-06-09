import React from 'react';
import '../App.css';
import TaskCard from './TaskCard';


function Column(props) {
  return (
    <>
      {props.tasks.filter(el => el.status === props.status)
        .sort((a, b) => +a.priority - (+b.priority))
        .map(el => (
          <TaskCard task={el}
            onStatusChangeRight={props.onStatusChangeRight}
            onStatusChangeLeft={props.onStatusChangeLeft}
            onTaskDelete={props.onTaskDelete}
            onTaskSave={props.onTaskSave}
            changePriority={props.changePriority}
            />
        ))
      }
    </>
  )
}
export default Column;

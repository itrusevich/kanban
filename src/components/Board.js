import React from 'react';
import '../App.js';
import Column from './Column.js';

function Board(props) {

  return (
    <div className="container">
      <div>
        <ul className="board">
          {props.statuses.map(status => {
            return (
              <li className="column" key={status}>
                <div className="column-title">
                  {status}
                </div>
                <ul className="cards-container">
                  <Column tasks={props.tasks}
                    status={status}
                    onStatusChangeRight={props.onStatusChangeRight}
                    onStatusChangeLeft={props.onStatusChangeLeft}
                    onTaskDelete={props.onTaskDelete}
                    onTaskSave={props.onTaskSave}
                    changePriorityPlus={props.changePriorityPlus}
                  />
                </ul>
              </li>
            )
          })}
        </ul>
      </div>
    </div >
  );
}

export default Board;

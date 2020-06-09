import React from 'react';
import '../App.js';
import Column from './Column.js';

function Board(props) {

  return (
    <div className="container">
      <div>
        <ul className="list-group list-group-horizontal">
          {props.statuses.map(status => {
            return (
              <li className="list-group-item" key={status}>
                <div className="col-sm">
                  {status}
                  <ul className="list-group">
                    <Column tasks={props.tasks}
                      status={status}
                      onStatusChangeRight={props.onStatusChangeRight}
                      onStatusChangeLeft={props.onStatusChangeLeft}
                      onTaskDelete={props.onTaskDelete}
                      onTaskSave={props.onTaskSave}
                    />
                  </ul>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div >
  );
}

export default Board;

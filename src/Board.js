import React from 'react';
import './App.css';

function Board(props) {
  return (
    <div className="container">
      <div>
        <ul className="list-group list-group-horizontal">
          {props.statuses.map((status, ind) => {
            if (ind === 0) {
              return (
                <li className="list-group-item" key={status.name}>
                  <div className="col-sm">
                    {status.name}
                    <ul className="list-group">
                      {props.tasks.filter(el => el.status === status.name)
                        .sort((a, b) => a.priority - b.priority)
                        .map(el => <li key={el.id} className="list-group-item">
                          Task: {el.name} Priority: {el.priority}
                          <br />
                          <button onClick={() => props.onStatusChangeRight(el.id)}>▶️</button></li>)}
                    </ul>
                  </div>
                </li>
              )
            } 
            if (ind === props.statuses.length - 1) {
              return (
                <li className="list-group-item" key={status.name}>
                  <div className="col-sm">
                    {status.name}
                    <ul className="list-group">
                      {props.tasks.filter(el => el.status === status.name)
                        .sort((a, b) => a.priority - b.priority)
                        .map(el => <li key={el.id} className="list-group-item">
                          Task: {el.name} Priority: {el.priority}
                          <br />
                          <button onClick={() => props.onStatusChangeLeft(el.id)}>◀️</button>
                        </li>)}
                    </ul>
                  </div>
                </li>
              )
            } else {
              return (
                <li className="list-group-item" key={status.name}>
                  <div className="col-sm">
                    {status.name}
                    <ul className="list-group">
                      {props.tasks.filter(el => el.status === status.name)
                        .sort((a, b) => a.priority - b.priority)
                        .map(el => <li key={el.id} className="list-group-item">
                          Task: {el.name} Priority: {el.priority}
                          <br />
                          <div className="buttons">
                            <button onClick={() => props.onStatusChangeLeft(el.id)}>◀️</button>
                            <button onClick={() => props.onStatusChangeRight(el.id)}>▶️</button>
                          
                            </div>
                          </li>)}
                    </ul>
                  </div>
                </li>
              )
            }
          })}
        </ul>
      </div>
    </div >
  );
}

export default Board;

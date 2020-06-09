import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Board from './components/Board';
import './App.css';

function App() {
  const initialTasks = [
    { id: 1, name: 'Create F1', priority: 1, status: 'TODO' },
    { id: 2, name: 'Edit F2', priority: 2, status: 'REVIEW' },
    { id: 3, name: 'Remove F3', priority: 3, status: 'DONE' },
    { id: 4, name: 'Create F4', priority: 1, status: 'IN PROGRESS' },
    { id: 5, name: 'Edit F5', priority: 2, status: 'TODO' },
  ];

  const statuses = ['TODO', 'IN PROGRESS', 'REVIEW','DONE'];

  const [isOpenCreateTaskForm, setIsOpenCreateTaskForm] = useState(false);
  const [isActiveButtonTaskCreate, setIsActiveButtonTaskCreate] = useState(false);
  const [taskInput, setTaskInput] = useState('');
  const [priorityValue, setPriorityValue] = useState('0');
  const [tasks, setTasks] = useState(initialTasks);
  const [isValidTaskInput, setIsValidTaskInput] = useState(false);


  const onStatusChangeRight = (id) => {
    const updatedTasks = tasks.map(el => {
      if (el.id === id) return { ...el, status: statuses[statuses.indexOf(el.status) + 1] }
      else return el;
    })
    setTasks(updatedTasks);
  }

  const onStatusChangeLeft = (id) => {
    const updatedTasks = tasks.map(el => {
        if (el.id === id) return { ...el, status: statuses[statuses.indexOf(el.status) - 1] }
        else return el;
    })
    setTasks(updatedTasks);
  }

  const onTaskSave = (task) => {
    const updatedTasks = tasks.map(el => {
      if (el.id === task.id) return { ...el, name: task.name }
      else return el;
    })
    setTasks(updatedTasks);
  };

  const onTaskDelete = (id) => {
    const updatedTasks = tasks.filter(el => el.id !== id)
    setTasks(updatedTasks);
  };

  const openCreateTaskForm = () => {
    setIsOpenCreateTaskForm(true);
  };

  const onTaskChange = (e) => {
    setIsValidTaskInput(e.target.value.length > 4)
    setTaskInput(e.target.value);
  };

  const onPriorityChange = (e) => {
    setPriorityValue(e.target.value);
  };

  const taskSubmit = (e) => {
    const updatedTasks = [...tasks];
    updatedTasks.push({ id: Math.random(), name: taskInput, priority: priorityValue, status: 'TODO' });
    setTasks(updatedTasks);
    taskReset();
  };

  const taskReset = () => {
    setTaskInput('');
    setPriorityValue('0');
    setIsOpenCreateTaskForm(false);
    setIsActiveButtonTaskCreate(false);
  };

  return (
    <div className="container">
      <Header openCreateTaskForm={openCreateTaskForm}
        onTaskChange={onTaskChange}
        taskSubmit={taskSubmit}
        taskReset={taskReset}
        isOpenCreateTaskForm={isOpenCreateTaskForm}
        taskInput={taskInput}
        isActiveButtonTaskCreate={isActiveButtonTaskCreate}
        onPriorityChange={onPriorityChange}
        priorityValue={priorityValue}
        isValidTaskInput={isValidTaskInput}
      />
      <Board tasks={tasks} statuses={statuses}
        onTaskDelete={onTaskDelete}
        onStatusChangeRight={onStatusChangeRight}
        onStatusChangeLeft={onStatusChangeLeft}
        onTaskSave={onTaskSave} 
        priorityValue={priorityValue}/>
    </div>
  );
}

export default App;

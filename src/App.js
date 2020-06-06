import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import Board from './Board';
import './App.css';

function App() {
  const initialTasks = [
    { id: 1, name: 'Create F1', priority: 9, status: 'TODO' },
    { id: 2, name: 'Edit F2', priority: 2, status: 'REVIEW' },
    { id: 3, name: 'Remove F3', priority: 7, status: 'DONE' },
    { id: 4, name: 'Create F4', priority: 7, status: 'IN PROGRESS' },
    { id: 5, name: 'Edit F5', priority: 10, status: 'TODO' },
  ];

  const statuses = [
    { name: 'TODO' },
    { name: 'IN PROGRESS' },
    { name: 'REVIEW' },
    { name: 'DONE' },
  ];

  const [isOpenCreateTaskForm, setIsOpenCreateTaskForm] = useState(false);
  const [isActiveButtonTaskCreate, setIsActiveButtonTaskCreate] = useState(false);
  const [taskInput, setTaskInput] = useState();
  const [priorityInput, setPriorityInput] = useState('');
  const [tasks, setTasks] = useState(initialTasks);

  const onStatusChangeRight = (id) => {
    const updatedTasks = [...initialTasks];
    updatedTasks.map(el => {
      if (el.id === id && el.status === 'TODO') return { ...el, status: 'IN PROGRESS' };
      if (el.id === id && el.status === 'IN PROGRESS') return { ...el, status: 'REVIEW' };
      if (el.id === id && el.status === 'REVIEW') return { ...el, status: 'DONE' };
      else return el;
    })
    setTasks(updatedTasks);
  }

  const onStatusChangeLeft = (id) => {
    const updatedTasks = [...initialTasks];
    updatedTasks.map(el => {
      if (el.id === id && el.status === 'DONE') return { ...el, status: 'REVIEW' };
      else if (el.id === id && el.status === 'REVIEW') return { ...el, status: 'IN PROGRESS' };
      else if (el.id === id && el.status === 'IN PROGRESS') return { ...el, status: 'TODO' };
      else return el;
    })
    setTasks(updatedTasks);
  }

    const openCreateTaskForm = () => {
      setIsOpenCreateTaskForm(true);
    };

    const onTaskChange = (e) => {
      if (e.target.value.length > 4);
      setTaskInput(e.target.value);
    };

    const onPriorityChange = (e) => {
      setIsActiveButtonTaskCreate(e.target.value.length >= 1);
      setPriorityInput(e.target.value);
    };

    const taskSubmit = (e) => {
      e.preventDefault();
      const updatedTasks = [...initialTasks];
      updatedTasks.push({ id: Math.random(), name: taskInput, priority: priorityInput, status: 'TODO' });
      setTasks(updatedTasks);
      taskReset();
    };

    const taskReset = () => {
      setTaskInput('');
      setPriorityInput('');
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
          priorityInput={priorityInput}
        />
        <Board tasks={tasks} statuses={statuses} 
        onStatusChangeRight={onStatusChangeRight}
        onStatusChangeLeft={onStatusChangeLeft}/>
      </div>
    );
  }

  export default App;

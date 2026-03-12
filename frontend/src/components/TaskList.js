import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Logo from './Logo1.png';
const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    axios.get("http://localhost:3001/tasks")
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <img src={Logo} alt="Logo" className='Logo' />
      <h1>Lista de Tarefas</h1>
    <div className="refresh-container">
      <button className="refresh-btn" onClick={fetchTasks}> Atualizar Lista</button>
    </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
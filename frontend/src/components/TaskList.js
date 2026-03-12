import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/tasks")
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Lista de Tarefas</h1>
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
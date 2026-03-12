import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/tasks")
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Tem certeza que deseja deletar esta tarefa?");
    if (confirm) {
      axios.delete(`http://localhost:3001/tasks/:id`, { data: { id } })
        .then(() => {
          setTasks(tasks.filter(tasks => tasks.id !== id));
          alert("Tarefa Eliminada");
        })
        .catch(err => console.error(err));
    }
  };

  return (
    <div>
      <h1>Deletar Tarefa</h1>
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    {task.id} - {task.title}: {task.description}
                    <button onClick={() => handleDelete(task.id)}>Eliminar Tarefa</button>
                </li>
            ))}
        </ul>
    </div>  
  );

};

export default DeleteTasks;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UpdateTask() {
    const [tasks, setTasks] = useState([]); 
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

  useEffect(() => {
    axios.get("http://localhost:3001/tasks")
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  }, []);

    const handleUpdate = (id) => {
    const confirm = window.confirm("Tem certeza que deseja atualizar esta tarefa?");
    if (confirm) {
      axios.put(`http://localhost:3001/tasks/${id}`, { title, description })
        .then(() => {
            setTasks(tasks.map(task => task.id === id ? { ...task, title, description } : task));
            setTitle('');
            setDescription('');
            alert("Tarefa Atualizada");
        })
        .catch(err => console.error(err));
    }
  };

  return (
    <div>
      <h1>Atualizar Tarefa</h1>
      <textarea
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></textarea>
      <textarea
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Descrição</th>
            <th>Botão</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>
                <button onClick={() => handleUpdate(task.id)}>Atualizar Tarefa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UpdateTask;
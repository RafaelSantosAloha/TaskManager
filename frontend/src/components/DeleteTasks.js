import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logo from './Logo1.png';

function DeleteTasks(){
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    axios.get("http://localhost:3001/tasks")
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  };
  useEffect(() => {
    fetchTasks();
  }, []);



  const handleDelete = (id) => {
    const confirm = window.confirm("Tem certeza que deseja eliminar esta tarefa?");
    if (confirm) {
      axios.delete(`http://localhost:3001/tasks/${id}`, { id })
        .then(() => {
          setTasks(tasks.filter(tasks => tasks.id !== id));
          alert("Tarefa Eliminada");
        })
        .catch(err => console.error(err));
    }
  };

  return (
    <div>
      <img src={Logo} alt="Logo" className='Logo' />
      <h1>Eliminar Tarefa</h1>
      <div className="refresh-container">
      <button className="refresh-btn" onClick={fetchTasks}> Atualizar Lista</button>
    </div>
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
                        <button class="delete-btn" onClick={() => handleDelete(task.id)}>Eliminar Tarefa</button>
                    </td>
                </tr>
            ))}
        </tbody>
        </table>
    </div>  
  );

};


export default DeleteTasks;
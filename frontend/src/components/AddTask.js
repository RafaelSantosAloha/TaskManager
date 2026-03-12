import React, { useState } from 'react';
import axios from 'axios';

function AddTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const alertAddTask = () => {
    if (!title || !description) {
      alert("Preencha todos os campos!");
      return;
    }

    axios.post("http://localhost:3001/tasks", { title, description })
      .then(() => {
        setTitle('');
        setDescription('');
        alert("Tarefa adicionada com sucesso!");
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Adicionar Tarefa</h1>
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
      <button onClick={alertAddTask}>Adicionar Tarefa</button>
    </div>
  );
}

export default AddTask;
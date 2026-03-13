import React from 'react';
import Logo from './Logo1.png';


export default function Rotas() {
    return (
        <div>
        <img src={Logo} alt="Logo" className='Logo' />
        <h1>Gestor de Tarefas</h1>
        <nav class="navbar">
            <a href="/tasks">Tarefas</a>
            <a href="/add">Adicionar</a>
            <a href="/update">Atualizar</a>
            <a href="/delete">Apagar</a>
        </nav>
        </div>
    );
}

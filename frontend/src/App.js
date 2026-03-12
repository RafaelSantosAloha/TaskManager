import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import DeleteTasks from "./components/DeleteTasks";
import UpdateTask from "./components/UpdateTasks";
import './App.css';

function App() {
    
    return (
        
        <Router>
            <Routes>
                <Route path="/tasks" element={<TaskList />} />
                <Route path="/" element={<AddTask />} />
                <Route path="/delete" element={<DeleteTasks />} />
                <Route path="/update" element={<UpdateTask />} />
            </Routes>
        </Router>
    );
}

export default App;
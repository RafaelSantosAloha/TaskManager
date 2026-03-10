import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/tasks" element={<TaskList />} />
            </Routes>
        </Router>
    );
}

export default App;
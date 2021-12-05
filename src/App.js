import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage';

function App() {
    const [exerciseToEdit, setExerciseToEdit] = useState([]);

    return (
        <div className="App">
            <div className="App-header">
                <h1><a href="/">EZ-Trak</a></h1>
            </div>

            <Router>
                <Switch>
                    <Route path="/" exact>
                        <HomePage setExerciseToEdit={ setExerciseToEdit }/>
                        <h3><Link to="/create-exercise">Log an exercise!</Link></h3>
                    </Route>
                    <Route path="/create-exercise">
                        <CreateExercisePage />
                    </Route>
                    <Route path="/edit-exercise">
                        <EditExercisePage exerciseToEdit={exerciseToEdit} setExerciseToEdit={setExerciseToEdit}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;

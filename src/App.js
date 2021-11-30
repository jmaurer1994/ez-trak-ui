
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercisePage';

function App() {
  return (
    <div className="App">
        <div className="App-header">
            <h1>EZ-Trak</h1>
        </div>

        <Router>
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                    <h3><Link to="/create-exercise">Log an exercise!</Link></h3>
                </Route>
                <Route path="/create-exercise">
                    <CreateExercisePage />
                </Route>
                <Route path="/edit-exercise">

                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;

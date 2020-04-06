import React from 'react';
import './App.css';
import Game from './components/game';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Superhero Search</h1>
            </header>

            <Game></Game>
        </div>
    );
}

export default App;

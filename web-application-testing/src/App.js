import React from 'react';
import './App.css';
import Dashboard from './Dashboard';

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    Baseball Exists
                </h1>
                <h2>
                    A Game of Baseball is Being Played - Record Events Below
                </h2>
            </header>
            <div className="main">
                <Dashboard/>
            </div>
        </div>
    );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
import Display from './Display';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Baseball Exists
                </p>
                <p>
                    A Game of Baseball is Being Played
                </p>
                <Dashboard/>
                {/*
        <Display/>*/}
            </header>
        </div>
    );
}

export default App;

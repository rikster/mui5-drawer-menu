import React from 'react';
import {Link} from "react-router-dom"
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Link
                    className="App-link"
                    to="/header"
                >
                    MUI Drawer with Header
                </Link>
                <Link
                    className="App-link"
                    to="/noheader"
                >
                    MUI Drawer without Header
                </Link>
                <Link
                    className="App-link"
                    to="/miniheader"
                >
                    MUI Drawer with SB Header
                </Link>
            </header>
        </div>
    );
}

export default App;

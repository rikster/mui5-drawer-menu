import React from 'react';
import {Link} from "react-router-dom"
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Link
                    className="App-link"
                    to="/simpleoverlay"
                >
                    MUI5 Menu Drawer | React Router V6 | Simple Overlay
                </Link>
                <Link
                    className="App-link"
                    to="/miniheader"
                >
                    MUI5 Menu Drawer | React Router V6 | Overlay
                </Link>
            </header>
        </div>
    );
}

export default App;

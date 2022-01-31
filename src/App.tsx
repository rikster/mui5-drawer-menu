import React from 'react';
import {Link} from "react-router-dom"
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Link
                    className="App-link"
                    to="/miniheader"
                >
                    MUI5 Menu Drawer | React Router V6 | Content Moves
                </Link>
                <Link
                    className="App-link"
                    to="/miniheaderoverlay"
                >
                    MUI5 Menu Drawer | React Router V6 | Content Static
                </Link>
                <Link
                    className="App-link"
                    to="/miniheaderoverlayrounded"
                >
                    MUI5 Menu Drawer | React Router V6 | Content Static | Rounded Smaller Icons (16x16)
                </Link>
            </header>
        </div>
    );
}

export default App;

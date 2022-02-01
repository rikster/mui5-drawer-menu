import React from 'react';
import {Link} from "react-router-dom"
import './App.css';

export const NavLink = (props: { label: string; to: string }) => {
    return (
        <Link
            className="App-link"
            to={props.to}
        >
            {props.label.toLocaleLowerCase()}
        </Link>
    )
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <NavLink label={"MUI5 Menu Drawer | React Router V6 | Content Moves"} to={"/miniheader"}/>
                <NavLink label={"MUI5 Menu Drawer | React Router V6 | Content Static"} to={"/miniheaderoverlay"}/>
                <NavLink
                    label={"MUI5 Menu Drawer | React Router V6 | Content Static | Rounded Smaller Icons (20x20 - Viewport) "}
                    to={"/miniheaderoverlayrounded"}/>
            </header>
        </div>
    );
}

export default App;

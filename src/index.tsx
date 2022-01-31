import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import App from "./App";
import './index.css';
import OriginalDrawerHeader from './OriginalDrawerHeader';
import MiniDrawerNoHeader from "./MiniDrawerNoHeader";
import MiniDrawerHeader from "./MiniDrawerHeader";
import MiniDrawerHeaderOverlay from './MiniDrawerHeaderOverlay';
import SimpleOverlay from './SimpleOverlay';
import Home from "./pages/Home";
import MiniDrawerHeaderRounded from './MiniDrawerHeaderRounded';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/header" element={<OriginalDrawerHeader />}/>
                <Route path="/noheader" element={<MiniDrawerNoHeader/>}/>
                <Route path="/miniheader" element={<MiniDrawerHeader/>}/>
                <Route path="/miniheaderoverlay" element={<MiniDrawerHeaderOverlay/>}/>
                <Route path="/miniheaderoverlayrounded" element={<MiniDrawerHeaderRounded/>}/>
                <Route path="/simpleoverlay" element={<SimpleOverlay/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);



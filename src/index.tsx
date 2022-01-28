import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import OriginalDrawerHeader from './OriginalDrawerHeader';
import MiniDrawerNoHeader from "./MiniDrawerNoHeader";
import MiniDrawerHeader from "./MiniDrawerHeader";
import App from "./App";
import MiniDrawerHeaderOverlay from './MiniDrawerHeaderOverlay';
import SimpleOverlay from './SimpleOverlay';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/header" element={<OriginalDrawerHeader />}/>
                <Route path="/noheader" element={<MiniDrawerNoHeader/>}/>
                <Route path="/miniheader" element={<MiniDrawerHeader/>}/>
                <Route path="/miniheaderoverlay" element={<MiniDrawerHeaderOverlay/>}/>
                <Route path="/simpleoverlay" element={<SimpleOverlay/>}/>
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);



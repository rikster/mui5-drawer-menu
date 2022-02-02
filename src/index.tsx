import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {App} from "./App";
import './index.css';

//experimental
import OriginalDrawerHeader from './old/OriginalDrawerHeader';
import MiniDrawerNoHeader from "./old/MiniDrawerNoHeader";
import MiniDrawerHeader from "./old/MiniDrawerHeader";
import MiniDrawerHeaderOverlay from './old/MiniDrawerHeaderOverlay';
import SimpleOverlay from './old/SimpleOverlay';
import MiniDrawerHeaderRounded from './old/MiniDrawerHeaderRounded';

//content
import Home from "./pages/Home";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/header" element={<OriginalDrawerHeader/>}/>
                <Route path="/noheader" element={<MiniDrawerNoHeader/>}/>
                <Route path="/miniheader" element={<MiniDrawerHeader/>}/>
                <Route path="/miniheaderoverlay" element={<MiniDrawerHeaderOverlay/>}/>
                <Route path="/simpleoverlay" element={<SimpleOverlay/>}/>
                <Route path="/" element={<App/>}/>
                {/*todo:refactor routing and and add auth*/}
                <Route path="/miniheaderoverlayrounded" element={<MiniDrawerHeaderRounded/>}>
                    <Route path="home" element={<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);



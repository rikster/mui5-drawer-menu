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
import MiniDrawerHeaderRoundedTitleContent from './old/MiniDrawerHeaderRoundedTitleContent';
import MiniDrawerHeaderRoundedTitleContentTabs from './old/MiniDrawerHeaderRoundedTitleContentTabs';

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
                <Route path="home" element={<Home/>}/>

                {/*todo:refactor routing and and add auth*/}
                <Route path="/miniheaderoverlayroundedtitle"
                       element={<MiniDrawerHeaderRoundedTitleContent/>}>
                </Route>
                <Route path="/miniheaderoverlayroundedtitletabs"
                       element={<MiniDrawerHeaderRoundedTitleContentTabs/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
    ,
    document.getElementById('root')
);



import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  
  return (
        <div className="app-wrapper">
            <Header />
            <Nav state={props.state.sideBar} />
            <Routes>
                <Route path="/profile" element={ <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} store={props.store} />} />  
                <Route path="/dialogs/*" element={ <DialogsContainer state={props.state.messagesPage} dispatch={props.dispatch} store={props.store} />} />
                <Route path="/news" element={<News newsPage={props.state.newsPage} />}/>
                <Route path="/music" element={<Music />}/>
                <Route path="/settings" element={<Settings />}/>          
            </Routes>
        </div>
  );
} 



export default App;


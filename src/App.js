import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';

const App = (props) => {
  
  return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Nav  />       
            {/* state={props.state.sideBar} */}
            <Routes>
                <Route path="/profile/:userId?" element={ <ProfileContainer /> } />
                <Route path="/dialogs" element={ <DialogsContainer />} /> 
                <Route path="/news" element={<News />}/>
                <Route path="/music" element={<Music />}/>
                <Route path="/users" element={<UsersContainer />} />
                <Route path="/settings" element={<Settings />}/>    
                <Route path="/login" element={<LoginPage />}/> 
            </Routes>
        </div>
  );
} 



export default App;


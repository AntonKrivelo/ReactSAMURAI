import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state from './components/redux/state';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { addPost, updateNewPostText, addMessage, updateNewMessageText, subscribe } from './components/redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));
  
export let rerenderEntireTree = (state) => {

  root.render(

    <React.StrictMode>
      <BrowserRouter >
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText} />
      </BrowserRouter>
    </React.StrictMode>

  );
}


rerenderEntireTree(state);

subscribe(rerenderEntireTree);

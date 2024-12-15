import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Signup from './Pages/Signup';
import SelectionScreen from './Pages/SelectionScreen';
import ChatScreen from './Pages/ChatScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<App />} path='/' />
        <Route element={<Signup/>} path='/signup' />
        <Route element={<SelectionScreen/>} path='/select' />
        <Route element={<ChatScreen/>} path='/chat' />
        </Routes>
    </Router>
  </React.StrictMode>
);


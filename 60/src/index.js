import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './index.css';
import App from './App';
import About from './components/About';
import Books from './components/Books';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<App/>} >
             <Route path='/about' element={<About/>}/>
             <Route path='/books' element={<Books/>}/>
          </Route>
       </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


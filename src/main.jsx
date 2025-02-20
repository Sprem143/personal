import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Header from './components/header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(

   
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<App />} />
       
      </Routes>
    </BrowserRouter>
)

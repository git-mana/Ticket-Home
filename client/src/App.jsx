// Import our custom CSS
import './scss/styles.scss'
// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'
import './index.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

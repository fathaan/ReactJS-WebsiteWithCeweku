import React from 'react';
import './App.css';
import GalleryPage from './pages/GalleryPage';
import Home from './pages/Home';
import { BrowserRouter , Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gallery' element={<GalleryPage/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

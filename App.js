import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Addwidget from './Addwidget';
import Addwidget1 from './Addwidget1';
import { useState } from 'react';

function App() {
  const [widgets, setWidgets] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home widgets={widgets} setWidgets={setWidgets} />} />
        <Route path='/addwidget' element={<Addwidget setWidgets={setWidgets} widgets={widgets} />} />
        <Route path='/addwidget1' element={<Addwidget1 setWidgets={setWidgets} widgets={widgets} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;





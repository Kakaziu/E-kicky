import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Index from './components/Index/index';
import RegisterPag from './components/RegisterPag';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/register' element={<RegisterPag/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

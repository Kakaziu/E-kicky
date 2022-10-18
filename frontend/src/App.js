import './App.css';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Index from './components/Index/index';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Index/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

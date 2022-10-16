import './App.css';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
      </div>
    </BrowserRouter>
  );
}

export default App;

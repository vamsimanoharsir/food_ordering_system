import './App.css';
import { Routes, Route } from "react-router-dom"; //BrowserRouter import in index.js
import HomePage from './components/HomePage';
import Ingredients from './components/Ingredients'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        {/* /* matches any route that has /..words.. */}
        <Route path='/*' element={<Ingredients/>}/>
      </Routes>
    </div>
  );
}

export default App;

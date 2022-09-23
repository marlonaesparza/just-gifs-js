import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';


const App = () => {
  return (
    <div id='app-container'>
      <Routes>
        <Route path='/home/*' element={<Home/>} />
      </Routes>
    </div>
  );
};


export default App;

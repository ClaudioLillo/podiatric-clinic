import {Routes, Route} from 'react-router-dom'
import './App.css';

import Navigator from './components/navigator/Navigator'
import Main from './components/main/Main'
import AdminPanel from './components/adminPanel/AdminPanel'

function App() {
  return (
    <div className="App">
      <Navigator/>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/admin" element={<AdminPanel/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;

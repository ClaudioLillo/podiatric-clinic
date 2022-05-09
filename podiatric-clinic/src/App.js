import {Routes, Route} from 'react-router-dom'
import Grid from '@mui/material/Grid'
import './App.css';

import Navigator from './components/navigator/Navigator'
import Main from './components/main/Main'
import AdminPanel from './components/adminPanel/AdminPanel'
import Contact from './components/contact/Contact'
import QA from './components/qa/QA'


function App() {
  return (
    <Grid container>
    <div className="App">
      <Navigator/>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/admin" element={<AdminPanel/>}></Route>
        <Route path="/contacto" element={<Contact/>}></Route>
        <Route path="/preguntas" element={<QA/>}></Route>
      </Routes>
    </div>
    </Grid>
  );
}

export default App;

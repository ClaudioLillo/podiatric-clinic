import {Routes, Route} from 'react-router-dom'
import Grid from '@mui/material/Grid'
import './App.css';

import Navigator from './components/navigator/Navigator'
import Main from './components/main/Main'
import AdminPanel from './components/adminPanel/AdminPanel'
import Contact from './components/contact/Contact'
import QA from './components/qa/QA'
import Profile from './components/profile/Profile'
import Footer from './components/footer/Footer'


function App() {
  return (
    <Grid container>
    <div className="App">
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Navigator/>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/admin" element={<AdminPanel/>}></Route>
          <Route path="/contacto" element={<Contact/>}></Route>
          <Route path="/preguntas" element={<QA/>}></Route>
          <Route path="/about" element={<Profile/>}></Route>
        </Routes>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Footer/>
      </Grid>
    </div>
    </Grid>
  );
}

export default App;

import './App.css';
import React from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import SignIn from './components/signin';
import SignUp from './components/signup';
import  Dashboard  from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App
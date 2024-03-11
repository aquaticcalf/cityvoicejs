import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Signup from './pages/signup'
import Login from './pages/login'
import axios from 'axios'
import Profile from './pages/profile'

function App() {

  const apiurl = 'http://localhost:8000';

  const AuthProtection = ({ children }) => {
    const refresh = localStorage.getItem('refresh_token');
    if(refresh) {
      axios.post(apiurl + '/user/token/verify/', {
        'token': refresh
      })
      .then(function (response) {
        if(response.status!=200) {
          localStorage.clear;
          return <Navigate to={"/login"} />
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    else {
      return <Navigate to={"/login"} />
    }
    return children;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
            <AuthProtection>
              <Home />
            </AuthProtection>
          } />
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
        <Route path='profile/:username' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
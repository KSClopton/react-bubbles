import React, {useState} from 'react'
import { axiosWithAuth } from "../AxiosAuth";
import axios from 'axios'

const initialForm = {username: '', password: ''}
const Login = () => {
  // make a post request to retrieve a token from the api
    const [credentials, setCredentials] = useState(initialForm)
    console.log(credentials)

    const handleChanges = e => {
      const name = e.target.name
      const value = e.target.value

      setCredentials({
        ...credentials,
        [name]: value
      })
      console.log(credentials)
    }

    const handleLogin = e => {
      e.preventDefault()
      
      axiosWithAuth()
      .post('http://localhost:5000/api/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        window.location.assign('/BubblePage')})
      .catch(err => {console.log('Login did not work')})
    }
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleLogin}>
        <input 
        name='username'
        placeholder='Username'
        value={credentials.name}
        onChange={handleChanges}/>
         <input 
        name='password'
        placeholder='Password'
        value={credentials.name}
        onChange={handleChanges}/>
        <button type='submit'>Submit</button>
      </form>

  
    </>
  );
};

export default Login;

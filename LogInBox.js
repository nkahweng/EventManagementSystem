//LogInBox.js
import React from 'react'
import login from './login.module.css'
import {useState} from 'react'

export default function LogInBox(){
    
      //Component to store state
      const [userData, setUserData] = useState({
        Username: '',
        Email: '',
        Password: ''
      })
    
      //handles changes on the input field
      const handleChange = (e) => {
        const {name, value} = e.target
        
        setUserData({...userData, [name]: value})
      }
    
      //handle form submission and sending http request
      const handleSubmit = (e) => {
        e.preventDefault()
        //http code here fetch
      }


    //UI
    return (
        <>
         <div className={login.container}>
            <form onSubmit={handleSubmit}>
                <h2 className={login.words}>Log In now !!!</h2>
                
                <label className={login.words} for='username'>Username:</label><br/>
                  <input type="text" id="username" name="username" onChange={handleChange} value={userData.Username} required></input><br/>

                <label className={login.words} for='email'>Email:</label><br/>
                  <input type="email" id="email" name="email" onChange={handleChange} value={userData.Email} required></input><br/>
        
                <label className={login.words} for='password'>Password:</label><br/>
                  <input type="password" id="password" name="password" onChange={handleChange} value={userData.Password} required></input><br/><br/>

                <button type='submit'>Log In</button>

            </form>
         </div>
        </>
    )
}

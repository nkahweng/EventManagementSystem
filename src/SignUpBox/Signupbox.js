//Signupbox.js
import style from './style.module.css'
import React from 'react'
import {useState} from 'react'



export default function SignUpBox(){
  
  //Component
  const [formData, setFormData] = useState({
    Username: '',
    Email: '',
    Password: ''
  })

  //handles input changes
  const handleChange = (x) => {
    const {name, value} = x.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  //handle form submission and http request
  const handleSubmit = (e) => {
    e.preventDefault()
    //http code here send
  }

  
  return (
    <>
    <div className={style.container}>
      <div className={style.box}>
        <form onSubmit={handleSubmit}>
      
          <h2 className={style.words}>Sign Up now !!!</h2>
      
          <label className={style.words} for='username'>Username:</label>
          <br/><input type="text" id="username" name="username" value={formData.Username} onChange={handleChange} required></input><br/>

          <label className={style.words} for='email'>Email: </label><br/>
          <input type="email" id="email" name="email" value={formData.Email} onChange={handleChange} required></input><br/>
        
          <label className={style.words} for='password'>Password: </label><br/>
          <input type="password" id="password" name="password" value={formData.Password} onChange={handleChange} required></input><br/>

          <p className={style.words}>Password must be at least 9 characters for security purposes, contain at least one digit, and one alphabetic character. By signing up, you agreed to our General Terms</p>
     
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    </div>
    </>
  )
}
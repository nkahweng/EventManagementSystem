import React from 'react'
import StyleNavBar from './StyleNavBar.module.css'

export default function NavBar(){
    const events = 'EVENTS'
    const learn = 'LEARN MORE'
    const help = 'HELP'
    const about = 'ABOUT US'
    
    const login = 'LOGIN'
    const signup = 'SIGNUP'

    return (
        <>
         <div>
          
          <nav className={StyleNavBar.nav}>

            <h2>Events2U</h2>

            <ul style={{ display: 'flex', listStyleType: 'none', padding: 0}}>
                <a href='./Events' style={{marginRight: '20px'}}>{events}</a>
                <a href='./LearnMore' style={{marginRight: '20px'}}>{learn}</a>
                <a href='./Help' style={{marginRight: '20px'}}>{help}</a>
                <a href='./AboutUs' style={{marginRight: '20px'}} >{about}</a>
                <a href='./Login' style={{marginRight: '20px'}} >{login}</a>
                <a href='./Signup' style={{marginRight: '20px'}} >{signup}</a>
            </ul>

          </nav>
         </div>
        </>
    )

    

}
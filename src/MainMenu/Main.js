import React from 'react'
import NavBar from './NavBar'
import Contents from './Contents.js'


export default function MainMenu(){
    return (
        <>
         <div>
          
          <header>
            <NavBar />
          </header> 
          
          <main>
            <section>
               <Contents />
            </section>

            
          </main>
        
         </div>
        </>
    )
}
//Contents.js
import React from 'react'
import ContentsCSS from './Contents.module.css'

export default function Contents(){
    return (
        <>
         <div>
            <aside>
                <ul className={ContentsCSS.ul}>

                    <li><a href='./SPORTS'>Sports</a></li><br/>
                    <li><a href='./ENTERTAINMENTS'>Entertainments</a></li><br/>
                    <li><a href='./EXHIBITIONS'>Exhibitions</a></li><br/>
                    <li><a href='./SEMINARS'>Seminars</a></li><br/>
                    <li><a href='./BUSINESS'>Business</a></li><br/>
                    <li><a href='./TRAVEL'>Travel</a></li><br/>
                    <li><a href='./OTHERS'>Others</a></li><br/>

                </ul>
            </aside> 

                <div className={ContentsCSS.main}>

                    <h1>World's leading online ticketing and event management platform that helps you buy and sell,
                    manage and check-in tickets for your event at ease.</h1>
                   
                    <article className={ContentsCSS.contents_1}>
                    
                     <p className={ContentsCSS.event}>Popular events</p>
                        
                        <div className={ContentsCSS.data_container_wrapper}>
                            
                        
                            <div id='container_1' className={ContentsCSS.dataContainer}></div>
                            <div id='container_2' className={ContentsCSS.dataContainer}></div>
                            <div id='container_3' className={ContentsCSS.dataContainer}></div>
                            <div id='container_4' className={ContentsCSS.dataContainer}></div>
                            <div id='container_5' className={ContentsCSS.dataContainer}></div>
                            <div id='container_6' className={ContentsCSS.dataContainer}></div>
                            <div id='container_7' className={ContentsCSS.dataContainer}></div>
                            <div id='container_8' className={ContentsCSS.dataContainer}></div>
                            <div id='container_9' className={ContentsCSS.dataContainer}></div>
                            
                        
                        </div>
                        
                        <div className={ContentsCSS.button_container}>
                            <button type='button'>See More</button>
                        </div>

                    </article>


                </div>

         </div>
        </>
    )
}
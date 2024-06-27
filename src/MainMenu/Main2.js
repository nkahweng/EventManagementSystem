import React from 'react'
import MainStyle from './Main2.module.css'

export default function Main2(){
    
    const events = 'EVENTS'
    const learn = 'LEARN MORE'
    const help = 'HELP'
    const about = 'ABOUT US'
    
    const login = 'LOGIN'
    const signup = 'SIGNUP'
   
   
    return (
        <>
          <div className={MainStyle.grid_container}>
              <header>
                Events2U
              </header>
        
              <nav>
                <ul style={{ display: 'flex', listStyleType: 'none', padding: 0}}>
                    <a href='./Events' style={{marginRight: '20px'}}>{events}</a>
                    <a href='./LearnMore' style={{marginRight: '20px'}}>{learn}</a>
                    <a href='./Help' style={{marginRight: '20px'}}>{help}</a>
                    <a href='./AboutUs' style={{marginRight: '20px'}} >{about}</a>
                    <a href='./Login' style={{marginRight: '20px'}} >{login}</a>
                    <a href='./Signup' style={{marginRight: '20px'}} >{signup}</a>
                </ul>
              </nav>


              <section className={MainStyle.left}>
                <ul className={MainStyle.sideNav}>

                    <li><a href='./SPORTS'>Sports</a></li><br/>
                    <li><a href='./ENTERTAINMENTS'>Entertainments</a></li><br/>
                    <li><a href='./EXHIBITIONS'>Exhibitions</a></li><br/>
                    <li><a href='./SEMINARS'>Seminars</a></li><br/>
                    <li><a href='./BUSINESS'>Business</a></li><br/>
                    <li><a href='./TRAVEL'>Travel</a></li><br/>
                    <li><a href='./OTHERS'>Others</a></li><br/>

                </ul>
              </section>
        

              <section className={MainStyle.right}>
                
              <h2>World's leading online ticketing and event management platform that helps you buy and sell,
                    manage and check-in tickets for your event at ease.</h2>
                   
                
                <div className={MainStyle.container}>
                  
                  <div className={MainStyle.contents_1}>
                  
                    <p className={MainStyle.event}>Popular events</p>
                
                    <div className={MainStyle.data_container_wrapper}>
                            
                        
                      <a href='./Events1'><div id='container_1' className={MainStyle.data_container}>
                          <p className={MainStyle.dataUP}>Image here</p>
                          <p className={MainStyle.dataDOWN}>Event Name</p><br/>
                          <p className={MainStyle.dataDOWN}>Time: Time</p>
                          <p className={MainStyle.dataDOWN}>Fee: Fee</p>
                      </div></a>

                      <a href='/Events2'><div id='container_2' className={MainStyle.data_container}>
                          <p className={MainStyle.dataUP}>Image here</p>
                          <p className={MainStyle.dataDOWN}>Event Name</p><br/>
                          <p className={MainStyle.dataDOWN}>Time: Time</p>
                          <p className={MainStyle.dataDOWN}>Fee: Fee</p>
                      </div></a>

                      <a href='/Events3'><div id='container_3' className={MainStyle.data_container}>
                          <p className={MainStyle.dataUP}>Image here</p>
                          <p className={MainStyle.dataDOWN}>Event Name</p><br/>
                          <p className={MainStyle.dataDOWN}>Time: Time</p>
                          <p className={MainStyle.dataDOWN}>Fee: Fee</p>
                      </div></a>

                      <a href='/Events4'><div id='container_4' className={MainStyle.data_container}>
                          <p className={MainStyle.dataUP}>Image here</p>
                          <p className={MainStyle.dataDOWN}>Event Name</p><br/>
                          <p className={MainStyle.dataDOWN}>Time: Time</p>
                          <p className={MainStyle.dataDOWN}>Fee: Fee</p>
                      </div></a>
 

                      <a href='/Events5'><div id='container_5' className={MainStyle.data_container}>
                          <p className={MainStyle.dataUP}>Image here</p>
                          <p className={MainStyle.dataDOWN}>Event Name</p><br/>
                          <p className={MainStyle.dataDOWN}>Time: Time</p>
                          <p className={MainStyle.dataDOWN}>Fee: Fee</p>
                      </div></a>
                      
                      <a href='/Events6'><div id='container_6' className={MainStyle.data_container}>
                          <p className={MainStyle.dataUP}>Image here</p>
                          <p className={MainStyle.dataDOWN}>Event Name</p><br/>
                          <p className={MainStyle.dataDOWN}>Time: Time</p>
                          <p className={MainStyle.dataDOWN}>Fee: Fee</p>
                      </div></a>

                      
                    </div>
                    
                    <br/><br/><br/>
                    <div className={MainStyle.button_container}>
                       <button type='button'>See More</button>
                    </div>
                  
                  </div>
                


                  <div className={MainStyle.contents_2}>
                      <p className={MainStyle.c2}>Are you hosting a Concert, Seminar or Sports Event? We can surely help!</p>
                      
                      <div className={MainStyle.c2btn_wrapper}>
                        <button type='button'>Create Event Now</button>
                      </div>

                      <p className={MainStyle.c2}><a href='./ChatWithUs'>Chat with us</a> to help you get started</p>

                  </div>




                  <div className={MainStyle.contents_3}>
                      <p>News, Blog and Updates</p>
                        
                      <div className={MainStyle.c3_flex_container}>
                        <div className={MainStyle.c3_data_container}>
                          
                          <p>News/Blog</p>
                          
                          <ul>
                            
                            <li><a href='./RecentPost'>Recent Post</a></li>
                            <li><a href='./Product'>Product News and Tips</a></li>
                            <li><a href='./EventPlanning'>Event Planning</a></li>
                            <li><a href='./Blog'>Blog</a></li>
                            <li><a href='./Career'>Career</a></li>
                          
                          </ul>
                        
                        </div>
                        
                        <div className={MainStyle.c3_data_container}>
                          <p>Events2U features</p>
                        
                          <ul>
                            
                            <li><a href='./Ticketing'>Ticketing and Registration</a></li>
                            <li><a href='./CheckIn'>Check-in Solutions</a></li>
                            <li><a href='./FacialRecognizing'>Facial Recognition</a></li>
                            <li><a href='./Interactive'>Interactive Systems</a></li>
                            <li><a href='./Solutions'>Management Solutions</a></li>
                          
                          </ul>

                        </div>
                        <div className={MainStyle.c3_data_container}>
                          
                          <p>Updates</p>
                        
                          <ul>
                            
                            <li><a href='./Version'>Version 1.0.0 beta</a></li>
                            
                          </ul>
                        
                        </div>

                      </div>
                
                  </div>



                
                </div>

                
              
              
              
              
              
              
              
              
              
              </section>

              
        
              <footer>
                footer
              </footer>
           </div>
        </>
    )
}
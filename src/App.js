import react,{ useEffect, useRef, useState } from 'react'
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'
import './App.css';

function App() {
  //token: IGQVJWOG9GbERQeVd3RmtpSC1wNS05Ylg3NmdjajA2d0QtT0RfUDRlV2U5a3dfSTlGTWZApODRmbFZAvZA2F3c0ZAKai01VXFxZAUMyUHR6ME5VcV9lQlBHQ2VzWmw3NHhWX1R4YnZA5aW5BTWlkcUxCUmswSQZDZD
  return (
    <section>
    <section className="timer-container">
      <section className="timer">
        <div>
          <span className="mdi mdi-movie-open timer-icon"></span>
            <h2>Icedocs</h2>
            <p>Velkomin á IceDocs ný síða væntanleg - Welcome to Icedocs our new page will be available soon</p>
        </div>
        <div>
          
          <div className="socialmediaicons">
          <a href="https://www.facebook.com/IceDocs" target="_blank" rel="noopener noreferrer">
          <i className="mdi mdi-facebook" />
          </a>
          <a href="https://www.instagram.com/icedocs/" target="_blank" rel="noopener noreferrer">
          <i className="mdi mdi-instagram" />
          </a>
          <a href="https://www.youtube.com/channel/UChGOuLjVj46645fAKx1Equg" target="_blank" rel="noopener noreferrer">
          <i className="mdi mdi-youtube" />
          </a>
        </div>
        <div className="igFeed"> 
          <p>Instagram stemningin:</p>       
          <InstagramFeed token="IGQVJXamtxcGdyVjlzemgwdGJHWi1XQ09kRDQ0T2RJOUIzTjVMRno4R0h2Y1ZABMTJsTHZAFRmlMTnk1NmEzSXhEclNEYnVNNk41b1dVTjVqa2JPb0NqMzZAWMld1WEF1TFFxQTFsQW1FM0l0RWsybF96RQZDZD"  counter="6"/>
        </div>
        </div>
        
        
      </section>
    </section>
    </section>
  );
}

export default App;

import React from "react";
import "./styles.css"
function App(){
    return(
        <div >
            <header id="header">
             <div id="Navbar">
             <span className="navBarTxt"><h3>Riddle</h3></span>  

            <ul className="NavbarElements">
                <li className="elementsUL" > <a href="url" >Home</a> </li>
                <li className="elementsUL"><a href="url" >About</a></li>
                <li className="elementsUL"><a href="url" >Work</a></li>
                <li className="elementsUL"><a href="url" >Contact</a></li>
            </ul>

            <button id="gitButton">Get in touch</button></div>
            
            </header>
            <h1>I'm a freelance <span className="highlightTxt">digital designer </span> ,<br /> with +10 years of experience</h1>
        <footer className="footerElement">
            <h1>Let's work together</h1>
            <button className="footerButton">Get in touch</button>
            <ul className="footerList">
                <li class="flex-items"><a href="url" ><i class="fa-brands fa-instagram"></i></a></li>
                <li class="flex-items"><a href="url" ><i class="fa-brands fa-linkedin"></i> </a></li>
                <li class="flex-items"><a href="url" ><i class="fa-brands fa-twitter"></i></a></li>
                <li class="flex-items"><a href="url" ><i class="fa-brands fa-pinterest"></i></a></li>
                <li class="flex-items"><a href="url" ><i class="fa-brands fa-facebook"></i></a></li>
            </ul>
        </footer>
        </div>
    )
}

export default App;
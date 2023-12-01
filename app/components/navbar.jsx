'use client'

import { useState } from "react"

export default function Navbar (){

    const [view,setView] = useState(false)
    
    function showMenu(){
        setView(!view)
    }

    return(
        <nav>
           {!view &&  <div>
                <h1><a href="/" style={{textDecoration: 'none', color: 'white'}}>&lt;J&gt;</a></h1>
            </div> }

           <ul  onClick={ view ? showMenu : null} className={view ? "nav_items nav_items_menu" : "nav_items"}>
            <li><a href="#seccion-2" >About</a></li>
            <li><a href="#seccion-3" >Skills</a></li>
            <li><a href="#seccion-4">Proyects</a></li>
            <li><a href="#seccion-5">Contacts</a></li>
            
          </ul>

          <div className="menu">
                <img src="/menu.svg" alt="menu for the phone mode" onClick={showMenu}/>
            </div>
        </nav>
    )
}
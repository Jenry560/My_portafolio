'use client'

import Back from "./back";
import React from 'react';
import Typed from 'typed.js';


export default function Portada(){

const el = React.useRef(null);
        


  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Hi my name is Jenry Sanchez', 'Junior-Developer'],
      smartBackspace: true,
      typeSpeed: 75,
      startDelay: 100,
      backDelay: 800,
      backSpeed: 75,
      loop: true,
      loopCount: false,
      showCursor: true,
      cursorChar: '|'
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


 

    return(
        <section >
            <div className="container" >
               
                <div id="seccion-1" className= 'seccion portada ' >
               
                <img className="image" src="/img/moji.png" alt="picture for the title" />
                <div className="portada_title">
                    <h1><span ref={el}></span></h1>
                    <p>Full-Stack Developer</p>
                </div>
                </div>
                <Back/>
            </div>
            
        </section>
    )
}
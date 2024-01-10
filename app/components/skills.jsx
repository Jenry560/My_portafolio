'use client'

import { useScroll } from "./hooks/scrooll"


export default function Skills (){
      
    const {visibleSections} = useScroll()
    
    return(
       
        <section className="seccion" id="seccion-3">
            <div className="container">
                
                <div className="skills">
                <h1>Skills</h1>
                <div className="iconos">
                    
                    <div>
                    <img src="/icon/bootstrap.svg" alt="bootstrap" className={visibleSections.includes("seccion-3") ? "icon active " : "icon" }  />
                    <p>Bootstrap</p>
                    </div>  

                    <div>     
                    <img src="/icon/css.svg" alt="css"  className={visibleSections.includes("seccion-3") ? "icon active " : "icon" }  />
                    <p>CSS</p>
                    </div>    

                    <div>     
                    <img src="/icon/git.svg" alt="git" className={visibleSections.includes("seccion-3") ? "icon active " : "icon" }  />
                    <p>GIT</p>
                    </div>  

                    <div>     
                    <img src="/icon/html.svg" alt="HTMLs" className={visibleSections.includes("seccion-3") ? "icon active " : "icon" }  />
                    <p>Html</p>
                    </div>  

                    <div>     
                    <img src="/icon/js.svg" alt="Javascript" className={visibleSections.includes("seccion-3") ? "icon active " : "icon" }  />
                    <p>Javascript</p>
                    </div>  
                    
                    <div>     
                    <img src="/icon/mongo.svg" alt="mongo" className={visibleSections.includes("seccion-3") ? "icon active " : "icon" }  />
                    <p>MongoDB</p>
                    </div>  
                   
                  
                    <div>     
                    <img src="/icon/next.svg" alt="Next" className={visibleSections.includes("seccion-3") ? "icon active " : "icon" }   style={{background: "white"}}/>
                    <p>Next js</p>
                    </div>  
                   
                    <div>     
                    <img src="/icon/node.svg" alt="Node" className={visibleSections.includes("seccion-3") ? "icon active " : "icon" }  />
                    <p>Node js</p>
                    </div>  
                   
                    <div>     
                    <img src="/icon/python.svg" alt="Python" className={visibleSections.includes("seccion-3") ? "icon active " : "icon" }  />
                    <p>Python</p>
                    </div>  
                 
                    <div>     
                    <img src="/icon/react.svg" alt="React" className={visibleSections.includes("seccion-3") ? "icon active " : "icon" }  />
                    <p>React js</p>
                    </div>  
     
                    <div>     
                    <img src="/icon/sass.svg" alt="sass" className={visibleSections.includes("seccion-3") ? "icon active " : "icon" }  />
                    <p>Sass</p>
                    </div> 

                    <div>     
                    <img src="/icon/sql.svg" alt="SQL" className={visibleSections.includes("seccion-3") ? "icon active " : "icon" }  /> 
                    <p>MySQL</p>
                    </div> 

                    <div>     
                    <img src="/icon/sharp.svg" alt="SQL" className={visibleSections.includes("seccion-3") ? "icon active " : "icon" }  /> 
                    <p>C#</p>
                    </div> 

         
                </div>
                </div>
            </div>
        </section>
    )
}
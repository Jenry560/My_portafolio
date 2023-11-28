'use client'

import { CiShare1 } from "react-icons/ci";
import { useScroll } from "./hooks/scrooll";


export default function Proyects(){
    
    const {visibleSections} = useScroll()

    return(
        <section className="seccion" id="seccion-4">
            <div className="container">
                <h2 className="title_proyect">Proyects</h2>
                <div className="proyect">
                    
                <div  className={visibleSections.includes('seccion-4') ? "proyect-item active" : "proyect-item"} >
                         <h1>App fit abs</h1>
                         <img src="/img/mac2.png" alt="macbook prop abs" className="image1"/>
                        <div className="tech">

                        <div className="icon_container">
                           <img src="/icon/node.svg" alt="Node" className='icon_pro'/>
                           <p>Node js</p>
                         </div>

                         <div className="icon_container" style={{width: "70px"}}>
                           <img src="/icon/mongo.svg" alt="Node" className='icon_pro' style={{width: "15px"}} />
                           <p>MongoDB</p>
                         </div>

                         <div className="icon_container">
                           <img src="/icon/react.svg" alt="Node" className='icon_pro'/>
                           <p>React js</p>
                         </div>
                         
                         <div className="icon_container">
                           <img src="/icon/tai.svg" alt="Node" className='icon_pro'/>
                           <p>Tailwind</p>
                         </div>

                         <div className="icon_container">
                           <img src="/icon/css.svg" alt="Node" className='icon_pro'/>
                           <p>css</p>
                         </div>
                        </div>

                       <div style={{display: "flex",justifyContent: "center", alignItems: 'center'}}>
                         <p className="p_pro">5 minute abs routine app with record and competitors.</p> 
                         <a href="https://abdominalesrutina.netlify.app" target="_blank"><CiShare1 className="react_icon"/></a>
                       </div>
            </div>






            <div className={visibleSections.includes('seccion-4') ? "proyect-item active" : "proyect-item"}>
                         <h1>Calories nutrition page</h1>
                         <img src="/img/calories.png" alt='Calories nutrition page' className="image1"/>
                        <div className="tech">

                        <div className="icon_container">
                           <img src="/icon/bootstrap.svg" alt="Node" className='icon_pro' style={{width: "15px"}}/>
                           <p>Boostrap</p>
                         </div>

                         <div className="icon_container">
                           <img src="/icon/react.svg" alt="Node" className='icon_pro'/>
                           <p>React js</p>
                         </div>
                         

                         <div className="icon_container">
                           <img src="/icon/css.svg" alt="Node" className='icon_pro'/>
                           <p>css</p>
                         </div>
                        </div>

                       <div style={{display: "flex",justifyContent: "center", alignItems: 'center'}}>
                         <p className="p_pro">App that gives y the nutritional information and recipes for the foods you want</p> 
                         <a href="https://healthycalories.netlify.app" target="_blank"><CiShare1 className="react_icon"/></a>
                       </div>
             </div>



             <div className={visibleSections.includes('seccion-4') ? "proyect-item active" : "proyect-item"}>
                         <h1 style={{marginBottom: "30px"}}>Smartphone store Website</h1>
                         <img src="/img/tienda.png" alt="macbook prop abs" className="image1" />
                        <div className="tech">

                         <div className="icon_container">
                           <img src="/icon/react.svg" alt="Node" className='icon_pro'/>
                           <p>React js</p>
                         </div>
                     
                         <div className="icon_container">
                           <img src="/icon/css.svg" alt="Node" className='icon_pro'/>
                           <p>css</p>
                         </div>
                        </div>

                       <div style={{display: "flex",justifyContent: "center", alignItems: 'center'}}>
                         <p className="p_pro">Online basic store of shoes like a shein clone.</p> 
                         <a href="https://phonestoregoogle.netlify.app" target="_blank"><CiShare1 className="react_icon"/></a>
                       </div>
            </div>

            <div className={visibleSections.includes('seccion-4') ? "proyect-item active" : "proyect-item"}>
                         <h1>Finance Landing Page</h1>
                         <img src="/img/finance.png" alt="macbook prop abs" className="image1"/>
                        <div className="tech">

                        <div className="icon_container" style={{width: "68px"}}>
                           <img src="/icon/js.svg" alt="Node" className='icon_pro' style={{width: "15px"}}/>
                           <p>Javascript</p>
                         </div>

                       

                         <div className="icon_container">
                           <img src="/icon/html.svg" alt="Node" className='icon_pro' style={{width: "15px"}}/>
                           <p>Html</p>
                         </div>
                         

                         <div className="icon_container">
                           <img src="/icon/css.svg" alt="Node" className='icon_pro'/>
                           <p>css</p>
                         </div>
                        </div>

                       <div style={{display: "flex",justifyContent: "center", alignItems: 'center'}}>
                         <p className="p_pro">Basic landing page of how to manage your finances</p> 
                         <a href=" https://manageyourfinace.netlify.app" target="_blank"><CiShare1 className="react_icon"/></a>
                       </div>
            </div>

            
            <div className={visibleSections.includes('seccion-4') ? "proyect-item active" : "proyect-item"}>
                         <h1>Accounting App</h1>
                         <img src="/img/contable.png" alt="macbook prop abs" className="image1"/>
                        <div className="tech">

                        <div className="icon_container">
                           <img src="/icon/node.svg" alt="Node" className='icon_pro'/>
                           <p>Node js</p>
                         </div>

                         <div className="icon_container" style={{width: "70px"}}>
                           <img src="/icon/mongo.svg" alt="Node" className='icon_pro' style={{width: "15px"}} />
                           <p>MongoDB</p>
                         </div>

                         <div className="icon_container">
                           <img src="/icon/react.svg" alt="Node" className='icon_pro'/>
                           <p>React js</p>
                         </div>
                         
                         <div className="icon_container">
                           <img src="/icon/bootstrap.svg" alt="Node" className='icon_pro' style={{width: "14px"}}/>
                           <p>Boostrap</p>
                         </div>

                         <div className="icon_container">
                           <img src="/icon/css.svg" alt="Node" className='icon_pro'/>
                           <p>css</p>
                         </div>
                        </div>

                       <div style={{display: "flex",justifyContent: "center", alignItems: 'center'}}>
                         <p className="p_pro">Manage the accounting of a company by recording such as income and expenses.</p> 
                         <a href="https://appcontable.netlify.app" target="_blank"><CiShare1 className="react_icon"/></a>
                       </div>
            </div>


            </div>
            </div>
            
        </section>
    )
}
import About from "./components/about";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Portada from "./components/portada";
import Proyects from "./components/proyecs";
import Skills from "./components/skills";


export default function Home(){
    return(
        <>
       <Navbar/>
       <Portada/>
       <About/>
       <Skills/>
       <Proyects/>
       <Footer/>
       </>
    )
}
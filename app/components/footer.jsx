

export default function Footer(){
    return(<>
     <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#333" fillOpacity="1" d="M0,96L48,85.3C96,75,192,53,288,69.3C384,85,480,139,576,138.7C672,139,768,85,864,58.7C960,32,1056,32,1152,42.7C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
    <section className="seccion" id="seccion-5">
          <footer className="foot" id="footer">
        
        <form className="foot__container container"   action="https://formspree.io/f/xaykdolp" method="POST">
            <h2 className="form__input hp">Contact me</h2>
            <input type="text" className="form__input" placeholder="Name" name="name"/>
            <input type="email" className="form__input" placeholder="Gmail" name="email"/>
            <textarea className="form__input form__input--mensage" placeholder="Menssage" name="message"/>
            <input type="submit" value="Send" className="form__cta"/>
        </form>
       </footer>
    </section>
    </>
    )
}
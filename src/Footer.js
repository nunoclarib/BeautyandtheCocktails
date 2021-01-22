import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="ftco-footer ftco-bg-dark ftco-section">
  <div className="container">
    <div className="row mb-5">
      <div className="col-md">
        <div className="ftco-footer-widget mb-4">
          <h2 className="ftco-heading-2">Beauty and the Cocktails</h2>
          <p>O site que combina as duas melhores coisas da vida, <b>maquilhagem</b> e <b>cocktails!</b></p>
        </div>
      </div>
      <div className="col-md">
        <div className="ftco-footer-widget mb-4 ml-5">
          <h2 className="ftco-heading-2">Páginas</h2>
          <ul className="list-unstyled">
            <li><a href="/" className="py-2 d-block" style={{color:'white'}}>Home</a></li>
            <li><a href="/Makeup" className="py-2 d-block" style={{color:'white'}}>Make-up</a></li>
            <li><a href="/Cocktails" className="py-2 d-block" style={{color:'white'}}>Cocktails</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md">
        <div className="ftco-footer-widget mb-4">
          <h2 className="ftco-heading-2">Sobre</h2>
          <ul className="list-unstyled">
            <li><a className="py-2 d-block" style={{color:'white'}}>Universidade de Aveiro, DeCA</a></li>
            <li><a className="py-2 d-block" style={{color:'white'}}>Novas Teconologias da Comunicação</a></li>
            <li><a className="py-2 d-block" style={{color:'white'}}>Laboratório de Multimédia 5</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md">
        <div className="ftco-footer-widget mb-4">
          <ul className="ftco-footer-social list-unstyled float-md-left float-lft">
            <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
            <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
            <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
          </ul>
        </div>
      </div>
    </div>
    
    
  </div>
</footer>

        </div>
    )
}

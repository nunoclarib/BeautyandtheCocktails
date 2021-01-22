import React from "react";
import './App.css';
import Footer from "./Footer";
import lara from './imgs/lara.jpg';
import nuno from './imgs/nuno.jpg';
import './bootstrap.css'



function Sobre() {
  

  return (
<div>
      <section>
        <div className="hero-wrap" >
          <div className="overlay"/>
          <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
              <div className="col-md-6  text-center" data-scrollax=" properties: { translateY: '70%' }">
                <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><a href="index.html">Home</a></span> <span>About</span></p>
                <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Sobre nós</h1>
              </div>
            </div>
          </div>
        </div>
        </section>

        
        <section  style={{marginTop: '700px'}}>
        <div className="ftco-section ">
          <div className="container ">
            <div className="row justify-content-center mb-5 pb-5">
              <div className="col-md-7 text-center heading-section ">
                <h2 className="mb-4 mt-5">A nossa equipa</h2>
                <p>Tal como Beauty and the Cocktails, esta é combinação perfeita <svg xmlns="http://www.w3.org/2000/svg" style={{color:'#D9899E'}} width="16" height="16" fill="currentColor" class="bi bi-emoji-heart-eyes" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z"/>
    </svg></p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-5 ">
                <div className="block-10">
                  <div className="person-info mb-2">
                    <span className="name text-center"><b>Nuno Ribeiro</b></span>
                    <span className="position text-center">Aluno de NTC</span>
                  </div>
                  <div style={{margin:'auto', textAlign:'center'}}>
                  <img src={nuno} alt="" className="img-fluid mb-3 sobre" /></div>
                </div>
              </div>
              <div className="col-md-6 mb-5 ">
                <div className="block-10">
                  <div className="person-info mb-2">
                    <span className="name text-center"><b>Lara Gonçalves</b></span>
                    <span className="position text-center">Aluna de NTC</span>
                  </div>
                  <div style={{margin:'auto', textAlign:'center'}}>
                  <img src={lara} alt="" className="img-fluid mb-3 sobre" /></div>
                </div>
              </div>
             
              
            </div>
            </div>
        </div>
        </section>
    <Footer/>    
</div>

  );
}

export default Sobre;

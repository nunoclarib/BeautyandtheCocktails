import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";


import './App.css';

import { signIn } from "./actions";
import { signOut } from "./actions";

import Footer from "./Footer";
import Random from "./Random";

import block from "./imgs/block.png"
import titulo from "./imgs/titulo.png"


function App() {
  const isLogged = useSelector((state) => state);

  const dispatch = useDispatch();

  console.log(isLogged);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const scrollDown = () =>{
    window.scrollTo(0, 680)
  }

  return (
<div>
  <section>
      <div className="hero-wrap">
        <div className="overlay"/>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center padrao" data-scrollax-parent="true">
            <div
              className="col-md-6 text-center"
              data-scrollax=" properties: { translateY: '70%' }"
            >
              <h1
                className="mb-1"
                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
              >
                Bem-vindo
              </h1>
              

              <img src={titulo} width='600px' className='mb-5'></img>
              <br/>
              <p style={{color:"white"}}>Neste site vais descobrir a melhor combinação de sempre!</p>
              <p style={{color:"white"}}>Descobre em baixo como funciona.</p>
            </div>
          </div>
          <div
            className="row no-gutters slider-text align-items-center justify-content-center padrao"
            data-scrollax-parent="true"
          >
            <div
              className="col-md-12 text-center"
              data-scrollax=" properties: { translateY: '70%' }"
            ></div>
            
            <h2
              className="mb-4"
              data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
            >
              <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }" onClick={() => scrollDown()} className="text-center" style={{marginTop:'18rem'}}>
                <a
                  className="dotarrow"
                >
                  <i class="arrow down"></i>
                </a>
              </p>
              {/*isLogged ? (
                <div >Estás loggado, bem-vindo!</div>
              ) : (
                <div className='aviso'>Ainda não fizeste o teu login!</div>
              )*/}
            </h2>
            {/*Experimentar dispatch das actions
     
            <button onClick={()=> dispatch(signIn())}>Login</button>
            <button onClick={()=> dispatch(signOut())}>Logout</button>*/}
          
           
          </div>
        </div>
      </div>  
  </section>

  

  <section className="" style={{marginTop: '700px'}}>

  <div className="ftco-section pb-0">
          <div className="container ">
            <div className="row justify-content-center mb-5 pb-2">
              <div className="col-md-7 text-center heading-section ">
                <h2 className="mb-4">Como funciona?</h2>
                <p>Após fazeres o teu registo / login no nosso site, segue os passos para encontrares a tua maquilhagem perfeita.</p>
                <p>Boa sorte!</p>
              </div>
            </div>
            </div>
            </div>

    {/*<div className="container">
      <div className="row">
        <div className="col-md-12">
        <h1>Escolhe o teu Cocktail preferido</h1>
        <span className="dot"><img src={img} className='dot'></img></span>
        <a className="btn btn-primary px-5 py-3">Gerar Maquilhagem</a>
  
        <span className="dot"><img src={img} className='dot'></img></span>
        <span className="dot"><img src={img} className='dot'></img></span>
        <span className="dot"><img src={img} className='dot'></img></span>
        <span className="dot"><img src={img} className='dot'></img></span>
        <span className="dot"><img src={img} className='dot'></img></span>

        </div>
      </div>
          </div>*/}
{isLogged ? (

          <Random/>): (
            <div className='aviso text-center pb-5'><img src={block} width='50px' height='50px'></img> <p className='mt-4'><b>Tens que te registar ou fazer o login primeiro!</b></p></div>)}
    </section>
    <Footer/>    
</div>

  );
}

export default App;

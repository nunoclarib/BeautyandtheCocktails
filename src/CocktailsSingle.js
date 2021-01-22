import React, {useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import './bootstrap.css'

import Footer from "./Footer";


const CocktailsSingle = (props) => {
  useEffect(() => {
    window.scrollTo(0, 680);
  }, []);


    return (
      <div>
     <section>
      <div class="hero-wrap ">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
          <div class="col-md-6  text-center" data-scrollax=" properties: { translateY: '70%' }">
            <p class="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span class="mr-2"><Link to="/">Home</Link></span></p>
            <h1 class="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">{props.location.state.nome}</h1>
            <p
                  class="mb-3 "
                  data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
                >
                 Tipo: {props.location.state.tipo}
                </p>
           
         </div>
        </div>
      </div>
    </div>
    </section>

      <section className="bg-light" style={{ marginTop: "770px" }} id="detail">
        <div className="container">
          <div className="row">
            <div className="col-md-8 pt-5">
              <p className="mt-2 mb-4">
                <Link to={{
                      pathname: `/cocktails`
                    }}>
                  <a href="#" className="btn btn-primary py-2 px-2">
                    {" "}
                    Voltar para trás
                  </a>
                </Link>
              </p>
              <h1 className="mb-3" style={{color:'#D9899E'}}>{props.location.state.nome}</h1>

              <h4 className="mb-3">{props.location.state.tipo}</h4>

              <h5 className="mb-3 mt-5" style={{color:'#D9899E'}}>Ingredientes</h5>

              {(props.location.state.ingredient1 !== "null")? (
                <p>-{props.location.state.ingredient1}</p>
               ):(<div>nao tem</div>)}
               
               {(props.location.state.ingredient2 !== "null")? (
                <p>-{props.location.state.ingredient2}</p>
               ):(<div></div>)}

               {(props.location.state.ingredient3 !== "null")? (
                <p>-{props.location.state.ingredient3}</p>
               ):(<div></div>)}

               {(props.location.state.ingredient4 !== "null")? (
                <p>-{props.location.state.ingredient4}</p>
               ):(<div></div>)}

               {(props.location.state.ingredient5 !== "null")? (
                <p>-{props.location.state.ingredient5}</p>
               ):(<div></div>)}

               {(props.location.state.ingredient6 !== "null")? (
                <p>-{props.location.state.ingredient6}</p>
               ):(<div></div>)}
             
               {(props.location.state.ingredient7 !== "null")? (
                <p>-{props.location.state.ingredient7}</p>
               ):(<div></div>)}
              
              { (props.location.state.description !== "") 
              ? (<div className='mb-5'><h5 className="mb-3 mt-5" style={{color:'#D9899E'}}>Receita</h5><p>{props.location.state.description}</p></div>) 
              : (<div></div>) }
              
              
              
              
            
                  
            </div>{" "}
            {/* .col-md-8 */}
            <div className="col-md-4 sidebar pt-4 mt-4">
              <div className="">
                <p className="text-center">
                  <img
                    src={props.location.state.img}
                    alt=""
                    className="img-fluid dot"  style={{width: "350px", height:"350px"}}
                  />
                </p>
              </div>
              { (props.location.state.description !== "") 
              ? (<div className="sidebar-box ">
              <h3>
                {props.location.state.nome}, {props.location.state.ti}{" "}
              </h3>
              <p>{props.location.state.description} </p>
            </div>) 
              : (<div></div>) }
              

              
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    
);
}
export default CocktailsSingle



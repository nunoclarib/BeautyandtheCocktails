import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const MakeupDetail = (props) => {
  useEffect(() => {
    window.scrollTo(0, 680);
  }, []);

  let cor = props.location.state.colors.split(",");
  //console.log(props.location.state.colors)

  let tag = props.location.state.tags.split(",");
  //console.log(props.location.state.tags)

  return (
    <div>
     <section>
      <div class="hero-wrap ">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
          <div class="col-md-6  text-center" data-scrollax=" properties: { translateY: '70%' }">
            <p class="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span class="mr-2"><Link to="/">Home</Link></span></p>
            <p class="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span class="mr-2"><Link to="/makeupLipsticks">Lipsticks</Link></span></p>
            <h1 class="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">{props.location.state.nome}</h1>
            <p
                  class="mb-3 "
                  data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
                >
                 Marca: {props.location.state.marca}
                </p>
           
         </div>
        </div>
      </div>
    </div>
    </section>

      <section className=" bg-light" style={{ marginTop: "750px" }} id="detail">
        <div className="container">
          <div className="row">
            <div className="col-md-8 pt-5">
              <p className="mt-2 mb-4">
                <Link to={{
                      pathname: `/makeup`
                    }}>
                  <a href="#" className="btn btn-primary py-2 px-2">
                    {" "}
                    Voltar para trás
                  </a>
                </Link>
              </p>
              <h1 className="mb-3">{props.location.state.nome.toUpperCase()}</h1>

              <h4 className="mb-3"> Marca: {props.location.state.marca.toUpperCase()}</h4>
              
              { (props.location.state.description !== "") 
              ? (<p>{props.location.state.description}</p>) 
              : (<div></div>) }
              

              { (props.location.state.colors !== "") 
              ? (<h5 className="mb-3 mt-5">Cores disponíveis:</h5>) 
              : (<h5 className="mb-3 mt-5">Cor única igual à da imagem</h5>) }

              {cor.map((item) => {
                return (
                  <div
                    className="d-inline-block m-1"
                    style={{
                      backgroundColor: `${item}`,
                      width: `30px`,
                      height: `30px`,
                      borderRadius: `20px`,
                    }}
                  ></div>
                );
              })}
              <div className="text-right mt-4">
                <p>
                  <a
                    href={props.location.state.link}
                    target="_blank"
                    className=" btn btn-primary btn-outline-primary py-3 px-5"
                  >
                    Comprar Produto
                  </a>
                </p>
              </div>
            </div>{" "}
            {/* .col-md-8 */}
            <div className="col-md-4 sidebar pt-4">
              <div className="sidebar-box">
                <p className="text-center">
                  <img
                    src={props.location.state.img}
                    alt=""
                    className="img-fluid"
                  />
                </p>
              </div>
              { (props.location.state.description !== "") 
              ? (<div className="sidebar-box ">
              <h3>
                {props.location.state.nome}, {props.location.state.marca}{" "}
              </h3>
              <p>{props.location.state.description} </p>
            </div>) 
              : (<div></div>) }
              
                
              {(props.location.state.tags || props.location.state.category !== "" && null) 
              ? (<div className="sidebar-box ">
              <h3>+ Informações</h3>
              
              <div className="tagcloud">
                {
                (props.location.state.tags ) 
                ? (tag.map((item) => {
                  return (
                    <a className="tag-cloud-link" href="#">
                      {item}
                    </a>
                  );
                })) 
                : (<div></div>)
                }
{ (props.location.state.category ) 
            ? (<a className="tag-cloud-link" href="#">
            {props.location.state.category}
          </a>) 
            : (<div></div>) }
              </div>
            </div>) : (<div></div>)}
          
              
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default MakeupDetail;

import React, { useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import "./bootstrap.css";
import MakeupList from "./MakeupList";


const MakeupProduct = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section>
        <div class="hero-wrap ">
          <div class="overlay"></div>
          <div class="container">
            <div
              class="row no-gutters slider-text align-items-center justify-content-center"
              data-scrollax-parent="true"
            >
              <div
                class="col-md-6  text-center"
                data-scrollax=" properties: { translateY: '70%' }"
              >
                <p
                  class="breadcrumbs"
                  data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
                >
                  <span class="mr-2">
                    <Link to="/">Home</Link>
                  </span>
                </p>
                <h1
                  class="mb-3 bread"
                  data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
                >
                  Maquilhagem
                </h1>
                <p
                  class="mb-3 "
                  data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
                >
                  Escolhe o teu produto.
                </p>
                <div>
                  <Link
                    to={{
                      pathname: `/makeupLipsticks`,
                      state: {
                        produto: `Lipsticks`,
                        produto_api: `lipstick`,
                        description: `Pesquisa pela tua marca favorita de lipsticks.`
                      }
                    }}
                    className="btn btn-primary btn-outline-white px-5 py-3 m-3"
                  >
                    <span>Lipsticks</span>
                  </Link>
                  <Link
                    to={{
                      pathname: `/makeupBlush`,
                      state: {
                        produto: `Blush`,
                        produto_api: `blush`,
                        description: `Pesquisa pela tua marca favorita de blush.`
                      }
                    }}
                    className="btn btn-primary btn-outline-white px-5 py-3 m-3"
                  >
                    <span>Blush</span>
                  </Link>
                  
                  <Link
                    to={{
                      pathname: `/makeupBronzer`,
                      state: {
                        produto: `Bronzer`,
                        produto_api: `bronzer`,
                        description: `Pesquisa pela tua marca favorita de bronzer.`
                      }
                    }}
                    className="btn btn-primary btn-outline-white px-5 py-3 m-3"
                  >
                    <span>Bronzer</span>
                  </Link>
                  
                  
                  <Link
                    to={{
                      pathname: `/makeupEyeliner`,
                      state: {
                        produto: `Eyeliner`,
                        produto_api: `eyeliner`,
                        description: `Pesquisa pela tua marca favorita de eyeliners.`
                      }
                    }}
                    className="btn btn-primary btn-outline-white px-5 py-3 m-3"
                  >
                    <span>Eyeliner</span>
                  </Link>
                  
                  <Link
                    to={{
                      pathname: `/makeupBase`,
                      state: {
                        produto: `Base`,
                        produto_api: `foundation`,
                        description: `Pesquisa pela tua marca favorita de base.`
                      }
                    }}
                    className="btn btn-primary btn-outline-white px-5 py-3 m-3"
                  >
                    <span>Base</span>
                  </Link>
                  
                  <Link
                    to={{
                      pathname: `/makeupLipliner`,
                      state: {
                        produto: `Lip Liners`,
                        produto_api: `lip_liner`,
                        description: `Pesquisa pela tua marca favorita de lip liners.`
                      }
                    }}
                    className="btn btn-primary btn-outline-white px-5 py-3 m-3"
                  >
                    <span>Lip Liner</span>
                  </Link>
                  
                  <Link
                    to={{
                      pathname: `/makeupRimel`,
                      state: {
                        produto: `Rímel`,
                        produto_api: `mascara`,
                        description: `Pesquisa pela tua marca favorita de rímel.`
                      }
                    }}
                    className="btn btn-primary btn-outline-white px-5 py-3 m-3"
                  >
                    <span>Rímel</span>
                  </Link>
                  
                  <Link
                    to={{
                      pathname: `/makeupBrows`,
                      state: {
                        produto: `Sobrancelhas`,
                        produto_api: `eyebrow`,
                        description: `Pesquisa pela tua marca favorita de produtos para sobrancelha.`
                      }
                    }}
                    className="btn btn-primary btn-outline-white px-5 py-3 m-3"
                  >
                    <span>Sobrancelhas</span>
                  </Link>
                  
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-light" style={{ marginTop: "678px" }}>
        <div className="container"></div>
      </section>
    </div>
  );
};

export default MakeupProduct;

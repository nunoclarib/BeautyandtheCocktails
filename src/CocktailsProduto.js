import React, { useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import "./bootstrap.css";
import CocktailsList from "./CocktailsList";

import Footer from "./Footer";

const CocktailsProduct = (props) => {
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
                  Cocktails
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
                      pathname: `/cocktailMargarita`,
                      state: {
                        produto: `Margarita`,
                        produto_api: `margarita`,
                        description: `Pesquisa pela tua Margarita favorita.`
                      }
                    }}
                    className="btn btn-primary btn-outline-white px-5 py-3 m-3"
                  >
                    <span>Margarita</span>
                  </Link>
                  <Link
                    to={{
                      pathname: `/cocktailGin`,
                      state: {
                        produto: `Gin`,
                        produto_api: `gin`,
                        description: `Pesquisa pelo o teu tipo de Gin favorita.`
                      }
                    }}
                    className="btn btn-primary btn-outline-white px-5 py-3 m-3"
                  >
                    <span>Gin</span>
                  </Link>
                  <Link
                    to={{
                      pathname: `/cocktailVodka`,
                      state: {
                        produto: `Vodka`,
                        produto_api: `vodka`,
                        description: `Pesquisa pela teu tipo de Vodka favorita.`
                      }
                    }}
                    className="btn btn-primary btn-outline-white px-5 py-3 m-3"
                  >
                    <span>Vodka</span>
                  </Link>

                  <Link
                    to={{
                      pathname: `/cocktailRum`,
                      state: {
                        produto: `Rum`,
                        produto_api: `rum`,
                        description: `Pesquisa pela teu tipo de Rum favorito.`
                      }
                    }}
                    className="btn btn-primary btn-outline-white px-5 py-3 m-3"
                  >
                    <span>Rum</span>
                  </Link>
                  <Link
                    to={{
                      pathname: `/cocktailTequila`,
                      state: {
                        produto: `Tequila`,
                        produto_api: `tequila`,
                        description: `Pesquisa pela teu tipo de tequila favorito.`
                      }
                    }}
                    className="btn btn-primary btn-outline-white px-5 py-3 m-3"
                  >
                    <span>Tequila</span>
                  </Link>
                  <Link
                    to={{
                      pathname: `/cocktailWine`,
                      state: {
                        produto: `Cocktail de Vinho`,
                        produto_api: `wine`,
                        description: `Pesquisa pela teu tipo de cocktail de vinho favorito.`
                      }
                    }}
                    className="btn btn-primary btn-outline-white px-5 py-3 m-3"
                  >
                    <span>Vinho</span>
                  </Link>
                  <Link
                    to={{
                      pathname: `/cocktailSangria`,
                      state: {
                        produto: `Sangria`,
                        produto_api: `sangria`,
                        description: `Pesquisa pela tua sangria favorita.`
                      }
                    }}
                    className="btn btn-primary btn-outline-white px-5 py-3 m-3"
                  >
                    <span>Sangria</span>
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

export default CocktailsProduct;

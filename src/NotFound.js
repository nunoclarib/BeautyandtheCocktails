import React from 'react'

export default function NotFound() {
    return (
        <section>
      <div className="hero-wrap">
        <div className="overlay"/>
        <div className="container">
          <div
            className="row no-gutters slider-text align-items-center justify-content-center padrao"
            data-scrollax-parent="true"
          >
            <div
              className="col-md-6 text-center"
              data-scrollax=" properties: { translateY: '70%' }"
            >
              <h1
                className="mb-4"
                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
              >
                Página Não Encontrada :(
              </h1>
              <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
                <a
                  href="#"
                  className="btn btn-primary btn-outline-white px-5 py-3"
                >
                  Error 404, NOT FOUND
                </a>
              </p>
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

         
          </div>
        </div>
      </div>  
  </section>
    )
}

import React, {useEffect} from "react";
import { useSelector} from "react-redux";

import Footer from "./Footer";

function App() {
  const isLogged = useSelector((state) => state);

  console.log(isLogged);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
<div>
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
                The best combination
              </h1>
              <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
                <a
                  href="#"
                  className="btn btn-primary btn-outline-white px-5 py-3"
                >
                  Discover your combination
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
            {/* Experimentar dispatch das actions
        */}
            <h2
              className="mb-4"
              data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
            >
              {isLogged ? (
                <div>Estás loggado, bem-vindo!</div>
              ) : (
                <div>Não estás loggado</div>
              )}
            </h2>
            
          </div>
        </div>
      </div>  
  </section>

  <section className=" bg-light" style={{marginTop: '800px'}}>
    <div className="container">
      
      <div className="row">
        <div className="col-md-4 ">
          <div className="blog-entry">
            <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_1.jpg")'}}></a>
            <div className="text p-4 d-block">
              <div className="meta mb-3">
                <div><a href="#">July 12, 2018</a></div>
                <div><a href="#">Admin</a></div>
                <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
              </div>
              <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="blog-entry" data-aos-delay={100}>
            <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_2.jpg")'}}>
            </a>
            <div className="text p-4">
              <div className="meta mb-3">
                <div><a href="#">July 12, 2018</a></div>
                <div><a href="#">Admin</a></div>
                <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
              </div>
              <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="blog-entry" data-aos-delay={200}>
            <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_3.jpg")'}}>
            </a>
            <div className="text p-4">
              <div className="meta mb-3">
                <div><a href="#">July 12, 2018</a></div>
                <div><a href="#">Admin</a></div>
                <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
              </div>
              <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="blog-entry">
            <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_4.jpg")'}}>
            </a>
            <div className="text p-4 d-block">
              <div className="meta mb-3">
                <div><a href="#">July 12, 2018</a></div>
                <div><a href="#">Admin</a></div>
                <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
              </div>
              <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="blog-entry" data-aos-delay={100}>
            <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_5.jpg")'}}>
            </a>
            <div className="text p-4">
              <div className="meta mb-3">
                <div><a href="#">July 12, 2018</a></div>
                <div><a href="#">Admin</a></div>
                <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
              </div>
              <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="blog-entry" data-aos-delay={200}>
            <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_6.jpg")'}}>
            </a>
            <div className="text p-4">
              <div className="meta mb-3">
                <div><a href="#">July 12, 2018</a></div>
                <div><a href="#">Admin</a></div>
                <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
              </div>
              <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
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

export default App;

import React from 'react'
import {Link} from 'react-router-dom';


const CocktailItem = (props) => {

    const { ingredient1,
        ingredient2,
        ingredient3,
        ingredient4,
        ingredient5,
        ingredient6,
        ingredient7,
     tipo, nome, description, alcoholic, img, id} = props

    return (
            <div className="col-md-4 text-center">
          <div className="blog-entry">

          <Link to={{pathname:`/cocktail/${id}`,
             state: {
               img:`${img}`,
               nome:`${nome}`,
               tipo:`${tipo}`,
               alcoholic:`${alcoholic}`,
              ingredient1:`${ingredient1}`,
              ingredient2:`${ingredient2}`,
              ingredient3:`${ingredient3}`,
              ingredient4:`${ingredient4}`,
              ingredient5:`${ingredient5}`,
              ingredient6:`${ingredient6}`,
              ingredient7:`${ingredient7}`,
              description:`${description}`,
             }}  } >
            <a href="" className="block-20">
                <img src={img} width="390px" className="mx-auto"/>
            </a>
         </Link>  

            <div className="text p-4 d-block">
              <div className="meta mb-3 text-left">

      
            

         
            <h1 className="heading" style={{color:'#D9899E'}}><b>{nome}</b></h1>
            <p><svg xmlns="http://www.w3.org/2000/svg" style={{color:'#D9899E'}} width='15px' height='15px' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cocktail" class="svg-inline--fa fa-cocktail fa-w-18" role="img" viewBox="0 0 576 512"><path fill="currentColor" d="M296 464h-56V338.78l168.74-168.73c15.52-15.52 4.53-42.05-17.42-42.05H24.68c-21.95 0-32.94 26.53-17.42 42.05L176 338.78V464h-56c-22.09 0-40 17.91-40 40 0 4.42 3.58 8 8 8h240c4.42 0 8-3.58 8-8 0-22.09-17.91-40-40-40zM432 0c-62.61 0-115.35 40.2-135.18 96h52.54c16.65-28.55 47.27-48 82.64-48 52.93 0 96 43.06 96 96s-43.07 96-96 96c-14.04 0-27.29-3.2-39.32-8.64l-35.26 35.26C379.23 279.92 404.59 288 432 288c79.53 0 144-64.47 144-144S511.53 0 432 0z"/></svg>
            <span> </span>{alcoholic}</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" style={{color:'#D9899E'}} width='15px' height='15px' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="glass-cheers" class="svg-inline--fa fa-glass-cheers fa-w-20" role="img" viewBox="0 0 640 512"><path fill="currentColor" d="M639.4 433.6c-8.4-20.4-31.8-30.1-52.2-21.6l-22.1 9.2-38.7-101.9c47.9-35 64.8-100.3 34.5-152.8L474.3 16c-8-13.9-25.1-19.7-40-13.6L320 49.8 205.7 2.4c-14.9-6.2-32-.3-40 13.6L79.1 166.5C48.9 219 65.7 284.3 113.6 319.2L74.9 421.1l-22.1-9.2c-20.4-8.5-43.7 1.2-52.2 21.6-1.7 4.1.2 8.8 4.3 10.5l162.3 67.4c4.1 1.7 8.7-.2 10.4-4.3 8.4-20.4-1.2-43.8-21.6-52.3l-22.1-9.2L173.3 342c4.4.5 8.8 1.3 13.1 1.3 51.7 0 99.4-33.1 113.4-85.3l20.2-75.4 20.2 75.4c14 52.2 61.7 85.3 113.4 85.3 4.3 0 8.7-.8 13.1-1.3L506 445.6l-22.1 9.2c-20.4 8.5-30.1 31.9-21.6 52.3 1.7 4.1 6.4 6 10.4 4.3L635.1 444c4-1.7 6-6.3 4.3-10.4zM275.9 162.1l-112.1-46.5 36.5-63.4 94.5 39.2-18.9 70.7zm88.2 0l-18.9-70.7 94.5-39.2 36.5 63.4-112.1 46.5z"/></svg>
            <span> </span>{tipo}</p>
            
            
            </div>
            </div>
        </div>
        </div>
    )
}
export default CocktailItem

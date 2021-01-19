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
              <div className="meta mb-3 text-center">

      
            

         
            <h1 className="heading">{nome}</h1>
            <h4>{alcoholic}</h4>
            <h6>Tipo: {tipo}</h6>
            <p>{ingredient1}</p>
            <p> {ingredient2} </p>
            <p>  {ingredient3}</p>
            <p> {ingredient4} </p>
            <p> {ingredient5} </p>
            <p> {ingredient6}</p>
            <p> {ingredient7}</p>
            <p> {description}</p>
            
            </div>
            </div>
        </div>
        </div>
    )
}
export default CocktailItem

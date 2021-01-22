import React from 'react'
import CocktailItem from './CocktailItem'
import uuidv4 from 'uuid/dist/v4'

const CocktailsList = (props) => {
    
    let cocktails_data = [props.Cocktails]
    
    console.log(cocktails_data[0].length)

    let pesquisa = props.Pesquisa

    console.log(pesquisa)



    if (cocktails_data[0].length !== 0){
     var filteredCocktails = cocktails_data[0].filter((cocktail) => {
        
        let cocktails = cocktail.strDrink.toLowerCase()

        return cocktails.includes(pesquisa) 
        
 });
 }

    
    
    return (
        <div>
           {cocktails_data[0].length !== 0  ?
                            (<div className="row">
                                <br/>
                                {filteredCocktails.map((cocktails) => 
                                    <CocktailItem id={cocktails.idDrink} img={cocktails.strDrinkThumb} alcoholic={cocktails.strAlcoholic} tipo={cocktails.strCategory} 
                                    nome={cocktails.strDrink} description={cocktails.strInstructions}  
                                    ingredient1={cocktails.strIngredient1}
                                    ingredient2={cocktails.strIngredient2}
                                    ingredient3={cocktails.strIngredient3}
                                    ingredient4={cocktails.strIngredient4}
                                    ingredient5={cocktails.strIngredient5}
                                    ingredient6={cocktails.strIngredient6}
                                    ingredient7={cocktails.strIngredient7}
                                     />
                            
                                )}
                            </div>) :
                            (<div className="row text-center mb-5">
                            <div className="col-md-12 ">
                            <div className="blog-entry">
                            <div className='' style={{ margin:'auto'}} class="loader"></div>
                            </div>
                            </div>
                            </div>)
                            }
        </div>
    )
}
export default CocktailsList

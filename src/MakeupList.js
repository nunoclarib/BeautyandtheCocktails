import React from 'react'
import MakeupItem from './MakeupItem'

const MakeupList = (props) => {
    
    let makeup_data = [...props.Listar] 
    
    let pesquisa = props.Search

    console.log(makeup_data);
    
    console.log(pesquisa);
 
    var filteredMakeup
    filteredMakeup = makeup_data.filter((makeup) => {
            
        console.log(makeup.brand)

        if(makeup.brand !== null){
            return makeup.brand.includes(pesquisa)
        }
            
    });
        

    return (
        <div>
        { 
        makeup_data.length && pesquisa !== 0  ?
                            (<div className="row">{filteredMakeup.map((makeup) => 
                
                                    <MakeupItem key = {makeup.id} id={makeup.id} img={makeup.api_featured_image} marca={makeup.brand} tipo={makeup.product_type} 
                                    nome={makeup.name} price={makeup.price} description={makeup.description} link={makeup.product_link}
                                    price_sign={makeup.price_sign} category={makeup.category} tags={makeup.tag_list}
                                    colors={makeup.product_colors}
                                    />
                            
                                )}
                            </div>) :
                            (<div className="row text-center mb-5">
                            <div className="col-md-12 ">
                            <div className="blog-entry">
                              
                            <h3>Loading...</h3>

                            </div>
                          </div>
                        </div>)
                             }
        </div>
    )
}
export default MakeupList

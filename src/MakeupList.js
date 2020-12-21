import React from 'react'
import MakeupItem from './MakeupItem'
import uuidv4 from 'uuid/dist/v4'

const MakeupList = (props) => {
    
    let makeup_data = [...props.Listar] 
    // clone: filter, find and findIndex are all functions applicable on array. 
    //You data seems to be an array, but are cloning it to an object. You would clone it like var arrTexts = [...this.state.arrTexts]
    
    console.log(makeup_data);

    let pesquisa = props.Search

    //console.log(makeup_data)

    let filteredMakeup = makeup_data.filter((makeup) => {
        return makeup.brand.includes(pesquisa) // ou .indexOf(valuePesquisa) !== -1
    });
    
    return (
        <div>
           { makeup_data.length !== 0  ?
                            (<div>
                                <br/>
                                {filteredMakeup.map((makeup) => 
                
                                    <MakeupItem key={uuidv4()} img={makeup.api_featured_image} marca={makeup.brand} tipo={makeup.product_type} 
                                    nome={makeup.name} price={makeup.price} description={makeup.description} link={makeup.product_link}/>
                            
                                )}
                            </div>) :
                            (<div>
                                <p>Loading</p>
                            </div>)
                            }
        </div>
    )
}
export default MakeupList

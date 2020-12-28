import React from 'react'

const MakeupItem = (props) => {

    const {img, marca, tipo, nome, price, description, link} = props

    return (
        <div>
            <img src={img}/>
            <p>Marca: {marca}</p>
            <p>Tipo: {tipo}</p>
            <p>Produto: {nome}</p>
            <p>Preço: {price} $</p>
            <p>{description}</p>
            <p><a href={link}>Link do Produto</a></p>
        </div>
    )
}
export default MakeupItem

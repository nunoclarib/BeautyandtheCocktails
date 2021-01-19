import React from "react";
import { Link } from "react-router-dom";

const MakeupItem = (props) => {
  const {
    img,
    marca,
    tipo,
    nome,
    price,
    description,
    link,
    id,
    price_sign,
    category,
    tags,
    colors,
  } = props;

  return (
    <div className="col-md-4 ">
      <div className="blog-entry">
        <Link
          to={{
            pathname: `/makeup/${id}`,
            state: {
              nome: `${nome}`,
              img: `${img}`,
              tipo: `${tipo}`,
              description: `${description}`,
              link: `${link}`,
              marca: `${marca}`,
              price_s: `${price_sign}`,
              category: `${category}`,
              tags: `${tags.map((item) => {
                return item;
              })}`,
              colors: `${colors.map((item) => {
                return item.hex_value;
              })}`,
            },
          }}
        >
          <a href="" className="block-20">
            <img src={img} width="350px" className="mx-auto" />
          </a>
        </Link>
        <div className="text p-4 d-block">
          <div className="meta mb-3 text-center"></div>
          <h4 className="heading">{nome}</h4>
          <h6>
            Preço: {price} {price_sign}
          </h6>
          <h6>Marca: {marca}</h6>
        </div>
      </div>
    </div>
  );
};
export default MakeupItem;

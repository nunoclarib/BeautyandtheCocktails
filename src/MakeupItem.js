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
          <a href="" className="">
            <img src={img} width="350px" height="350px" className="mx-auto" />
          </a>
        </Link>
        <div className="text p-4 d-block">
          <div className="meta mb-3 text-center"></div>
          <h4 className="" style={{color:'#D9899E'}}><b>{nome}</b></h4>
          <h6>
          <svg xmlns="http://www.w3.org/2000/svg" style={{color:'#D9899E'}} width='15px' height='15px' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dollar-sign" class="svg-inline--fa fa-dollar-sign fa-w-9" role="img" viewBox="0 0 288 512"><path fill="currentColor" d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"/></svg> {price} {price_sign}
          </h6>
          <h6><svg xmlns="http://www.w3.org/2000/svg" style={{color:'#D9899E'}} width='15px' height='15px' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tags" class="svg-inline--fa fa-tags fa-w-20" role="img" viewBox="0 0 640 512"><path fill="currentColor" d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z"/></svg> {marca}</h6>
        </div>
      </div>
    </div>
  );
};
export default MakeupItem;

import React from "react";
import { useGlobal } from "../context";
import { Link } from "react-router-dom";

const Cocktail = ({ id, name, alcohol, glass, img, ingredient }) => {
  let { data } = useGlobal();
  return (
    <>
      <div class='card mb-5 shadow-lg'>
        <img
          src={img}
          alt='Drink image'
          class='card-img-top bg-image hover-zoom'
        />
        <div class='card-body'>
          <div>
            <h3 className='fw-bold'>{name}</h3>
          </div>
          <p className='fw-bold mb-2'>{glass}</p>
          <p className='fw-lighter text-muted mt-0 mb-1'>{alcohol}</p>
          <Link to='/' className='btn btn-success mt-0 p-1 py-0'>
            D E T A I L S
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cocktail;

import React from "react";
import { Link, useParams } from "react-router-dom";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  let { id } = useParams();
  console.log(id);
  return (
    <>
      <div className='container'>
        <Link className='btn btn-success' to='/'>
          Back Home
        </Link>
      </div>
    </>
  );
};

export default SingleCocktail;

import React from "react";
import Cocktail from "./cocktail";
import { useGlobal } from "../context";

const CocktailList = () => {
  let { data } = useGlobal();
  return (
    <>
      <div className='row'>
        <div className='col-12 col-md-6  '>
          {data.map((item) => {
            return <Cocktail {...item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default CocktailList;

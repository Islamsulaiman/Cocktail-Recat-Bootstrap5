import React from "react";
import Cocktail from "./cocktail";
import { useGlobal } from "../context";

const CocktailList = () => {
  let { data } = useGlobal();
  return (
    <>
      <div className='row'>
        {data.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </>
  );
};

export default CocktailList;

import React from "react";

import Search from "../components/search";
import CocktailList from "../components/cocktailList";

const Home = () => {
  return (
    <>
      <div className='d-flex justify-content-center '>
        <Search />
        <CocktailList />
      </div>
    </>
  );
};

export default Home;

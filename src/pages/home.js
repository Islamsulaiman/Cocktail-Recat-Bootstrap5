import React from "react";

import Search from "../components/search";
import CocktailList from "../components/cocktailList";

const Home = () => {
  return (
    <>
      <div className='container'>
        <div className='d-flex justify-content-center'>
          <Search />
        </div>
        <div className='d-flex justify-content-center'>
          <CocktailList />
        </div>
      </div>
    </>
  );
};

export default Home;

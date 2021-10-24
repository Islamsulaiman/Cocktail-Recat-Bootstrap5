import React from "react";

const Search = () => {
  return (
    <>
      <div className='card w-25 text-center m-5 shadow'>
        <div className='card-body'>
          <form>
            <div class='mb-3 '>
              <label for='inputText' class='form-label fw-bold text-success'>
                Search Your Favorite Cocktail
              </label>
              <input
                type='text'
                class='form-control'
                placeholder='Search for ...'
                id='inputText'
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Search;

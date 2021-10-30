import React, { useRef, useEffect } from "react";
import { useGlobal } from "../context";

const Search = () => {
  let { setSearchTerm } = useGlobal();

  let reference = useRef();

  useEffect(() => {
    reference.current.focus();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <div className='card w-50 text-center m-5 shadow'>
        <div className='card-body'>
          <form>
            <div className='mb-3 '>
              <label
                htmlFor='inputText'
                className='form-label fw-bold text-success d-flex justify-content-start'
              >
                Search Your Favorite Cocktail
              </label>
              <input
                ref={reference}
                type='text'
                className='form-control'
                placeholder='Search for ...'
                id='inputText'
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Search;

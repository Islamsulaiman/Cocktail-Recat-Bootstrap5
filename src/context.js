import React from "react";
import { useEffect, useContext, useState, useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

let AppContext = React.createContext();

const AppProvider = ({ children }) => {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [searchTerm, setSearchTerm] = useState("a");

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      let response = await fetch(`${url}${searchTerm}`);
      let resJson = await response.json();

      let { drinks } = resJson;
      if (drinks) {
        let newCoc = drinks
          .filter((item) => {
            if (item.strAlcoholic === "Alcoholic") {
              return false; // skip alcoholic drinks
            }
            return true;
          })
          .map((item) => {
            let {
              idDrink,
              strDrink,
              strAlcoholic,
              strGlass,
              strDrinkThumb,
              strIngredient,
            } = item;
            return {
              id: idDrink,
              name: strDrink,
              alcohol: strAlcoholic,
              glass: strGlass,
              img: strDrinkThumb,
              ingredient: strIngredient,
            };
          });
        setData(newCoc);
      } else {
        setData([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchData();
  }, [searchTerm, fetchData]);

  return (
    <AppContext.Provider value={{ loading, searchTerm, setSearchTerm, data }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(AppContext);
};

export { AppProvider };

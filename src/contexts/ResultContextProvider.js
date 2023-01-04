import React, { createContext, useState } from "react";

export const ResultContext = createContext();

export const ResultContextProvider = (props) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Croatia");

  const getResults = async (type, isImagesSearch) => {
    setIsLoading(true);

    let response;
    if (isImagesSearch) {
      response = await fetch(`${process.env.REACT_APP_IMAGES_URL}${type}`, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "google-search72.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_IMAGES_API_KEY,
        },
      });
    } else {
      response = await fetch(`${process.env.REACT_APP_BASE_URL}${type}`, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "google-search3.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_COOLGGLE_API_KEY,
        },
      });
    }
    const data = await response.json();

    if (isImagesSearch) {
      setResults(data.items);
    }

    if (type.includes("/news") && !isImagesSearch) {
      setResults(data.entries);
    } else if (!isImagesSearch) {
      setResults(data.results);
    }

    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{
        getResults,
        results,
        searchTerm,
        setSearchTerm,
        isLoading,
      }}
    >
      {props.children}
    </ResultContext.Provider>
  );
};

import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${
    import.meta.env.VITE_REACT_APP_API_KEY
  }&query=${queryTerm}`;
  // const url = `https://api.themoviedb.org/3/${apiPath}?api_key=eb7246d7d6001ed1885b82f6e88f8772&query=${queryTerm}`;

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  }, [{ url }]);

  return { data };
};

import { createContext, useState, useEffect } from "react";

const citiesContext = createContext();

const BASE_URL = `http://localhost:9000`;

function citiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(cities, isLoading);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const resp = await fetch(`${BASE_URL}/cities`);
        const data = await resp.json();
        setCities(data);
      } catch {
        alert("there was an error ;loading the data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
}

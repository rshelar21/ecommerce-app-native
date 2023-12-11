import axios from "axios";
import React, { useState, useEffect } from "react";

const useFetch = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();

  const fetchData = async () => {
    setIsLoading(true);
    try {
        const res = await axios.get("http://localhost:3000/api/products");
        setData(res.data);
        setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const reFetch = () => {
    setIsLoading(true);
    fetchData();
  }
  return {
    data,
    error,
    isLoading,
    reFetch
  };
};


export default useFetch;

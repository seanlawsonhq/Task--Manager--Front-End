import { useEffect, useState } from "react";

// This is a custom hook to fetch data from provided URL inside a container called baseURL in app.jsx
export const useFetch = (url) => {
  const [data, setData] = useState(null); // useState to store the fetched data, initially null

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //useEffect the Api of data) useEffect hook to perform side effects (data fetching in this case)

  useEffect(() => {
    // sync function to fetch data
    const getData = async () => {
      const response = await fetch(url); // Fetch data from the provided url

      const jData = await response.json(); // Parse response JSON data and keep inside jData

      setData(jData.tasks ? jData.tasks : jData.task); // (This expression is called a tennary operator) Update the [data] state that was formally null with setData... updating data with fetched data.
      setLoading(false);
      console.log(jData);
    };
    setTimeout(async () => {
      try {
        await getData(); // Envoke the getData function
      } catch (error) {
        console.log(error);
        setError("Oops something went wrong");
        setLoading (false);
      }
    }, 3000);
  }, []);

  return { data, setData, loading, error }; // Return an object containing data
};

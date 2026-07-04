import { useState, useEffect } from "react";

function UseFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
       // console.log("API Response:", json); // Debugging log
        setData(Array.isArray(json) ? json : []);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setData([]);
      });
  }, [url]);

  return data;
}

export default UseFetch;
import React, { useState, useEffect } from 'react';

function Example3() {
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const res = await response.json();
        setData(res);
        setError(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(true);
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <p>Error fetching data</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h4>Example for API Fetching using useEffect</h4>

      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h5>{item.title}</h5>
            <p>{item.description}</p>
            <p>
              <strong>Price:</strong> ${item.price}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Example3;
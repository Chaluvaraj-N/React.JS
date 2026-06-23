import React, { useState, useEffect } from 'react';

function Example4() {
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

    <table border={1}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Price</th>
          <th>Description</th>
          <th>Image</th>
          <th>Rating</th>
        </tr>
      </thead>

      <tbody>
        {data.map((ele) => (
          <tr key={ele.id}>
            <td>{ele.id}</td>
            <td>{ele.title.substring(0, 29)}</td>
            <td>{ele.price}</td>
            <td>{ele.description.substring(0, 100)}</td>
            <td>
              <img
                src={ele.image}
                alt={ele.title}
                width="80"
                height="80"
              />
            </td>
            <td>
              {ele.rating.rate} ({ele.rating.count})
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}

export default Example4;
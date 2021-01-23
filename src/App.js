import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';







function App() {
  const [data, setData] = useState('{}');
  const [query, setQuery] = useState('636046316036');
  const [url, setUrl] = useState(
    'https://upc.shamacon.us/grocy/636046316036',
  );
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
 
      const obj = Object.entries(result.data).map(([key, value]) => ({key, value}))
      console.log(obj);
      setData(obj);
    };
 
    fetchData();
  }, [url]);
 
  return (
    <Fragment>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button
        type="button"
        onClick={() =>
          setUrl(`https://upc.shamacon.us/grocy/${query}`)
        }
      >
        Search
      </button>
 
      <ul>
      {data.map(item => (
        <li key={item.objectID}>
          <a href={item.product_name}>{item.upc}</a>
        </li>
      ))}
    </ul>
    </Fragment>
  );
}



export default App;
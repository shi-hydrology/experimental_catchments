import React from 'react';


async function fetchData(url = 'http://localhost:8080/api/') {
  const response = await fetch(url);
  const result = await response.json();
  // console.log(result)
  return result
}

export default fetchData

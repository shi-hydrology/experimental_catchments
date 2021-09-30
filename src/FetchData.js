import React from 'react';


async function fetchData(url = 'http://localhost:8080/api/sites') {
  // Default options are marked with *
  const response = await fetch(url);
  const result = await response.json();
  // console.log(result)
  return result // parses JSON response into native JavaScript objects
}


export default fetchData

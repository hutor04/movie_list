import React, { useState, useEffect } from'react';
import Card from '../components/Card';

const List = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(async () => {
    const movies = await fetch('data.json',
      {
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
    const moviesJSON = await movies.json();
    setData(moviesJSON);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className={'row'}>
      {data.map(movie => <div className={'col-sm-2'} key={movie.id}><Card key={movie.id} movie={movie} /></div>)}
    </div>
  );
};

export default List;

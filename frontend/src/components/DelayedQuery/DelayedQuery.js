import React, { useState, useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';

const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      breed
      displayImage
    }
  }
`;

const DelayedQuery = () => {
  const [dog, setDog] = useState(null);
  const [getDog, { loading, data }] = useLazyQuery(GET_DOG_PHOTO);

  useEffect(() => {
    if (data && data.dog) {
      setDog(data.dog);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;

  const onClick = () => {
    const breeds = ['bulldog', 'labrador retriever', 'french bulldog'];
    const breed = breeds[Math.floor(Math.random() * breeds.length)];
    getDog({ variables: { breed } });
  };

  return (
    <div>
      <button onClick={onClick}>Run Query</button>

      {dog ? (
        <div>
          <h1>
            {dog.breed} ({dog.id})
          </h1>
          <p>
            <img
              alt={dog.breed}
              src={`${process.env.REACT_APP_BACKEND}/assets/${dog.displayImage}`}
            />
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default DelayedQuery;

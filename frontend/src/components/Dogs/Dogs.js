import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;

const Dogs = () => {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const onSelectDog = (event) => {
    console.log(`dog.id: ${event.target.value}`)
  };
  return (
    <select onChange={onSelectDog}>
      {data.dogs.map((dog) => (
        <option key={dog.id} value={dog.id}>
          {dog.breed}
        </option>
      ))}
    </select>
  );
};

export default Dogs;

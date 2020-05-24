import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const onSelectDog = (event) => {
    console.log(`dog.id: ${event.target.value}`);
    history.push(`/dog-photo/${event.target.value}`);
  };
  return (
    <select onChange={onSelectDog}>
      <option value=''>
        Select a breed
      </option>
      {data.dogs.map((dog) => (
        <option key={dog.breed} value={dog.breed}>
          {dog.breed}
        </option>
      ))}
    </select>
  );
};

export default Dogs;

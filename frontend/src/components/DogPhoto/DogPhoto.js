import React from 'react';
import { useParams } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

const DogPhoto = () => {
  const { breed } = useParams();
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_DOG_PHOTO,
    {
      variables: { breed },
      //pollInterval: 500,
      notifyOnNetworkStatusChange: true,
    }
  );
  if (networkStatus === 4) return <p>Refetching!</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>
        {breed} ({data.dog.id})
      </h2>
      <p>
        <img
          style={{ width: 280 }}
          alt={breed}
          src={`${process.env.REACT_APP_BACKEND}/assets/${data.dog.displayImage}`}
        />
        <button onClick={() => refetch()}>Refetch!</button>
      </p>
    </div>
  );
};

export default DogPhoto;

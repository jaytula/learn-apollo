import React from 'react';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import Link from '../Link/Link';
import { gql } from 'apollo-boost';

const GET_VISIBILITY_FILTER = gql`
  {
    visibilityFilter @client
  }
`;

const FilterLink = ({ filter, children }) => {
  const { data, client } = useQuery(GET_VISIBILITY_FILTER);

  return (
    <Link
      onClick={() => {
        client.writeData({ data: { visibilityFilter: filter } });
      }}
      active={data && data.visibilityFilter === filter}
    >
      {children}
    </Link>
  );
};

export default FilterLink;

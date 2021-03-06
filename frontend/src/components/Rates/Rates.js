import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

function Rates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
        <ul>
          {data.rates.map((rate) => (
            <li key={rate.currency}>
              {rate.currency}: {rate.rate}
            </li>
          ))}
        </ul>
    </div>
  );
}

export default Rates;

import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import ApolloClient, { gql } from "apollo-boost";

const BACKEND = process.env.REACT_APP_BACKEND;

function App() {
  const graphqlBody = {
    query: `
    {
      rates(currency: "USD") {
          currency
        }
      }
    `
  };

  useEffect(() => {
    fetch(`${BACKEND}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(graphqlBody)
    }).then(res => res.json())
    .then(data => console.log(data))
    // const client = new ApolloClient({
    //   uri: BACKEND,
    //   fetchOptions: {
    //     cors: true
    //   }
    // });

    // client
    //   .query({
    //     query: gql`
    //       {
    //         rates(currency: "USD") {
    //           currency
    //         }
    //       }
    //     `,
    //   })
    //   .then((result) => console.log(result))
    //   .catch(err => {
    //     console.log(err);
    //   })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

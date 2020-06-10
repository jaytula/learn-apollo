import React from 'react';
import Todo from '../Todo/Todo';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const TODOS = gql`
  query {
    todos {
      id
      type
    }
  }
`;

const ToggleTodos = () => {
  const { data, loading, error } = useQuery(TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! ({error.message})</p>;

  return (
    <div>
      {data.todos.map(todo => (
        <Todo
          key={todo.id}
          id={todo.id}
          text={todo.type}
        ></Todo>
      ))}
    </div>
  );
};

export default ToggleTodos;

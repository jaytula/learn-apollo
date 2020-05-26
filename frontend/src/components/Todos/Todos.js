import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useMutation, useQuery } from '@apollo/react-hooks';

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

const UPDATE_TODO = gql`
  mutation UpdateTodo($id: String!, $type: String!) {
    updateTodo(id: $id, type: $type) {
      id
      type
    }
  }
`;

const TODOS = gql`
  query {
    todos {
      id
      type
    }
  }
`;

const Todos = () => {
  const { loading, error, data } = useQuery(TODOS);
  const [addTodo] = useMutation(ADD_TODO);
  const [updateTodo] = useMutation(UPDATE_TODO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  let input;



  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault();
          addTodo({ variables: { type: input.value } });
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type='submit'>Add Todo</button>
      </form>

      <ul>
        {data.todos.map(todo => {
          let input;

          const updateTodoHandler = (todoId, value) => {
            console.log({ todoId, value });
            updateTodo({variables: {
              id: todoId,
              type: value
            }})
          };

          return (
            <li key={todo.id}>
              {todo.id}: {todo.type}
              <form onSubmit={event => {event.preventDefault(); updateTodoHandler(todo.id, input.value)}}>
                <input
                  type='text'
                  name='type'
                  ref={node => input = node}
                />
                <button type='submit'>Update</button>
              </form>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;

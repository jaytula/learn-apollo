import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

const AddTodo = () => {
  let input;
  const [addTodo] = useMutation(ADD_TODO);

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
    </div>
  );
};

export default AddTodo;
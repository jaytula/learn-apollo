import React from 'react';
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
  const { loading: queryLoading, error: queryError, data } = useQuery(TODOS);
  const [addTodo] = useMutation(ADD_TODO, {
    update(cache, { data }) {
      const readData = cache.readQuery({ query: TODOS });
      cache.writeQuery({
        query: TODOS,
        data: { todos: readData.todos.concat(data.addTodo) },
      });
    },
  });
  const [
    updateTodo,
    { loading: updateLoading, error: updateError },
  ] = useMutation(UPDATE_TODO);

  if (queryLoading) return <p>Loading...</p>;
  if (updateLoading) return <p>Update Mutation...</p>;
  if (queryError) return <p>Error :(</p>;
  if (updateError) return <p>Update Error</p>;
  let input;

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addTodo({ variables: { type: input.value } });
          input.value = '';
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type='submit'>Add Todo</button>
      </form>

      <div>{updateError ? JSON.stringify(updateError) : null}</div>
      <ul>
        {data.todos.map((todo) => {
          let input;

          const updateTodoHandler = (todoId, value) => {
            console.log({ todoId, value });
            try {
              updateTodo({
                variables: {
                  id: todoId,
                  type: value,
                },
              });
            } catch (err) {
              console.log(err);
            }
          };

          return (
            <li key={todo.id}>
              {todo.id}: {todo.type}
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  updateTodoHandler(todo.id, input.value);
                }}
              >
                <input type='text' name='type' ref={(node) => (input = node)} />
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

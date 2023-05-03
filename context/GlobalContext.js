import {createContext} from 'react';

const GlobalContext = createContext({
  item: {},
  state: [],
  user: {},
  addTodo: () => {},
  removeTodo: () => {},
});

export default GlobalContext;

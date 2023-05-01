import { createContext } from 'react';

const GlobalContext = createContext({
    item: {},
    state: [],
    addTodo: () => { },
    removeTodo: () => { },
});

export default GlobalContext;
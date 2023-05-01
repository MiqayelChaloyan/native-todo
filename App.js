import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BootomTabNavigator from './navigations/BootomTabNavigator';
import PageNavigator from './navigations/PageNavigator';
import initialState from './context/initialState';
import GlobalContext from './context/GlobalContext';


const Stack = createNativeStackNavigator();

function App() {
  const [todos, setTodos] = useState(initialState);
  const [element, setElement] = useState(initialState[0]);

  const addTodo = text => {
    setTodos([
      ...todos,
      { id: todos.length + 1, title: text, isComplete: false },
    ]);
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, text) => {
    const newList = todos.map(item => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          title: text,
        };

        return updatedItem;
      }

      return item;
    });
    setTodos(newList);
  };

  return (
    <GlobalContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        editTodo,
        element,
        setElement,
        setTodos,
      }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen options={{
            headerShown: false,
          }} name="BootomTabNavigator" component={BootomTabNavigator} />
          <Stack.Screen options={{
            headerShown: false,
          }} name="PageNavigator" component={PageNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalContext.Provider>
  );
}

export default App;
import { AppUI } from './AppUI';
import React from 'react';
import { useLocalStorage } from './useLocalStorage';

// localStorage.removeItem('TODOS_V1');
// const defaultTodos =[
//   {text: 'Cortar con la cebolla', completed: true},
//   {text: 'finish  text two', completed: false},
//   {text: 'Clean all the house', completed: false},
//   {text: 'Rice with  chicken', completed: false},
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));



function App() {

const {
  item: todos, 
  saveItem: saveTodos,
  loading,
error
}= useLocalStorage('TODOS_V1',[]);
const [searchValue, setSearchValue ] = React.useState('');

const completedTodos = todos.filter(todos => !!todos.completed).length;
const totalTodos = todos.length;

const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchedText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchedText);
    }
);

  const completeTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
      );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
      );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

return (
  <AppUI 
      loading={loading}
      error={error}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      searchedTodos={searchedTodos}
  />
);


}


export default App;

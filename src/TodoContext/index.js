import React from 'react';
import {useLocalStorage} from '../TodoContext/useLocalStorage';

const TodoContext =React.createContext();
function TodoProvider({children}){
    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
      error
      }= useLocalStorage('TODOS_V1',[]);
      const [searchValue, setSearchValue ] = React.useState('');
      
      const completedTodos = todos.filter(todos => !!todos.completed).length;
      const totalTodos = todos.length;
      const [openModal, setOpenModal]= React.useState(false);
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
        <TodoContext.Provider value={{
          loading,
          error,
          searchValue,
          setSearchValue,
          completedTodos,
          totalTodos,
          completeTodo,
          deleteTodo,
          searchedTodos,
          openModal, 
          setOpenModal,
        }}>
              {children}
        </TodoContext.Provider>
    );
}



export {TodoContext, TodoProvider};
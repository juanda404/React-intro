import { ListTitle } from './ListTitle';
import { ListSearch } from './ListSearch';
import { ListFood } from './ListFood';
import { TodoItem } from './TodoItem';
import { CreateListButton } from './CreateListButton';
import './App.css';
import React from 'react';

// const defaultTodos =[
//   {text: 'Cortar con la cebolla', completed: true},
//   {text: 'finish  text two', completed: false},
//   {text: 'Clean all the house', completed: false},
//   {text: 'Rice with  chicken', completed: false},
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

function useLocalStorage(itemName, initialValue){
        
          const localStorageItem = localStorage.getItem(itemName);

          let parsedItem ;
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          }else{
            parsedItem = JSON.parse(localStorageItem);
          }

            const [item, setItem] = React.useState(parsedItem);

          const  saveItem= (newItem) =>{
            localStorage.setItem(itemName, JSON.stringify(newItem));
            setItem(newItem);
          };
          return [item, saveItem];
}

function App() {

const [todos, saveTodos]= useLocalStorage('TODOS_V1',[]);
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
  }

 return (
  <React.Fragment>  
      <ListTitle  completed={completedTodos}  total={totalTodos} />
      <ListSearch
         searchValue={searchValue}
         setSearchValue={setSearchValue} 
      />

      <ListFood>
          {searchedTodos.map(todo => (
                        <TodoItem 
                         key={todo.text} 
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                        />
          )) }
      </ListFood>
      <CreateListButton />
      </React.Fragment>
  );
}


export default App;

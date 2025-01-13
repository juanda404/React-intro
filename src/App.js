import { ListTitle } from './ListTitle';
import { ListSearch } from './ListSearch';
import { ListFood } from './ListFood';
import { TodoItem } from './TodoItem';
import { CreateListButton } from './CreateListButton';
import './App.css';
import React from 'react';

const defaultTodos =[
  {text: 'Cortar con la cebolla', completed: true},
  {text: 'finish  text two', completed: false},
  {text: 'Clean all the house', completed: false},
  {text: 'Rice with  chicken', completed: false},
];

function App() {
 return (
  <React.Fragment>  
      <ListTitle  completed={16}  total={30} />
      <ListSearch />

      <ListFood>
          {defaultTodos.map(todo => (
                        <TodoItem 
                         key={todo.text} 
                        text={todo.text}
                        completed={todo.completed}/>
          )) }
      </ListFood>
      <CreateListButton />
      </React.Fragment>
  );
}


export default App;

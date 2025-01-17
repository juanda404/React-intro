import { useContext } from 'react';
import  './ListTItle.css';
import { TodoContext } from '../TodoContext';
import React from 'react';

function ListTitle(){
const {
  totalTodos,
  completedTodos,
} = React.useContext(TodoContext);


    return (
      totalTodos === completedTodos
      ?<h1 className='ListTitle'>You has finisehd all task</h1>
      :<h1 className='ListTitle'>
        You have bought <span> {completedTodos}</span> out of <span>{totalTodos} </span>groceries
    </h1>
    );
  }

  export { ListTitle };
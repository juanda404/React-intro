import React from 'react';
import './ListSearch.css';
import { TodoContext } from '../TodoContext';

function ListSearch(){
    const {
      searchValue,
      setSearchValue,
    } = React.useContext(TodoContext);
    return (
      <input 
      placeholder="Rice with potato"
      className='ListSearch'
      value={searchValue}
      onChange={
        (event)=> {
          setSearchValue(event.target.value)
          }
        }
       />
    );
  }

  export { ListSearch };
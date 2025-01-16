import React from 'react';
import './ListSearch.css'
function ListSearch({
  searchValue,
  setSearchValue,
}){

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
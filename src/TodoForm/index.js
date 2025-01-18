import React from 'react';
import  './TodoForm.css'

function TodoForm(){
      return(
            <form onSubmit={(event)=>{
                        event.preventDefault();
            }}>
            <label>Write your new task</label> 
            <textarea
                  placeholder="Type your task here"
            />
            <div className='TodoForm-buttonContainer'>
                     <button 
                     type=''
                     className="TodoForm-button TodoForm-button--cancel">Cancel</button>
                      <button
                      type='submit'
                      className="TodoForm-button TodoForm-button--add">Add</button>
            </div>
            </form>
      );
}


export {TodoForm};
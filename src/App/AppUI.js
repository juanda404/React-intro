import { ListTitle } from '../ListTitle';
import { ListSearch } from '../ListSearch';
import { ListFood } from '../ListFood';
import { TodoItem } from '../TodoItem';
import { CreateListButton } from '../CreateListButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import React from 'react';
import {Modal} from '../Modal';



function AppUI(){
    const {
        loading,
        error,
        completeTodo,
        deleteTodo,
        searchedTodos,
        openModal,
         setOpenModal,

    } = React.useContext(TodoContext);


    return (
        <> 
        <ListTitle   />
        <ListSearch   /> 
                <ListFood>
                                        {loading &&(
                                        <>
                                            <TodosLoading />
                                            <TodosLoading />
                                            <TodosLoading />
                                        </>
                                        )}
                                        {error && <TodosError/>}
                                        {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
            
                                        {searchedTodos.map(todo => (
                                        <TodoItem
                                            key={todo.text}
                                            text={todo.text}
                                            completed={todo.completed}
                                            onComplete={() => completeTodo(todo.text)}
                                            onDelete={() => deleteTodo(todo.text)}
                                        />
                                          ))}
                </ListFood>
            <CreateListButton 
                setOpenModal={setOpenModal}
            />

            {openModal && (
                <Modal>
                    l afuncionalidad de agregar
                </Modal>
            )}
        </>
        );
}

export {AppUI};
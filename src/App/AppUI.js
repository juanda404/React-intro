import { ListTitle } from '../ListTitle';
import { ListSearch } from '../ListSearch';
import { ListFood } from '../ListFood';
import { TodoItem } from '../TodoItem';
import { CreateListButton } from '../CreateListButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';



function AppUI(){
    return (
        <>
        <ListTitle   />
        <ListSearch   />
    
            <TodoContext.Consumer >
                {({
                    loading,
                    error,
                    completeTodo,
                    deleteTodo,
                    searchedTodos,
 
                }) => (
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
                )}
            </TodoContext.Consumer>
            <CreateListButton />
        </>
        );
}

export {AppUI};
import { ListTitle } from '../ListTitle';
import { ListSearch } from '../ListSearch';
import { ListFood } from '../ListFood';
import { TodoItem } from '../TodoItem';
import { CreateListButton } from '../CreateListButton';



function AppUI({
    loading,
    error,
    searchValue,
    setSearchValue,
    completedTodos,
    totalTodos,
    completeTodo,
    deleteTodo,
    searchedTodos
}){
    return (
        <>  
            <ListTitle  completed={completedTodos}  total={totalTodos} />
            <ListSearch
               searchValue={searchValue}
               setSearchValue={setSearchValue} 
            />
      
            <ListFood>
                {loading && <p>stay loading...</p>}
                {error  && <p>Wake up, we have a  error</p>}
                {!loading && !error && searchedTodos.length === 0 && <p>No be task para show</p>}

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
            </>
        );
}

export {AppUI};
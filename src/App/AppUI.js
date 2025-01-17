import { ListTitle } from '../ListTitle';
import { ListSearch } from '../ListSearch';
import { ListFood } from '../ListFood';
import { TodoItem } from '../TodoItem';
import { CreateListButton } from '../CreateListButton';



function AppUI({
 
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
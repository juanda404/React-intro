import { ListTitle } from './ListTitle';
import { ListSearch } from './ListSearch';
import { ListFood } from './ListFood';
import { TodoItem } from './TodoItem';
import { CreateListButton } from './CreateListButton';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <ListTitle  />
      <ListSearch />

      <ListFood>
          <TodoItem />
          <TodoItem />
          <TodoItem />
      </ListFood>

      <CreateListButton />


    </div>
  );
}


export default App;

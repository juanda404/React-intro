import './CreateListButton.css'
function CreateListButton(){
    return (
      <button className='CreateTodoButton' 
      onClick={
        (event)=> {
          console.log('Le diste click')
          console.log(event)
        }
        }
        >+</button>
    );
  }

  export { CreateListButton };
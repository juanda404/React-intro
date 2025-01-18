import './CreateListButton.css'
function CreateListButton({setOpenModal}){
    return (
      <button className='CreateTodoButton' 
      onClick={
        () => {
          setOpenModal(state => !state);
        }
        }
        >+</button>
    );
  }

  export { CreateListButton };
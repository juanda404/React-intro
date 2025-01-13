import  './ListTItle.css';

function ListTitle({ total, completed }){
    return (
      <h1 className='ListTitle'>
          You have bought <span> {completed}</span> out of <span>{total} </span>groceries
      </h1>
    );
  }

  export { ListTitle };
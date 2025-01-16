import  './ListTItle.css';

function ListTitle({ total, completed }){

    return (
      total === completed 
      ?<h1 className='ListTitle'>You has finisehd all task</h1>
      :<h1 className='ListTitle'>
        You have bought <span> {completed}</span> out of <span>{total} </span>groceries
    </h1>
    );
  }

  export { ListTitle };
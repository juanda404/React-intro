
function ListFood (props){
    return (
      <ul className="ListFood">
            {props.children} 
      </ul>
    );
  }

  export { ListFood };
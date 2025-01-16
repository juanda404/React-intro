import React from 'react';
 import { FaXmark } from "react-icons/fa6";

function DeleteIcon(props){
    return (
    // <FaXmark className="Icon Icon-delete" 
    // onClick={props.onDelete}/>

<span className="Icon Icon-delete"
       onClick={props.onDelete}
        >           <FaXmark />
        </span> 
    );
}
export {DeleteIcon};
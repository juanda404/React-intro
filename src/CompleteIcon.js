import React  from 'react';
import './TodoItem.css'
import { FaCheck } from "react-icons/fa6";

function CompleteIcon(props) {
    return  (
           <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
                onClick={props.onComplete}
                >
                  <FaCheck />
                  </span>
        // <FaCheck className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} 
        // onClick={props.onComplete}/>

    );
}
export { CompleteIcon };
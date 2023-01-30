import React from "react";
import { NavLink } from "react-router-dom";


const Card = (props) => {
    return (  
    <>
     
             <div className="col-md-4 col-10 mx-auto">
            <div className="card" >
            <img src={props.id} className="card-img-top" alt={props.id}/>
              <div className="card-body">
             <h5 className="card-title">{props.title}</h5>
             <p className="card-text">{props.username}</p>
             {/* <button onClick={()=>{
                props.onSelect(props.id);
             }}>Delete</button> */}
            <NavLink 
            to="" 
            className="btn btn-primary">
            {props.url}
            </NavLink>
        </div>
            </div> 
                </div>
        
        
    </>

    );
}
 
export default Card;
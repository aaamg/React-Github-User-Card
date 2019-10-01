import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return( 
   <div>   
    <p>{props.item.login}</p>
    <img src={props.item.avatar_url} />
  </div>
  );
}

export default Card;

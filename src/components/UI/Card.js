import React from 'react';
import "./Card.css";


//this Card component will act as a shell for both our expense items or our expenses content, it will be like a wrapper component.
function Card(props) {
    const classes = "card " + props.className
  return <div className={classes}>{props.children}</div>;
}

export default Card;

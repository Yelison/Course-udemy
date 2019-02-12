import React from 'react';
import classes from './Person.css';

const person = (props) => {

	return(
	
	<div className={classes.Person}>
		<p>{props.children}</p>
		<p onClick={props.click}> Your name is {props.name} and you are {props.age} years old</p>
		<input type='text' onChange={props.changed} value={props.name} />
	</div>

	);
};
export default person;


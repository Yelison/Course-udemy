import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
	const style = {
		'@media (min-width: 500px)':{
			width: '450px'
		}
	};
	return(
	
	<div className='Person' style={style}>
		<p>{props.children}</p>
		<p onClick={props.click}> Your name is {props.name} and you are {props.age} years old</p>
		<input type='text' onChange={props.changed} />
	</div>

	);
};
export default Radium(person);


import React from 'react';
import Radium from 'radium';


const person = (props) => {
	return(
	
	<div className='Person'>
		<p>{props.children}</p>
		<p onClick={props.click}> Your name is {props.name} and you are {props.age} years old</p>
		<input type='text' onChange={props.changed} />
	</div>

	);
};
export default Radium(person);


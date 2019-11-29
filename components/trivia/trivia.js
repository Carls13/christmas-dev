import React from 'react';

import { TRIVIA as triviaData } from './trivia-elements';
import './trivia.css';

const Trivia = () => { 
	const key = Math.floor(Math.random() * 10);
	const fact = triviaData.facts[key];
	return (
	   <div className="row green-bg white" id="trivia">
	   		<div className="col-12 text-center p-5">
	   			<h1 className="mb-3">DID YOU KNOW...</h1>
	   			<p>{`...${fact}?`}</p>
	   		</div>
	   </div>
	);
}

export default Trivia;
import React from 'react';


const Header = ({ cou }) => {
	return (
		<div>
			<h1>{cou.name}</h1>
		</div>
	);
};

const Content = ({inc}) => {
	return (
		<div>
			<Part part={inc.parts[0].name} exercises={inc.parts[0].exercises} />
			<Part part={inc.parts[1].name} exercises={inc.parts[1].exercises} />
			<Part part={inc.parts[2].name} exercises={inc.parts[2].exercises} />
		</div>
	);
};

const Total = ({inc}) => {
	return (
		<div>
			<p>
				Number of exercises {inc.parts[0].exercises + inc.parts[1].exercises + inc.parts[2].exercises}
			</p>
		</div>
	);
};

const Part = (prop) => {
	return (
		<div>
			<p>
				{prop.part} {prop.exercises}
			</p>
		</div>
	);
};

const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10
			},
			{
				name: 'Using props to pass data',
				exercises: 7
			},
			{
				name: 'State of a component',
				exercises: 14
			}
		]
	};

	return (
		<div>
			<Header cou={course} />
			<Content inc={course} />

			<Total inc={course} />
		</div>
	);
};

export default App
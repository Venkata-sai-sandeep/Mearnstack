import React from 'react';

const Header = ( inc ) => {
	return (
		<div>
			<h1>{ inc.name}</h1>
		</div>
	);
};

const Content = (inc) => {
	return (
		<div>
      <p>
          {inc.parts[0].name}  {inc.parts[0].exercises}
          </p>
          <p>
          {inc.parts[1].name}  {inc.parts[1].exercises}
          </p>
          <p>
          {inc.parts[2].name}  {inc.parts[2].exercises}
      </p>
		
		</div>
	);
};

const Total = (inc) => {
	return (
		<div>
			<p>
				Number of exercises {inc.parts[0].exercises + inc.parts[1].exercises + inc.parts[2].exercises}
			</p>
		</div>
	);
};



const App = () => {

  const cour = 'Half Stack application development'
  const parts = [
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


return (
  <div>
  
    <Header name={cour} />
    <Content parts={parts} />
    <Total parts={parts} />
    
  </div>
);
};



export default App
import React from 'react';
import ReactDOM from 'react-dom';


// const JSX = (
//   <div className='myDiv'>
//     <h1>Hello World</h1>
//     <br />
//     <p>Lets render this to the DOM</p>
//     <hr />
//   </div>
// );

// ReactDOM.render(
//  JSX ,
//   document.getElementById('root')
// );

{/***********************/}

// const MyComponent = ()=> {
// 	return(
// 		<div>Hello from MyComponent</div>
// 	);
// }

// ReactDOM.render(
// <MyComponent />,
// document.getElementById('root')
// )

{/***********************/}

// use class for local state and lifecycle hooks
class App extends React.Component {

 constructor(props) {
 // fires before component is mounted
 super(props); // makes this refer to this component
 }
 render() {
 return (
 <h1>Hello from class ES6 component</h1>
 )
 }
};

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
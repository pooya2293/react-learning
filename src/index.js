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

const MyComponent = ()=> {
	return(
		<div>Hello from MyComponent</div>
	);
}

ReactDOM.render(
<MyComponent />,
document.getElementById('root')
)



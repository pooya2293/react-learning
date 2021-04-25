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

/***********************/

// const MyComponent = ()=> {
// 	return(
// 		<div>Hello from MyComponent</div>
// 	);
// }

// ReactDOM.render(
// <MyComponent />,
// document.getElementById('root')
// )

/***********************/

// use class for local state and lifecycle hooks
// class App extends React.Component {

//  constructor(props) {
//  // fires before component is mounted
//  super(props); // makes this refer to this component
//  this.state = {date: new Date()}; // set state
//  }
//  render() {
//  return (
//  <h1>
//  It is {this.state.date.toLocaleTimeString()}.
//  </h1>
//  )
//  }
// };

// ReactDOM.render(
// 	<App />,
// 	document.getElementById('root')
// );

/*****Create a Component with Composition******/


// const ChildComponent =()=> {
// 	return(
// 		<div>
// 			<p>I am a child</p>
// 		</div>
// 	)
// };

// class ParentComponent extends React.Component {
// 	// i dont have any props
// 	// constructor(props) {
//  //  		super(props);
//  //  	}
//     render() {
//     	return (
//   		<div>
//   			<h1>I am the parent</h1>
//   			<ChildComponent />	
//   		</div>
//   		);
//   	}
// };

// ReactDOM.render(
// 	<ParentComponent />,
// 	document.getElementById('root')
// )


/********Nested Components***********/

// const TypesOfFruits = ()=>{
// 	return(
// 	<div>
// 		<ul>
// 			<li>Apples</li>
// 			<li>Blueberries</li>
// 			<li>strawberries</li>
// 			<li>Bananas</li>
// 		</ul>
// 	</div>
// 	)
// };

// const AddFruit= ()=>{
// 	return(
// 		<div>
// 			<TypesOfFruits />
// 			<hr />
// 		</div>
// 	)
// }

// class SuperMarket extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Types of Food:</h1>
//           <AddFruit />
//       </div>
//     );
//   }
// };


// ReactDOM.render(
//  	<SuperMarket />,
//  	document.getElementById('root')
// )

/*********Props***********/

const CurrentDate = (props)=>{
	return(
		<div>
			<p>The current date is:{props.my_date}</p>
		</div>
	)
}

class Calender extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<p>what date is it ?</p>
				<CurrentDate my_date={Date()}/>
			</div>
		)
	}
}

ReactDOM.render(
	<Calender />,
	document.querySelector('#root')
)

/*********Props***********/
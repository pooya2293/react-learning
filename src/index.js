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

// const CurrentDate = (props)=>{
// 	return(
// 		<div>
// 			<p>The current date is:{props.my_date}</p>
// 		</div>
// 	)
// }

// class Calender extends React.Component {
// 	constructor(props){
// 		super(props);
// 	}
// 	render(){
// 		return(
// 			<div>
// 				<p>what date is it ?</p>
// 				<CurrentDate my_date={Date()}/>
// 			</div>
// 		)
// 	}
// }

// ReactDOM.render(
// 	<Calender />,
// 	document.querySelector('#root')
// )

/*********Array*Props***********/

// const List = (props) => {
// 	return <p>{props.tasks.join(", ")}</p>
// }

// class ToDo extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	render(){
// 		return(
// 			<div>
// 				<h1>To Do Lists</h1>
// 				<h2>Today</h2>
// 				<List tasks={["walk dog","workout"]} />
// 				<h2>Tomorrow</h2>
// 				<List tasks={["walk dog","workout","take a Rest"]} />
// 			</div>
// 		)
// 	}
// };

// ReactDOM.render(
//  	<ToDo />,
//  	document.querySelector('#root')
//  )

/*******Use*Default*Props*********/


// const List = (props) => {
// 	return <p>{props.tasks.join(", ")}</p>
// }

// class ToDo extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	render(){
// 		return(
// 			<div>
// 				<h1>To Do Lists</h1>
// 				<h2>Today</h2>
// 				<List />
// 			</div>
// 		)
// 	}
// };

// List.defaultProps = {
// 	tasks:['item1','item2','item3']
// }

// ReactDOM.render(
//  	<ToDo />,
//  	document.querySelector('#root')
//  )

/*******Use*Default*Props*********/

// import PropTypes from 'prop-types'

// const List = (props) => {
// 	return <p>{props.tasks.join(", ")}</p>
// }

// List.propTypes = {tasks : PropTypes.number.isRequired}

// class ToDo extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	render(){
// 		return(
// 			<div>
// 				<h1>To Do Lists</h1>
// 				<h2>Today</h2>
// 				<List />
// 			</div>
// 		)
// 	}
// };

// List.defaultProps = {
// 	tasks:['item1','item2','item3']
// }

// ReactDOM.render(
//  	<ToDo />,
//  	document.querySelector('#root')
//  )

/****Access Props*Using*this.props****/

// class ReturnTempPassword extends React.Component {
//   constructor(props) {
//     super(props);

//   }
//   render() {
//     return (
//         <div>
//             {  Change code below this line  }
//             <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
//             { /* Change code above this line */ }
//         </div>
//     );
//   }
// };

// const ReturnTempPassword = (props)=>{
// 	return(
// 		 <div>
//             <p>Your temporary password is: 
//             <strong>
//             	{props.tempPassword}
//             </strong></p>
//         </div>
// 	)
// }

// class ResetPassword extends React.Component {
//   constructor(props) {
//     super(props);

//   }
//   render() {
//     return (
//         <div>
//           <h2>Reset Password</h2>
//           <h3>We've generated a new temporary password for you.</h3>
//           <h3>Please reset this password from your account settings ASAP.</h3>
         
// 			 <ReturnTempPassword 
// 			 tempPassword="xxxxxxxx" />
         
//         </div>
//     );
//   }
// };

// ReactDOM.render(
//  	<ResetPassword />,
//  	document.querySelector('#root')
//  )

/****Using*Props*with*Stateless****/

// import PropTypes from 'prop-types'

// class CampSite extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <Camper/>
//       </div>
//     );
//   }
// };
// // Change code below this line

// class Camper extends React.Component {
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return(
//       <div>
//         <p>{this.props.name}</p>
//       </div>
//     )
//   }
// }


// Camper.propTypes ={
//   name : PropTypes.string.isRequired
// }

// Camper.defaultProps = {
//   name: 'CamperBot'
// }

// ReactDOM.render(
//  	<CampSite />,
//  	document.querySelector('#root')
//  )

 /****Create*a*Stateful*Component****/

//  class StatefulComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     // Only change code below this line
//   this.state={
//     name:"Name"
//   }
//     // Only change code above this line
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//       </div>
//     );
//   }
// };

// ReactDOM.render(
//  	<StatefulComponent />,
//  	document.querySelector('#root')
//  )

/****Render State in the User Interface Another Way****/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Change code below this line
		const name =  this.state.name;
    // Change code above this line
    return (
      <div>
        { /* Change code below this line */ }
		<h1>{name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};

ReactDOM.render(
 	<MyComponent />,
 	document.querySelector('#root')
 )


/****Render State in the User Interface Another Way****/
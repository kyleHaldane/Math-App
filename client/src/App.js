import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import Auth from "../src/utils/Auth";
import Nav from "../src/components/Nav/index";
import Login from "../src/components/Login/index";
import Register from "../src/components/Register/index";
import { Container } from "../src/components/Grid/index";
import PublicRoute from "../src/pages/PublicRoute/index";
import ProtectedRoute from "../src/pages/ProtectedRoute/index";
import './App.css';

//I want to add some basic inline styling here, even though we are bringing in styles
const listStyle = {
	color: 'cornflowerblue',
	listStyle:'none'
  };
//Now we have all the stuff we need .. let's render some components with the Router
const Authentication = () => (
	<Router>
		<div>
      		<Nav className="App-header"/>
			<Container>
				<ul style={listStyle}>
					<li><Link to="/public">Public Page</Link></li>
					<li><Link to="/protected">Protected Page</Link></li>
					<li><Link to="/register">Register a New User</Link></li>
				</ul>
				<Switch>
					<Route path="/public" component={PublicRoute}/>
					<Route path="/login" component={Login}/>
					<Route path="/register" component={Register}/>
					<PrivateRoute path="/protected" component={ProtectedRoute}/>
					{/* <Route component={NoMatch} /> */}
				</Switch>
			</Container>
		</div>
	</Router>
)




// This is the private route component this checks for an authorized user here
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		Auth.isAuthenticated ? (
			<Component {...props}/>
		) : (
			<Redirect to={{
				pathname: '/login',
				state: { from: props.location }
			}}/>
		)
	)}/>
)








export default Authentication;

import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import Auth from "../src/utils/Auth";
import Nav from "../src/components/Nav/index";
import Login from "../src/components/Login/index";
import Register from "../src/components/Register/index";
import { Container } from "../src/components/Grid/index";
import Dashboard from "./pages/ProtectedRoute/Dashboard";
import Public from "../src/pages/PublicRoute/index"
import './App.css';

//Now we have all the stuff we need .. let's render some components with the Router
const Authentication = () => (
	<Router>
		<div>
      		<Nav className="App-header"/>
			<Container>
				<div className="row nwo">
					<div className="col-4"><Link to="/public">Public Page</Link></div>
					<div className="col-4"><Link to="/protected">Protected Page</Link></div>
					<div className="col-4"><Link to="/register">Register a New User</Link></div>
				</div>
				<Switch>
					<Route exact path="/public" component={Public}/>
					<Route path="/login" component={Login}/>
					<Route path="/register" component={Register}/>
					<PrivateRoute path="/protected" component={Dashboard}/>
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

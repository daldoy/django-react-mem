import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Home from './containers/Home/Home';
import Courses from './containers/Courses/Courses';
import Course from './containers/Course/Course';
import CreateCourse from './containers/CreateCourse/CreateCourse';
import Login from './containers/Login/Login';
import SignUp from './containers/SignUp/SignUp';
import NotFound from './containers/NotFound/NotFound';

class App extends Component {
	render() {    
    	return (
    		<Switch>
                <Route path='/join' exact component= { SignUp } />
        		<Route path='/login' exact component= { Login } />
        		<Route path='/course/create' exact component= { CreateCourse } />
        		<Route path='/course/:courseId' exact component= { Course } />
        		<Route path='/courses/:courseId' exact component= { Courses } />
        		<Route path='/courses' exact component= { Courses } />
        		<Route path='/home' exact component= { Home } />
        		<Redirect path='/' exact to='/home' />
        		<Route path='*' component= {NotFound} />
    		</Switch>
    	);
	}
}

export default withRouter( App );
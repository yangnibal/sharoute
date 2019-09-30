import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Mypage from './pages/Mypage';
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/profile/:username" component={Mypage}/>
				</Switch>
			</div>
		)
	}
}

export default App;

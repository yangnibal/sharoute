import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import Home from './pages/Home';
import Mypage from './pages/Mypage';
import Notice_board from './pages/Notice_board';
import Header from './pages/Header';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';

@inject('store')
@observer
class App extends Component {
	render() {
		const { store } = this.props
		if(store.isLogin===false) {
			return (
				<div>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/mypage/:key" component={Mypage}/>
						<Route path="/notice_board" component={Notice_board}/>
						<Route path="/login" component={Login}/>
						<Route path="/signup" component={Signup}/>
					</Switch>
				</div>
			)
		}
		return (
			<div>
				<Header/>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/mypage/:key" component={Mypage}/>
					<Route path="/notice_board" component={Notice_board}/>
					<Route path="/login" component={Login}/>
					<Route path="/signup" component={Signup}/>
				</Switch>
			</div>
		)
	}
}

export default App;

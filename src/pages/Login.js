import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import '../css/Login.css';

@inject('store')
@observer
class Login extends Component {
    render() {
        const { store } = this.props;
        return (
            <div className="login-wrapper">
                <div className="login-button">
                    <div className="input-wrapper">
                        <input 
                            type="email" 
                            name="input_email" 
                            value={store.input_email} 
                            placeholder="이메일"
                            className="email-input"
                            onChange={store.handleChange}
                        />
                        <input 
                            type="password" 
                            name="input_password" 
                            value={store.input_password} 
                            placeholder="비밀번호"
                            className="password-input"
                            onChange={store.handleChange}
                        />
                    </div>
                    <div className="button-wrapper">
                        <Link 
                            to={store.isLogin===true ? "/" : "/login"}
                            className="login-button" 
                            onClick={() => store.handleLogin(store.input_email)}
                        >
                                로그인
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
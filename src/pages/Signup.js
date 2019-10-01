import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import '../css/Signup.css';

@inject('store')
@observer
class Signup extends Component {
    render() {
        const { store } = this.props;
        return (
            <div className="signup-wrapper">
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
                        type="email" 
                        name="input_email" 
                        value={store.input_email} 
                        placeholder="이메일"
                        className="email-input"
                        onChange={store.handleChange}
                    />
                </div>
                <div className="button-wrapper"></div>
            </div>
        )
    }
}

export default Signup;
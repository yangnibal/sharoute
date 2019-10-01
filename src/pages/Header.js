import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import '../css/Header.css';

@inject('store')
@observer
class Header extends Component {
    render() {
        const { store } = this.props;
        return (
            <div className="header-wrapper">
                <section className="header-home">
                    <Link to="/">
                        홈
                    </Link>
                </section>
                <section className="header-mypage">
                    <Link to={`/mypage/${store.key}`}>
                        마이페이지
                    </Link>
                </section>
                <section className="header-nb">
                    <Link to="/notice_board">
                        게시판
                    </Link>
                </section>
                <section className="header-logout">
                    <Link to="/login">
                        로그아웃
                    </Link>
                </section>
            </div>
        )
    }
}

export default Header;
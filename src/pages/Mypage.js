import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Myroutes from '../components/Myroutes';
import Myposts from '../components/Myposts';

@inject('store')
@observer
class Mypage extends Component {
    render() {
        const { match } = this.props;
        return (
            <div className="mypage-wrapper">
                <div className="mypage-myroute">
                    내 루트들
                    <Myroutes/>
                </div>
                <div className="mypage-myposts">
                    내 게시글
                    <Myposts/>
                </div>
            </div>
        )
    }
}

export default Mypage;
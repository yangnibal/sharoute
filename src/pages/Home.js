import React, { Component } from 'react';
import Recentvisits from '../components/Recentvisits';
import Recommendposts from '../components/RecommendPosts';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class Home extends Component {
    render() {
        const { store } = this.props;
        return (
            <div className="home-wrapper">
                <div className="home-input-wrapper">
                    <input className="home-input"/>
                </div>
                <div className="home-recentvisit-wrapper"> 
                    <Recentvisits/>
                </div>
                <div className="home-recommendpost-wrapper">
                    <Recommendposts/>
                </div>
            </div>
        )
    }
}

export default Home;
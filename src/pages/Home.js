import React, { Component } from 'react';
import Recentvisits from '../components/Recentvisits';
import Recommendposts from '../components/Recommendposts';
import { observer, inject } from 'mobx-react';
import '../css/Home.css';

@inject('store')
@observer
class Home extends Component {
    render() {
        const { store } = this.props;
        console.warn(store.postlists)
        return (
            <div className="home-wrapper">
                <div className="home-input-wrapper">
                    <input 
                        placeholder="찾을 여행지나 게시글을 입력해주세요."
                        name="name" 
                        onChange={store.handleChange} 
                        value={store.search} 
                        className="home-input"
                    />
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
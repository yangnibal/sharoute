import { observable, action } from 'mobx';

export default class Store {
    @observable postlists = [];
    @observable recentvisitpossts = [];
    @observable recommendposts = [];
    @observable userposts = [];
    @observable userlist = [];
    @observable isLogin = false;

    @action handleUpload = () => {
        this.postlists.push({

        })
        this.id++;
    }
    @action handleRemove = (id) => {
        this.postlists = this.postslists.filter(post => post.id !== id)
    }
}
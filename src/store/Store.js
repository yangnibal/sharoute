import { observable, action } from 'mobx';

export default class Store {
    @observable postlists = [];
    @observable recentvisitpossts = [];
    @observable recommendposts = [];
    @observable userposts = [];
    @observable userlist = [
        {
            name: "양원준",
            email: "icecube9670@gmail.com",
            password: "2788518ab",
            key: "a"
        }
    ];
    @observable finduserlist = [];
    @observable isLogin = false;
    @observable name = "";
    @observable email = "";
    @observable password = "";
    @observable input_email = "";
    @observable input_password = "";
    @observable search  = "";
    @observable possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    @observable key = "";
    @observable loginlink = "";

    @action handleChange = (e) => {
        const { name, value } = e.target; 
        this[name] = value;
    }
    @action handleUpload = () => {
        this.postlists.push({
            name: this.input_name,
            password: this.input_password,
            key: this.key
        })
        this.id++;
        this.key = "";
    }
    @action handleRemove = (id) => {
        this.postlists = this.postslists.filter(post => post.id !== id)
    }
    @action handleMakekey = () => {
        for(var i = 0; i < 10; i++)
            this.key += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
        return this.key;
    }
    @action handleLogin = (email) => {
        this.finduserlist = this.userlist.find(user => {
            return user.email === email
        })
        if(this.input_password===this.finduserlist.password) {
            this.isLogin = true;
            this.loginlink = "/";
        }
        else {
            alert('이메일이나 비밀번호가 다릅니다')
            this.loginlink = "/login";
        }
        console.warn(this.isLogin)
    }
}
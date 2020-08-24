import React, { Component } from 'react';
import fire from "../Header/Fire"
import Home from '../Home';
import Login from './Login';

class LoginRegister extends Component {
    constructor(props){
        super(props)
            this.state ={
                user:null
            }
    }

    componentDidMount(){
        this.autListener()
    }

    autListener(){
        fire.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({user})
            }else{
                this.setState({user:null})
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.user ? (<Home/>) : (<Login/>)}
            </div>
        );
    }
}

export default LoginRegister;
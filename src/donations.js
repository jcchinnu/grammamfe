import React,{Component} from 'react';
import './donations.css';
import Dono from "./dono";
import {Link} from "react-router-dom";
class Donations extends Component{
    constructor(){
        super();
        this.state={
            dname:"",
            aadhar:"",
            money:""
        }
    }
    onSubmit=(e)=>{
        e.preventDefault();
        if(this.state.dname===""){
            alert("please enter name");
        }
        else if(this.state.aadhar===""){
            alert("please enter your Aaadhar number");
        }
        else if(this.state.money===""){
            alert("please enter money");
        }
        else {
            // On submit of the form, send a POST request with the data to the server.
            fetch('http://localhost:3001/donations', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    dname: this.state.dname,
                    aadhar:this.state.aadhar,
                    money:this.state.money
                })
            })
                .then(function(response) {
                    console.log(response);

                }).catch(function(error) {
                console.log(error);
            });
            this.setState({
                dname:"",
                aadhar:"",
                money:""
            })
            this.props.history.push('/payment')

        }
    }
    render(){
        return(
            <div className="dono">
                <img src={require('./15.jpg')}  /><br/>
                <div className="d1">
                <form>Enter your Name:<br/>
                    <input type="text" value={this.state.dname} onChange={(e)=>{this.setState({...this.state.dname,dname:e.target.value})}}/><br/>
                    Enter your Aadhar card number:<br/>
                    <input type="text" value={this.state.aadhar} onChange={(e)=>{this.setState({...this.state.aadhar,aadhar:e.target.value})}}/><br/>
   Enter the money to be donated:<br/>
   <input type="text" value={this.state.money} onChange={(e)=>{this.setState({...this.state.money,money:e.target.value})}}/><br/>
                    <br/> <button onClick={this.onSubmit}>Donate</button>
                </form></div>
            </div>
        )
    }
}
export default Donations;
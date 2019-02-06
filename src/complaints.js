import React,{Component} from 'react';
import './complaints.css'
class Complaints extends Component{
    constructor(){
        super();
        this.state={
            cname:"",
            compl:""
        }
    }
    onSubmit=(e)=>{
        e.preventDefault();
        if(this.state.cname===""){
            alert("please enter name");
        }
        else if(this.state.compl===""){
            alert("please enter your complaint");
        }
       else {
            // On submit of the form, send a POST request with the data to the server.
            fetch('http://localhost:3001/complaints', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cname: this.state.cname,
                    compl:this.state.compl
                })
            })
                .then(function(response) {
                    console.log(response);

                }).catch(function(error) {
                console.log(error);
            });
alert("Your complaint is successfully submitted");
            this.setState({
                cname:"",
                compl:""
            })

        }
    }
    render(){
        const imgsty={

        }
        return(
            <div className="complaints">
                <img src={require('./14.jpg')}  style={imgsty}/><br/>
                <div className="c1">
                <form id="myForm">Enter Your Name:<br/>
                    <input type="text" value={this.state.cname} onChange={(e)=>{this.setState({...this.state.cname,cname:e.target.value})}}/><br/>
              <br/>  Enter Your Complaint:<br/>
                    <input type="text" className="txt" value={this.state.compl} onChange={(e)=>{this.setState({...this.state.compl,compl:e.target.value})}}/>
              <br/><br/> <button onClick={this.onSubmit}>Submit</button>

                </form></div>
            </div>
        )
    }
}
export default Complaints;
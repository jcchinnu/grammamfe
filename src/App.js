import React, { Component } from 'react';
import './App.css';
import { Route, Link,NavLink } from 'react-router-dom';

class App extends Component {
    constructor(){
        super();
        this.state={
            aname:"",
            password:""
        }
    }
    onSubmit=(e)=>{
        e.preventDefault();
        if(this.state.aname===""){
            alert("please enter name");
        }
        else if(this.state.password===""){
            alert("please enter your password");
        }
        else {

                fetch('http://localhost:3001/login/' + this.state.aname,)
                    .then(function (response) {
                        return response.json();

                    }).then(data => {
                    console.log(data);
                    if (data[0].password === this.state.password) {
                        this.props.history.push('/getin');
                    } else {
                        alert("invalid credentials")
                    }

                }).catch(function (error) {
                    console.log(error);
                });

        }
    }
  render() {
    return (
      <div className="App">
        <div className="g1">
          <h4>Admin login</h4>
            <form>
        <input type="text" placeholder="VRO/VRA/SURPANCH" value={this.state.aname} onChange={(e)=>{this.setState({...this.state.aname,aname:e.target.value})}}/>
        <br/>  <input type="password" placeholder="Enter password" value={this.state.password} onChange={(e)=>{this.setState({...this.state.password,password:e.target.value})}}/>
<br/><button className="b1" onClick={this.onSubmit}>Login</button>

            </form>

        </div>
         <div className="g2">
              <h1>E-GRAMMAM</h1>
              <h3>VOOKONDI</h3>
          </div>
          <div className="g3">
              <p> <b>Contact details:</b></p>
              <p><b>Surpanch:</b>999999999</p>
              <p><b>VRO:</b>888888888</p>
              <p><b>Doctor:</b>108</p>
              <p><b>Police:</b>100</p>


          </div>
          <div className="g4">
<br/><br/>
<nav><ul>
    <li><Link to="/person">Important Person Details</Link></li><br/>
    <li><Link to='/scheme'>Scheme's</Link></li><br/>
    <li><Link to='/funds'>Funds and Development</Link></li><br/>
    <li><Link to='/inf'>Schools, Colleges and Hospitals </Link></li><br/>
    <li><Link to='/tourism'>Tourist's Spot</Link></li><br/>
    <li><Link to='/complaints'>Complaints</Link></li><br/>
    <li><Link to='/donations'>Donations</Link> </li><br/>
    <li><Link to='/lwc'>Land, Water and Crop details</Link></li><br/>
    <li><Link to='/dev'>Developing village as Smart village</Link></li><br/>
    <li><Link to='/edu'>Population and Education details</Link></li><br/>
    <li><Link to='/his'>Famous Persons</Link></li><br/>
    <li><Link to='/more'>	More</Link></li>
    <li><h4 className="Mo"><Link to='/mo'>	Mandal Officer login</Link></h4></li>
</ul>
</nav>
          </div>

      </div>
    );
  }
}

export default App;

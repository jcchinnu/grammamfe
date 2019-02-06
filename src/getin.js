import React,{Component} from 'react';
import './getin.css'
import IMP from "./imp";
import COM from './com';
import Dono from "./dono";
class Getin extends Component{
    state={
       display:(<h1>Welcome</h1>)
    }
    onClickHandler=(e)=>{
        let val=e.target.value;
        console.log(val);
      e.preventDefault();
      if(val===0){
         this.setState({display:<IMP/>})
      }
      else if(val===1){
          this.setState({display:<COM/>})
      }
      else if(val===2){
          this.setState({display:<Dono/>})
      }

    }
    render(){
        return(
            <div style={{height:'100vh',background:'white'}}>
                <div className="SideBar">
                <ul>
                    <li onClick={this.onClickHandler} value={0}>Important person details</li>
                    <li onClick={this.onClickHandler} value={1}>Complaints</li>
                    <li onClick={this.onClickHandler} value={2}>Donations</li>
                </ul>
                </div>
                <div className={'Display'}>
                    {this.state.display}
                </div>
            </div>
        )
    }
}
export default Getin;
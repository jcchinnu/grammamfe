import React,{Component} from 'react';
import './getin.css'
import IMP1 from "./imp1";
import COM from './com';
import Fun from './fun'
import Dono from "./dono";
class Getinc extends Component{
    state={
        display:(<h1>Welcome</h1>)
    }
    onClickHandler=(e)=>{
        let val=e.target.value;
        console.log(val);
        e.preventDefault();
        if(val===0){
            this.setState({display:<IMP1/>})
        }
        else if(val===1){
            this.setState({display:<COM/>})
        }
        else if(val===2){
            this.setState({display:<Dono/>})
        }
        else if(val===3){
            this.setState({display:<Fun/>})
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
                        <li onClick={this.onClickHandler} value={3}>Funds from Government</li>
                    </ul>
                </div>
                <div className={'Display'}>
                    {this.state.display}
                </div>
            </div>
        )
    }
}
export default Getinc;
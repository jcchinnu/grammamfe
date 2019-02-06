import React,{Component} from 'react';
import './payment.css'
class Payment extends Component {
    constructor(){
        super();
        this.state={
            cardno:"",
            month:"",
            cvv:"",
            hname:""
        }
    }
    onSubmit=(e)=>{
        alert("you have successfully donated money,Thank you");
        this.props.history.push('/')
    }
render(){
    return(
        <div className="pay">
            <form>Payment Information:<br/>
                <input type="text" size="30"  value={this.state.hname} placeholder="Name on card" onChange={(e)=>{this.setState({...this.state.hname,hname:e.target.value})}}/><br/>
                <input type="text" size="30" value={this.state.cardno} placeholder="card number" onChange={(e)=>{this.setState({...this.state.cardno,cardno:e.target.value})}}/><br/>
                <input type="text" size="18" value={this.state.month} placeholder="MM/YY" onChange={(e)=>{this.setState({...this.state.month,month:e.target.value})}}/>
                <input type="text" size="8" value={this.state.cvv} placeholder="CVV" onChange={(e)=>{this.setState({...this.state.cvv,cvv:e.target.value})}}/><br/>
                <br/><button onClick={this.onSubmit}>Proceed with payment</button>
            </form>

        </div>
    )
}
}
export default Payment;
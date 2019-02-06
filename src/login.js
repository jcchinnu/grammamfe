import React,{Component} from 'react';
class Login extends Component{
    constructor(){
        super();
        this.state={
            aname:"",
            password:""
        }
    }
    onsubmit=(e)=>{
        e.preventDefault();
        this.props.history.push('/login')
    }
    render(){
        return(
            <div className="admin">
                <b>
                    <form>
                        Admin name:
                        <input type="text" value={this.state.aname} onChange={(e)=>{this.setState({...this.state.aname,aname:e.target.value})}}/>
                        Password:
                        <input type="password" value={this.state.password} onChange={(e)=>{this.setState({...this.state.password,password:e.target.value})}}/>
                        <button onClick={this.onsubmit}>Login</button>
                    </form>
                </b>
            </div>
        )
    }
}
export default Login;
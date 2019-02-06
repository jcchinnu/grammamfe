import React,{Component} from 'react';
class MO extends Component{
    constructor(){
        super();
        this.state={
            mname:"",
            mpassword:""
        }
    }
    onsubmit=(e)=> {
        e.preventDefault();
        if (this.state.mname === "") {
            alert("please enter name");
        } else if (this.state.mpassword === "") {
            alert("please enter your password");
        } else {

            fetch('http://localhost:3001/mo/' + this.state.mname,)
                .then(function (response) {
                    return response.json();

                }).then(data => {
                console.log(data);
                if (data[0].mpassword === this.state.mpassword) {
                    this.props.history.push('/getinc');
                } else {
                    alert("invalid credentials")
                }

            }).catch(function (error) {
                console.log(error);
            });

        }
    }
    render(){
        return(
            <div className="admin">
                <b>
                    <form>
                        Mandal Officer:<br/>
                        <input type="text" value={this.state.mname} onChange={(e)=>{this.setState({...this.state.mname,mname:e.target.value})}}/>
                       <br/> Password:<br/>
                        <input type="password" value={this.state.mpassword} onChange={(e)=>{this.setState({...this.state.mpassword,mpassword:e.target.value})}}/>
                       <br/> <button className={'b1'} onClick={this.onsubmit}>Login</button>
                    </form>
                </b>
            </div>
        )
    }
}
export default MO;
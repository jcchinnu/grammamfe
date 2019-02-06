import React,{Component} from 'react';
import queryString from 'query-string';
class Update extends Component{
    constructor(){
        super();
        this.state={
            pname:"",
            position:"",
            phoneno:"",
            avtime:""
        }
    }
    componentDidMount() {
       let parsed= queryString.parse(this.props.location.search);
        this.setState({pname:parsed.pname,position:parsed.position,phoneno:parsed.phoneno,avtime:parsed.avtime});
    }
    onsubmit=(e)=>{
        e.preventDefault();
        fetch('http://localhost:3001/imp', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pname: this.state.pname,
                position:this.state.position,
                phoneno:this.state.phoneno,
                avtime:this.state.avtime
            })
        })
            .then(function(response) {
                console.log(response);

            }).catch(function(error) {
            console.log(error);
        });

        alert("Data successfully updated ");
        this.setState({
            pname:"",
            position:"",
            phoneno:"",
            avtime:""
        })
    }
    render(){
        console.log(this.props);
        return(
            <div className="admin">
                <b>
                    <form>
                        Name:<br/>
                        <input type="text" value={this.state.pname} onChange={(e)=>{this.setState({...this.state.pname,pname:e.target.value})}}/>
                        <br/>Position:<br/>
                        <input type="text" value={this.state.position} onChange={(e)=>{this.setState({...this.state.position,position:e.target.value})}}/>
                        <br/>Phone Number:<br/>
                        <input type="text" value={this.state.phoneno} onChange={(e)=>{this.setState({...this.state.phoneno,phoneno:e.target.value})}}/>
                        <br/>Available Time:<br/>
                        <input type="text" value={this.state.avtime} onChange={(e)=>{this.setState({...this.state.avtime,avtime:e.target.value})}}/>
                        <br/><button className="b1" onClick={this.onsubmit}>Update</button>

                    </form>
                </b>
            </div>
        )
    }
}
export default Update;
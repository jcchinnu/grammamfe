import React,{Component} from 'react';
import queryString from 'query-string';
class Update1 extends Component{
    constructor(){
        super();
        this.state={
            uscheme:"",
            amount:"",
            wrv:""
        }
    }
    componentDidMount() {
        let parsed= queryString.parse(this.props.location.search);
        this.setState({uscheme:parsed.uscheme,amount:parsed.amount,wrv:parsed.wrv});
    }
    onsubmit=(e)=>{
        e.preventDefault();
        fetch('http://localhost:3001/fun', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uscheme: this.state.uscheme,
                amount:this.state.amount,
                wrv:this.state.wrv,
            })
        })
            .then(function(response) {
                console.log(response);

            }).catch(function(error) {
            console.log(error);
        });

        alert("Data successfully updated ");
        this.setState({
            uscheme:"",
            amount:"",
            wrv:"",
        })
    }
    render(){
        console.log(this.props);
        return(
            <div className="admin">
                <b>
                    <form>
                        Under Scheme:<br/>
                        <input type="text" value={this.state.uscheme} />
                        <br/>Amount:<br/>
                        <input type="text" value={this.state.amount}/><br/>
                        Wheather Reached villagers:<br/>
                        <input type="text" value={this.state.wrv} onChange={(e)=>{this.setState({...this.state.wrv,wrv:e.target.value})}}/>
                        <br/><button className="b1" onClick={this.onsubmit}>Update</button>

                    </form>
                </b>
            </div>
        )
    }
}
export default Update1;
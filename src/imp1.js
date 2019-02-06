import React,{Component} from 'react';
import './person.css'
import {Link, withRouter} from 'react-router-dom';
class IMP1 extends Component{
    state={
        data:[]
    }

    componentDidMount() {
        fetch('http://localhost:3001/imp/')
            .then(function(response) {
                return response.json();

            }).then(data =>{
            console.log(data);
            this.setState({data:data})}

        )
    }
    onUpdate=(e)=>{
        let position=e.target.parentNode.getElementsByClassName('Position')[0].innerHTML;
        const data=this.state.data.find(value => {
            return position===value.position;
        })
        e.preventDefault();
        this.props.history.push('/update?'+'pname='+data.pname+'&position='+data.position+'&phoneno='+data.phoneno+'&avtime='+data.avtime);
    }
    Delete=(e)=>{
        console.log();
        let position=e.target.parentNode.getElementsByClassName('Position')[0].innerHTML;
        e.preventDefault();
        fetch('http://localhost:3001/imp', {
            method: 'delete',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(this.state.data.find(value => {
                return position===value.position;
            }) )
        })
            .then(function(response) {
                console.log(response);
                //  return response.json();

            }).catch(function(error) {
            console.log(error);
        });

        const newData=this.state.data.filter((value)=>{
            return value.position != position;

        });
        this.setState({data:newData})
    }
    render(){
        let displayData=[];
        for(let data of this.state.data){

            displayData.push(
                <div key={data.position} className="p2">
                    <p><strong>Name:</strong>{data.pname}</p>
                    <p ><strong>Position:</strong><span className={'Position'} >{data.position}</span></p>
                    <p><strong>Phoneno:</strong>{data.phoneno}</p>
                    <p><strong>Available Time:</strong>{data.avtime}</p>
                    <button className="bu1" onClick={this.onUpdate}>Update</button>
                    <button className="bu1"onClick={this.Delete}>Delete</button>
                </div>)

        }
        return(
            <div className="person">
                {displayData}
                <Link to="/add">Add a new details</Link>

            </div>
        )
    }
}
export default withRouter(IMP1);
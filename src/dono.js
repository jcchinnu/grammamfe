import React,{Component} from 'react';
import './person.css'
class Dono extends Component{
    state={
        data:[]
    }

    componentDidMount() {
        fetch('http://localhost:3001/donations/')
            .then(function(response) {
                return response.json();

            }).then(data =>{
            console.log(data);
            this.setState({data:data})}

        )
    }
    render(){
        let displayData=[];
        for(let data of this.state.data){
            console.log(data);
            displayData.push(<div key={data.dname} className="p2">
                <p><strong>Name:</strong>{data.dname}</p>
                <p><strong>Aadhar Card Number:</strong>{data.aadhar}</p>
                <p><strong>Money Donated:</strong>{data.money}</p>
            </div>)

        }
        return(
            <div className="person">
                {displayData}

            </div>
        )
    }
}
export default Dono;
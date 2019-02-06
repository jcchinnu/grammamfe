import React,{Component} from 'react';
import './person.css'
class Person extends Component{
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
render(){
        let displayData=[];
        for(let data of this.state.data){
            console.log(data);
            displayData.push(<div key={data.pname} className="p2">
                <p><strong>Name:</strong>{data.pname}</p>
                <p><strong>Position:</strong>{data.position}</p>
                <p><strong>Phoneno:</strong>{data.phoneno}</p>
                <p><strong>Available Time:</strong>{data.avtime}</p>
            </div>)

        }
    return(
        <div className="person">
            {displayData}

        </div>
    )
}
}
export default Person;
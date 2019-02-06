import React,{Component} from 'react';
import './person.css'
class COM extends Component{
    state={
        data:[]
    }

    componentDidMount() {
        fetch('http://localhost:3001/complaints/')
            .then(function(response) {
                return response.json();

            }).then(data =>{
            console.log(data);
            this.setState({data:data})}

        )
    }
    Delete=(e)=>{
        console.log();
        let cname=e.target.parentNode.getElementsByClassName('cname')[0].innerHTML;
        e.preventDefault();
        fetch('http://localhost:3001/complaints', {
            method: 'delete',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(this.state.data.find(value => {
                return cname===value.cname;
            }) )
        })
            .then(function(response) {
                console.log(response);
                //  return response.json();

            }).catch(function(error) {
            console.log(error);
        });

        const newData=this.state.data.filter((value)=>{
            return value.cname!= cname;

        });
        this.setState({data:newData})
    }
    render(){
        let displayData=[];
        for(let data of this.state.data){
            console.log(data);
            displayData.push(<div key={data.cname} className="p2">
                <p><strong>Name:</strong><span className={'cname'}>{data.cname}</span></p>
                <p><strong>Complaint:</strong>{data.compl}</p>
                <button className="bu1"onClick={this.Delete}>Delete if solved</button>

            </div>)

        }
        return(
            <div className="person">
                {displayData}

            </div>
        )
    }
}
export default COM;
import React,{Component} from 'react';
import './person.css'
class Fun extends Component{
    state={
        data:[]
    }

    componentDidMount() {
        fetch('http://localhost:3001/fun/')
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
            displayData.push(
                <div>
                <div key={data.uscheme} className="p2">
                <p><strong>Under Scheme:</strong>{data.uscheme}</p>
                <p><strong>Amount:</strong>{data.amount}</p>
                <p><strong>Whether reached villagers:</strong>{data.wrv}</p>
            </div></div>)

        }
        return(
            <div className="person">
                <h2>Funds Received from Government</h2>
                {displayData}


            </div>
        )
    }
}
export default Fun;
import React,{Component} from 'react';
import './person.css'
import {Link, withRouter} from 'react-router-dom';

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
    onUpdate=(e)=>{
        let uscheme=e.target.parentNode.getElementsByClassName('Position')[0].innerHTML;
        const data=this.state.data.find(value => {
            return uscheme===value.uscheme;
        })
        e.preventDefault();
        this.props.history.push('/update1?'+'uscheme='+data.uscheme+'&amount='+data.amount+'&wrv='+data.wrv);
    }
    render(){
        let displayData=[];
        for(let data of this.state.data){
            console.log(data);
            displayData.push(
                <div>
                <div key={data.uscheme} className="p2">
                    <p><strong>Under Scheme:</strong><span className={'Position'} >{data.uscheme}</span></p>
                <p><strong>Amount:</strong>{data.amount}</p>
                <p><strong>Whether reached villagers:</strong>{data.wrv}</p>
                    <button className="bu1" onClick={this.onUpdate}>Update</button>

                </div></div>)

        }
        return(
            <div className="person">
                {displayData}
            </div>
        )
    }
}
export default withRouter(Fun);
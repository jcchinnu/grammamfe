import React,{Component} from 'react';
import './lwc.css';
class Edu extends Component{
    render(){
        return(
            <div className="lwc"><br/>
                <h2>Population and Education details:</h2>
                <ul>
                    <li>According to 2011 census the total population in vookondi village is 2,274 in 481 households.</li>
                    <li>Among them male population is 1,178 and female population is 1096.</li>
                    <li>There are 1,111 total literates in this village.</li>
                    <li>The total village literacy rate is 53.5% and the female literacy rate is 21.3%.</li>
                    <li>Govt Primary, Govt Middle and Govt Secondary Schools are available in this Village. Nearest Private Medical College is in Narketpalle. Nearest Private Pre Primary School and Private Senior Secondary School are in Munugode. </li>
               <li> Nearest Govt Disabled School, Govt Arts and Science Degree College, Private Engineering College, Private MBA college, Govt Polytechnic College and Govt ITA College are in Nalgonda.</li>
                </ul>
            </div>
        )
    }
}
export default Edu;
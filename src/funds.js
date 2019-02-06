import React,{Component} from 'react';
import classes from './funds.module.css'


class Funds extends Component{
    render(){
        const psty={
            margin:'0'
        }
        const divstyle={
            textDecoration:'underline'}
        return(
            <div className={classes.funds}>
                <br/>
                <h3 style={divstyle}>Funds from Government:</h3>
                <p style={psty}> The Telangana government launched 'Grama Jyothi', a new scheme for empowering villages.Chief Minister K. Chandrashekar Rao formally launched the scheme at Gangadevipally, a village in Warangal district.



                    The state government plans to spend Rs.25,000 crore for the development of villages over the next four years under this ambitious project.</p>
                <p style={psty}>    Grama Jyothi is aimed at strengthening villages in areas like water and sanitation, health and nutrition, education, social security and poverty eradication, natural resources management, agriculture and infrastructure.

                    It will ensure inclusive and holistic development of villages through people's participation in planning and collective decision-making.</p>
                <p style={psty}>Each village will be allocated Rs.2 crore to Rs.6 crore depending on their population.</p>
                <h3 style={divstyle}>Development activities in village</h3>
                <ul>
                    <li><strong>Basic Needs Fulfillment:</strong> Literacy, Safe Drinking Water, Sanitation and Habitat.</li>
                    <li><strong>Institutional Strengthening:</strong> Youth Club, Children’s Club, Women Self Help Groups (SHGs), Farmer’s Clubs.</li>
                    <li><strong>Employability:</strong> Vocational and Life Skills for Youth and Women.</li>
                    <li><strong>Enterprise Development: </strong>Setting up of Micro-Enterprises.</li>
                    <li><strong>Clean Technology:</strong> Use of Renewable Energy for Domestic/Commercial Use.</li>
                </ul>

            </div>

        )
    }
}
export default Funds;
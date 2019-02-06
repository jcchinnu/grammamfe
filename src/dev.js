import React,{Component} from 'react';
import './lwc.css'
class Dev extends Component{
    render(){
        return(
            <div className={'lwc'}>
                <h2>Developing village as a Smart village:</h2>
                <ul>
                <li>A smart village is one where sustainable energy sources are used as a measure of development and people have access to quality education and healthcare, access to clean drinking water, sanitation and nutrition, enhanced security, gender equality and democratic engagement.</li>
                    <li>In order to develop a smart village, all the below criteria needs to be met:<br/>
                        <strong>Education:</strong> This is one of the most important aspects of developing a village. A community can only thrive when people have access to education which helps empower them with the knowledge required to create better lives for the people around them. Therefore, this is probably one of the most important criteria when it comes to developing a smart village.
                        <br/><strong>Healthcare: </strong>A unified healthcare system needs to be developed which guarantees access to healthcare for every citizen. A community cannot thrive if the people can’t even access basic healthcare.
                        <br/><strong>Access to Drinking Water and Sanitation:</strong> Clean drinking water is something that is a basic requirement for survival along with proper sanitation to ensure that people live healthy and fulfilling lives.
                    <br/><strong>Nutrition: </strong>A unified program needs to be developed where every single individual in the community has access to a nutritious diet. Regarding this, a proper plan needs to be developed that would ensure that no one goes without food.

                    </li>
  <li>Only when a village meets the above criteria and is able to deliver them without hiccups will it meet the status of a smart village.</li>
                </ul>
            </div>
        )
    }
}
export default Dev;
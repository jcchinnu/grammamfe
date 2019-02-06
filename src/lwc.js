import React,{Component} from 'react';
import './lwc.css'
class LWC extends Component{
    render(){
        return(
            <div className="lwc"><br/>
            <h2>Land, Water and Crop details:</h2>
                <ul>
            <li>Vookondi Total area is 312 hectares in which Non-Agricultural area is 14 hectares and Total irrigated area is 102 hectares. That is more than 25% of land in Vookondi is irrigated.</li>
                    <li> Agriculture commodities grow in the Vookondi village are Paddy, Cotton and Red Gram.</li>
                    <li>7 hours agricultural power supply in summer and 7 hours agricultural power supply in winter is available in this village.</li>
                    <li>Drinking water sources available in this village are Hand Pump and Tube Wells/Boreholes.</li>
                    <li> Vookondi village Covered Under Total Sanitation.</li>
                    <li> Drain water is discharged directly into water bodies.</li>
                </ul></div>
        )
    }
}
export default LWC;
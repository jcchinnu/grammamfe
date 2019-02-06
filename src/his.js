import React,{Component} from 'react';
import './lwc.css'
class HIS extends Component {
    render() {

        return (
            <div className="lwc"><br/>
                <h2>Famous persons from vookondi:</h2>
                <h3>Dharma Bhiksham:</h3>
                <div className="his">
                    <img src={require('./16.jpg')}  /></div>
                <ul>
                    <li>Bommagani Dharma Bhiksham (15 February 1922 – 26 March 2011), a veteran leader of the Communist Party of India, was a member of the 10th Lok Sabha, and 11th Lok Sabha of India. Also he was elected to Assembly three times. He represented the Nalgonda constituency of Andhra Pradesh both in the Parliament of India and Legislative Assembly of Andhra Pradesh from Communist Party of India (CPI) political party.</li>
                    <li>He also represented Hyderabad State Assembly from Suryapet constituency. He is the renowned freedom fighter during telangana peasantry arm struggle at the time of Nizam regime.</li>
                <li>He was well known trade unionist and President of All India Toddy Tappers and workers Federation.</li>
                    <li>Government of India honoured him by awarding with Thamra patra. His brother Venkataiah is also a freedom fighter.</li>
                    <li>Dharma Bhiksham died on 26 March 2011 due to cardiac arrest in Kamineni Hospital at Hyderabad.</li>
                </ul>
            </div>
        )
    }
}
export default HIS;
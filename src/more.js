import React,{Component} from 'react';
import './lwc.css';
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
const mapStyles = {
    width: '100%',
    height: '100%',
};

class More extends Component {
    render() {
        return (
            <div className="lwc"><br/>
            <h2>About vookondi:</h2>
                <ul>
                    <li>
                        Vookondi is a Village in Munugode Mandal , Nalgonda district and Telangana State. Vookondi village Pin code is 508244.
                    </li>
                    <li>Vookondi Village Gram Panchayath name is Vookondi. Vookondi is 6 km distance from Sub District HeadQuarter Munugode and it is 28 km distance from District HeadQuarter Nalgonda. Nearest Statutory Town is Nalgonda in 28 km Distance .</li>
                <li>Doddi Yadagiri is the serpanch of the vookondi village.</li>
                    <li>Pulipalupula ( 5 KM ) , Ellikatte ( 6 KM ) , Munugode ( 7 KM ) , Chinakaparthy ( 7 KM ) , Cheekatimamidi ( 8 KM ) are the nearby Villages to Vookondi. Vookondi is surrounded by Chityala Mandal towards North , Chandur Mandal towards South , Nalgonda Mandal towards East , Narayanapur Mandal towards west .
                    </li>
                    <li>Bhongir , Devarakonda , Suryapet , Miryalaguda are the near by Cities to Vookondi.
                    </li><br/>
                    <div className="m1">
                        <img src={require('./17.jpg')} /></div>
                    <li>Sub Post Office is available in this Village. LandLine available. Mobile Coverage is available. Nearest Internet Centre is in 5 - 10 km. Nearest Private Courier Facility is in 5 - 10 km.</li>
              <li>TDP , TRS , CPI , INC are the major political parties in this area. </li>
                    <li>Public Bus service available in this village. There is no Railway Station in less than 10 km. Autos Available in this Village. Tractors Available in this Village. Animal Driven Carts are there in this Village. </li>
                </ul><br/>
                <h4>Map:</h4>
                <div className='m2'>
                    <Map

                        google={this.props.google}
                        zoom={14}
                        style={mapStyles}
                        initialCenter={{
                            lat:17.127801,
                            lng: 79.076983


                        }}>
                        <Marker onClick={this.onMarkerClick}
                                label={{text:'Vookondi village',color:'white'}}

                        />
                    </Map>

                </div>
            </div>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyC8aHQ5SakGKB1-AWEs_oLBQtQu48fcQsc'
})(More);
import React, { Component } from 'react';
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
const mapStyles = {
    width: '100%',
    height: '100%',
};

class Tourism extends Component{
    render(){
        const divstyle={
            textDecoration:'underline'}
        const psty={
            margin:'0'
        }
        return(
            <div className="inf">
                <br/>
                <h3 style={divstyle}>Tourist's places in and around Vookondi:</h3>
                <ul>
                    <li>
                        <strong>  Hanuman temple</strong>

                        <p> Hanuman temple is located 0.7KM away from vookondi and it is one of the famous temple in vookondi.</p>
    <h4>Map:</h4>
                        <div className='map1'>
                            <Map

                                google={this.props.google}
                                zoom={14}
                                style={mapStyles}
                                initialCenter={{
                                    lat:17.134118,
                                    lng:79.073890


                                }}>
                                <Marker onClick={this.onMarkerClick}
                                        label={{text:'Hanuman Temple',color:'white'}}

                                />
                            </Map>

                        </div>
                    </li>
                    <br/>
                </ul>

            </div>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyC8aHQ5SakGKB1-AWEs_oLBQtQu48fcQsc'
})(Tourism);
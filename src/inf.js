import React,{Component} from 'react';
import './inf.css'
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
const mapStyles = {
    width: '100%',
    height: '100%',
};
class Inf extends Component{
    render(){
        const divstyle={
            textDecoration:'underline'}
        const psty={
            margin:'0'
        }
        return(
            <div className="inf">
                <br/>
                <h3 style={divstyle}>Schools in and around Vookondi:</h3>
                <ol>
                    <li>
                      <strong>  Zilla Parishat High School
                          Kompalle:</strong>
                        <p>Zilla Parishad High School (ZPHS), Kompally was established in 1969. Zilla Parishad High School (ZPHS), Kompally is a Co-ed located at Kompalle, Munugode in Nalgonda district of Telangana, India. It is affiliated with Telangana Board of Secondary Education. Zilla Parishad High School (ZPHS), Kompally is a higher secondary,. It is owned and operated by the Local Body. And it is 3KM away from vookondi</p>
                        <h4>Map:</h4>
                        <div className='map1'>
                            <Map

                                google={this.props.google}
                                zoom={14}
                                style={mapStyles}
                                initialCenter={{
                                    lat:17.080735,
                                    lng:79.071985


                                }}>
                                <Marker onClick={this.onMarkerClick}
                                        label={{text:'Zilla Parishat High School Kompalle',color:'white'}}

                                />
                            </Map>

                        </div>
                    </li>
                <br/>
                    <li> <strong> St.Anthony's Girls High School
                        Kammagudem, Munugodu:</strong>
                        <p>St.Anthony's Girls High School
                            Kammagudem, was established in 2008. It's telephone number is (8681)247978 and it is 5.5KM away from vookondi</p>
                        <h4>Map:</h4>
                        <div className='map1'>
                            <Map
                                google={this.props.google}
                                zoom={14}
                                style={mapStyles}
                                initialCenter={{
                                    lat:17.075753,
                                    lng: 79.072406,
                                }}>
                                <Marker onClick={this.onMarkerClick}
                                        label={{text:'St.Anthony\'s Girls High School\n' +
                                                '                        Kammagudem',color:'white'}}

                                />
                            </Map></div>
                    </li> <br/>
                    <li> <strong>St.Joseph's High School
                        Munugodu</strong>
                        <p>St. Joseph High School is located at , Chandur Road Munugode in Nalgonda district of Telangana, India. It is affiliated with Telangana Board of Secondary Education. St. Joseph High School is a high secondary school,nursery school,primary school,private school. And it is a distance of 6.2KM away from vookondi</p>
                        <h4>Map:</h4>
                        <div className='map1'>
                            <Map
                                google={this.props.google}
                                zoom={14}
                                style={mapStyles}
                                initialCenter={{
                                    lat:17.075827,
                                    lng:79.072392
                                }}>
                                <Marker onClick={this.onMarkerClick}
                                        label={{text:'St.Joseph\'s High School\n' +
                                                '                        Munugodu',color:'white'}}

                                />
                            </Map></div></li>
                </ol> <br/>
                <h3 style={divstyle}>Colleges in and around Vookondi:</h3>
                <ol>
<li><strong>Sri Siddhartha College Munugodu
    </strong>
    <p>Sri Siddhartha College is established in 2013 and it is affilated to Mahatma Gandhi University.Courses Offered at Sri Siddhartha Degree College, Munugode Nalgonda are B.COM,B.Sc etc.</p>
    <h4>Map:</h4>

    <div className='map1'>
        <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
                lat:17.077063,
                lng:79.073526
            }}>
            <Marker onClick={this.onMarkerClick}
                    label={{text:'Sri Siddhartha College Munugodu',color:'white'}}/>
        </Map></div>

     </li> <br/>
                    <li><strong>Ramakrishna Junior College Munugodu</strong>
                        <p>RAMAKRISHNA JR COLLEGE MUNUGODU was established in 1987 and it is managed by the Pvt. Unaided. It is located in Rural area. It is located in MUNUGODE block of NALGONDA district of Telangana. The school consists of Grades from 11 to 12. The school is Co-educational and it doesn't have an attached pre-primary section. The school is Not Applicable in nature and is not using school building as a shift-school. Telugu is the medium of instructions in this school. This school is approachable by all weather road. In this school academic session starts in April. </p>
                        <h4>Map:</h4>
                        <div className='map1'>
                            <Map
                                google={this.props.google}
                                zoom={14}
                                style={mapStyles}
                                initialCenter={{
                                    lat:17.072775,
                                    lng:79.071490
                                }}>
                                <Marker onClick={this.onMarkerClick}
                                        label={{text:'Ramakrishna Junior College Munugodu',color:'white'}}/>
                            </Map></div></li> <br/>
                </ol>
                <h3 style={divstyle}>Hospitals in and around Vookondi:</h3>
                <ol>
                    <li><strong>Sai Charan Maternity Hospital Munugodu</strong>
                    <p>Sai Charan Maternity Hospital is located 6.3KM away from vookondi and is opened 24hrs.</p>
                        <h4>Map:</h4>
                        <div className='map1'>
                            <Map
                                google={this.props.google}
                                zoom={14}
                                style={mapStyles}
                                initialCenter={{
                                    lat:17.082555,
                                    lng: 79.074688
                                }}>
                                <Marker onClick={this.onMarkerClick}
                                        label={{text:'Sai Charan Maternity Hospital Munugodu',color:'white'}}/>
                            </Map></div>
                    </li>
                    <li><strong>Govt Hospital Munugode</strong>
                        <p>Govt Hospital is located 6.7KM away from vookondi and is opened 24hrs.</p>
                        <h4>Map:</h4>
                        <div className='map1'>
                            <Map
                                google={this.props.google}
                                zoom={14}
                                style={mapStyles}
                                initialCenter={{
                                    lat:17.079326,
                                    lng: 79.076723
                                }}>
                                <Marker onClick={this.onMarkerClick}
                                        label={{text:'Govt Hospital Munugode',color:'white'}}/>
                            </Map></div>
                       </li>
                    <li>
                        <strong>Giri Hospital</strong>
                        <p>Giri Hospital is located 7.2KM away from vookondi and is opened 24hrs and it's phone number is 095501 91408</p>
                        <h4>Map:</h4>
                        <div className='map1'>
                            <Map
                                google={this.props.google}
                                zoom={14}
                                style={mapStyles}
                                initialCenter={{
                                    lat:17.038348,
                                    lng: 79.046116
                                }}>
                                <Marker onClick={this.onMarkerClick}
                                        label={{text:'Giri Hospital',color:'white'}}/>
                            </Map></div>


                    </li>
                </ol>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyC8aHQ5SakGKB1-AWEs_oLBQtQu48fcQsc'
})(Inf);
import React from 'react';
import styled from 'styled-components';
import getUserLocation from '../services/location.service';
import Map from '../components/Map';

const MapStyled = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  .title-background {
    top: 10px;
    padding: 15px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    box-shadow: 0px 0px 13px 4px rgba(0,0,0,0.75);

    .title {
      margin: 0;
      color: #fff;
      text-shadow:
        -1px -1px 0 #000,  
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
    }
  }
  
`

class MapContainer extends React.Component {
  state = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11,
    city: '',
    country: ''
  }

  render() {
    return (
      <MapStyled>
        <div className="title-background">
          <h1 className="title">{`${this.state.city}, ${this.state.country}`}</h1>
        </div>
        <Map lat={this.state.center.lat} lng={this.state.center.lng} />
      </MapStyled>
    )
  }

  async componentDidMount() {
    const body = await getUserLocation();
    this.setState({
      center: {
        lat: body.latitude, lng: body.longitude
      }, 
      city: body.city,
      country: body.country_name
    })
  }
}

export default MapContainer;
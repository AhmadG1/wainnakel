import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import locationPin from "../images/locationPin.svg";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Maps extends Component {
  state = {
    center: {
      lat: 26.3,
      lng: 50.19
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          urlKeys={{ key: "AIzaSyCozb3cGyD54B_PrkaxkxhXQxdo7vud4bc" }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <AnyReactComponent
            lat={this.props.lat}
            lng={this.props.lon}
            icon={locationPin}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Maps;

import React, { Component } from "react";
import Maps from "./Maps";
import axios from "axios";

class PlacesList extends Component {
  state = {};
  componentDidMount() {
    // Handeling API Calls using axios
    axios
      .get(
        `https://wainnakel.com/api/v1/GenerateFS.php?uid=26.2716025,50.2017993&get_param=value`
      )
      .then(res => {
        const restaurant = res.data;
        this.setState({ place: restaurant });
      });
  }

  render() {
    return (
      <div>
        <div>
         {/* Showing the result from the API data to the page after a click event */}
          {!this.state.place ? (
            <p>Loading..........</p>
          ) : (
            <div>
              <div>
                <div>
                  <h2>{this.state.place.name}</h2>
                  <div>
                    {this.state.place.open == 1 ? (
                      <h5>Open</h5>
                    ) : (
                      <h5>Close</h5>
                    )}
                  </div>
                  <h5>Rating:</h5> {this.state.place.rating}
                </div>
              </div>
              <div>
                <img alt="Restaurant Image" src={this.state.place.image[0]} />
              </div>

              <Maps lon={this.state.place.lon} lat={this.state.place.lat} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PlacesList;

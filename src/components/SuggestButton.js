import React, { Component } from "react";
import PlacesList from "./PlacesList";

class SuggestButton extends Component {
  state = {};
  showRestaurant() {
    this.setState({
      show: true
    });
  }
  render() {
    return (
      <div>
        <div>
          {/* a Click event to show PLacesList (data from API calls) on screen */}
          <div className="button" onClick={() => this.showRestaurant()}>
            اقترح
          </div>
        </div>
        {this.state.show ? <PlacesList /> : ""}
      </div>
    );
  }
}

export default SuggestButton;

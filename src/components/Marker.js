import React, { Component } from "react";
import { Marker, InfoWindow } from "react-google-maps";

class MyMarker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

	// Toggles InfoWindow 
  onMarkerClick = (marker) => {
		//console.log('on toggle', this.state.isOpen)
		if(this.state.isOpen){
    	this.setState({
      	isOpen: false
		})} else {
			this.setState({
				isOpen: true
		})}
	};


  render() {
		//console.log('render marker')
    return (
      <Marker
        key={this.props.index}
        position={{ lat: 36.1081458, lng: -115.172774 }}
        // label='Test'
        onClick={() => this.onMarkerClick(this)}
      >
        {this.state.isOpen && (
					<InfoWindow 
						onCloseClick={() => this.onMarkerClick(this)}
						>
            <p>TEST123</p>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

export default MyMarker;

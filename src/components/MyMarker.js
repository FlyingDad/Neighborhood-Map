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
  onMarkerClick = () => {
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
        position={{ lat: this.props.position.lat, lng: this.props.position.lng }}
        // label='Test'
        onClick={() => this.onMarkerClick()}
      >
        {this.state.isOpen && (
					<InfoWindow 
						onCloseClick={() => this.onMarkerClick()}
						>
            <p>{this.props.info}</p>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

export default MyMarker;

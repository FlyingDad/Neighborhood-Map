import React, { Component } from "react"
import PropTypes from 'prop-types'
import { Marker, InfoWindow } from "react-google-maps"
import Gallery from './gallery'

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
    if (this.state.isOpen) {
      this.setState({
        isOpen: false
      });
    } else {
      this.setState({
        isOpen: true
      });
    }
	}
	
	viewPhotos() {
		Gallery(['testg'])
	}

  render() {
		//console.log('render marker')
		const photoId = this.props.photoId
    return (
      <Marker
        key={this.props.index}
        position={{
          lat: this.props.position.lat,
          lng: this.props.position.lng
        }}
        // label='Test'
        onClick={() => this.onMarkerClick()}
      >
        {this.state.isOpen && (
          <InfoWindow onCloseClick={() => this.onMarkerClick()}>
            <div className='info-window'>
              <h2>{this.props.info}</h2>
							<p><img src={require('./img/' + photoId + '.jpg')} alt={photoId}/></p>
              <p className='view-photos' onClick={this.viewPhotos}>View photos</p>
            </div>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

MyMarker.propTypes = {
	info: PropTypes.string.isRequired,
	photoId: PropTypes.string.isRequired,
	position: PropTypes.object.isRequired,
}

export default MyMarker;

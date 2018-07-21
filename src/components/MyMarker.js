import React, { Component } from "react"
import PropTypes from 'prop-types'
import { Marker, InfoWindow } from "react-google-maps"
import VenueLightbox from './Lightbox'

class MyMarker extends Component {
  constructor(props) {
    super(props);

    this.state = {
			isOpen: false,
			showPhotos: false
    };
  }

  // Toggles InfoWindow
  onMarkerClick = () => {
    if (this.state.isOpen) {
      this.setState({
				isOpen: false,
				//this turns off the lightbox so it is reset
				showPhotos: false
      });
    } else {
      this.setState({
        isOpen: true
      });
    }
	}
	
	viewPhotos() {
		this.setState({showPhotos: true})
	}

  render() {
		const photoId = this.props.photoId
    return (
      <Marker
        key={this.props.index}
        position={{
          lat: this.props.position.lat,
          lng: this.props.position.lng
        }}
        onClick={() => this.onMarkerClick()}
      >
        {this.state.isOpen && (
          <InfoWindow onCloseClick={() => this.onMarkerClick()}>
            <div className='info-window'>
              <h2>{this.props.info}</h2>
							<p><img src={require('./img/' + photoId + '.jpg')} alt={photoId}/></p>
              <p className='view-photos' onClick={this.viewPhotos.bind(this)}>View photos</p>
            </div>
          </InfoWindow>
				)}
				{this.state.showPhotos && (
					<VenueLightbox venue={this.props.photoId}/>
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

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  withGoogleMap,
  GoogleMap
} from 'react-google-maps'
import MyMarker from './MyMarker'

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
			map: null
    }
  }

  mapLoaded(map) {
    // We only need to save the ref one time
    if (this.state.map != null) return
    // reference to map stores in state
    this.setState({ map: map })
  }

  render() {
		const markers = this.props.markers || []
    return (
      <GoogleMap
        //get a ref to the GoogleMap dom
        ref={this.mapLoaded.bind(this)}
        center={this.props.center}
        defaultZoom={this.props.zoom}
        //onDragEnd={this.mapmoved.bind(this)}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          styles: [
            { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
            {
              elementType: 'labels.text.stroke',
              stylers: [{ color: '#242f3e' }]
            },
            {
              elementType: 'labels.text.fill',
              stylers: [{ color: '#746855' }]
            },
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#d59563' }]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#009999' }]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{ color: '#263c3f' }]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#6b9a76' }]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{ color: '#38414e' }]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{ color: '#212a37' }]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#9ca5b3' }]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{ color: '#746855' }]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{ color: '#1f2835' }]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#f3d19c' }]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{ color: '#2f3948' }]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#d59563' }]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#17263c' }]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#515c6d' }]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{ color: '#17263c' }]
            }
          ]
        }}
      >
        {markers.map((marker, index) => (
					<MyMarker key={marker.ll.lat + marker.ll.lng} 
					position={marker.ll}
					info={marker.name}
					photoId={marker.photoId}
					markerBounce={marker.bounce}
					>
          </MyMarker>
        ))}
      </GoogleMap>
    )
  }
}

Map.propTypes = {
	center: PropTypes.object.isRequired,
	markers: PropTypes.array.isRequired,
	zoom: PropTypes.number.isRequired
}

// withGoogleMap is a Higher Order Component (HOC), so we wrap the map in it
export default withGoogleMap(Map)

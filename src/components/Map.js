import React, { Component } from 'react';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";


class Map extends Component {

	constructor(props) {
		super(props)
		this.state = {
			map: null
		}
	}

	mapmoved(){
		console.log('Map moved: ' + JSON.stringify(this.state.map.getCenter()))
	}

	mapLoaded(map){
		// We only need to save the ref one time
		if(this.state.map !=null)
			return
		// reference to map stores in state
		this.setState({map: map})
	}

	render() {
		console.log('Map render')
		const markers = this.props.markers || []
		return (
			<GoogleMap
				//get a ref to the GoogleMap dom
				ref={this.mapLoaded.bind(this)}
				defaultCenter={this.props.center}
				defaultZoom={this.props.zoom}
				onDragEnd={this.mapmoved.bind(this)}
				options={{streetViewControl: false, mapTypeControl: false,
					styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#00ff00'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
				}}
  		>
			{markers.map((marker, index) =>
			    	<Marker
						key={marker.lat+marker.lng}
						position={{ ...marker }}
					/>
			)}

  		</GoogleMap>
		)
	}
}

// withGoogleMap is a Higher Order Component (HOC), so we wrap the map in it
export default withGoogleMap(Map)
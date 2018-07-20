import React, { Component } from "react"
import PropTypes from 'prop-types'
import {
  withGoogleMap,
  GoogleMap
} from "react-google-maps";
import MyMarker from "./MyMarker"

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
			map: null
			// center: {
			// 	lat: 36.1081458,
			// 	lng: -115.172774
			// },
			// ll: {
			// 	lat: 36.1081458,
			// 	lng: -115.172774
			// }
    };
  }

  mapmoved() {
		// console.log("Map moved: " + JSON.stringify(this.state.map.getCenter()));
		//let movedLocation = JSON.stringify(this.state.map.getCenter())
		//movedLocation = JSON.parse(movedLocation)
		//console.log(movedLocation)
		//this.state.map.setCenter({lat: 36.1081458, lng: -115.172774})
		//this.setState({ll: {lat: movedLocation.lat, lng: movedLocation.lng}})
		//this.setState({center: {lat: 36.1081458, lng: -115.172774}})
  }

  mapLoaded(map) {
    // We only need to save the ref one time
    if (this.state.map != null) return;
    // reference to map stores in state
    this.setState({ map: map });
  }

  render() {
		//console.log("Map render");
		//console.log(this.props.center)
		const markers = this.props.markers || [];
    return (
      <GoogleMap
        //get a ref to the GoogleMap dom
        ref={this.mapLoaded.bind(this)}
        center={this.props.center}
        defaultZoom={this.props.zoom}
        onDragEnd={this.mapmoved.bind(this)}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          styles: [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            {
              elementType: "labels.text.stroke",
              stylers: [{ color: "#242f3e" }]
            },
            {
              elementType: "labels.text.fill",
              stylers: [{ color: "#746855" }]
            },
            {
              featureType: "administrative.locality",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }]
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [{ color: "#009999" }]
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [{ color: "#263c3f" }]
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [{ color: "#6b9a76" }]
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#38414e" }]
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [{ color: "#212a37" }]
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [{ color: "#9ca5b3" }]
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [{ color: "#746855" }]
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [{ color: "#1f2835" }]
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.fill",
              stylers: [{ color: "#f3d19c" }]
            },
            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [{ color: "#2f3948" }]
            },
            {
              featureType: "transit.station",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }]
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#17263c" }]
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{ color: "#515c6d" }]
            },
            {
              featureType: "water",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#17263c" }]
            }
          ]
        }}
      >
        {markers.map((marker, index) => (
					<MyMarker key={marker.ll.lat + marker.ll.lng} 
					position={marker.ll}
					info={marker.name}
					photoId={marker.photoId}
					>
          </MyMarker>
        ))}
      </GoogleMap>
    );
  }
}

Map.propTypes = {
	center: PropTypes.object.isRequired,
	markers: PropTypes.array.isRequired,
	zoom: PropTypes.number.isRequired
}

// withGoogleMap is a Higher Order Component (HOC), so we wrap the map in it
export default withGoogleMap(Map);

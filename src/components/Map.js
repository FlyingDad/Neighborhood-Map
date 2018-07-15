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
		const markers = this.props.markers || []
		return (
			<GoogleMap
				ref={this.mapLoaded.bind(this)}
    		defaultZoom={4}
				defaultCenter={this.props.center}
				defaultZoom={this.props.zoom}
				onDragEnd={this.mapmoved.bind(this)}
  		>
			{markers.map((marker, index) =>
			    	<Marker
						position={{ ...marker }}
					/>
			)}

  		</GoogleMap>
		)
	}
}

export default withGoogleMap(Map)
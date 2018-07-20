import React, { Component } from 'react';
import './App.css';
import Options from './components/Options'
import Map from './components/Map'
import { getVenuInfo } from './components/Fouresquare'
import { getFlickrData } from './util/Flickr'

const MyMarkers = [
	{
		name: 'Luxor Hotel & Casino', 
		ll: {lat: 36.09551, lng: -115.176},
		photoId: 'luxor'
	},
	{
		name: 'Paris Las Vegas',
		ll: { lat: 36.1125414, lng: -115.170},
		photoId: 'paris'
	},
	{
		name: 'Bellagio Hotel & Casino',
		ll: { lat: 36.1125414, lng: -115.176},
		photoId: 'bellagio'
	},
	{
		name: 'The Venetian',
		ll: { lat: 36.121174, lng:-115.1688466},
		photoId: 'venetian'
	},
	{
		name: 'Excalibur Hotel & Casino',
		ll: { lat: 36.0987653, lng: -115.1755},
		photoId: 'excalibur'		
	},
	{
		name: 'New York-New York Hotel & Casino',
		ll: { lat: 36.1017723, lng: -115.1745215},
		photoId: 'newyork'
	}
]
class App extends Component {

	constructor(props){
		super(props)
		this.state={
			reset: 0,
			homeCoords: {
				lat: 36.1081458,
				lng: -115.172774
			},
			markers: MyMarkers,
			filteredMarkers: MyMarkers
		}
	}

	componentDidMount(){
		//this.fetchFourSquareData()
		//this.fetchYelpData()
		//this.setState({filteredMarkers: this.state.markers})
		//this.fetchFlickrData()
	}

	fetchFourSquareData() {
		getVenuInfo().then(response => {
			console.log(response)
		})
		// fetch('https://api.foursquare.com/v2/venues/538514ce498e432045aea7a5?client_id=5GID1UK00VLW1GBDTWBBWMR3U2CS3B0KS0KIAL3RRMI5LN3U&client_secret=BJGZ1HK132ERDG2YWWC3SYVC50RNSDLRPNVSROCSNCJJ0YVC&v=20180601')
		// .then(response => {
		// 	return response.json()
		// })
		// .then(data => {
		// 	console.log(data)
		// })
	}


	fetchFlickrData(){

		getFlickrData().then(photoUrls => {
			//console.log(photoUrls)
		})
		
	}

	updateFilter(filteredVenues) {
		//console.log('app filtered return', filteredVenues)
		this.setState({filteredMarkers: filteredVenues});
	}
	
	resetMap(){
		//console.log('reset map')
		this.setState({reset: this.state.reset + 1})
	}

  render() {
		//console.log('App render')
    return (
      <div className="main-container">
        <div className="options-sidebar">
					<Options 
						// resetMap={this.resetMap.bind(this)}
						venueInfo={this.state.markers}
						updateFilter={this.updateFilter.bind(this)}
					/>
				</div>
				<div className="neighborhood-wrapper">
					<Map 
						center={{lat: 36.1081458, lng: -115.172774}}
						zoom={15}
						containerElement={<div style={{ height: `100%`, width: `100%`  }}/>}
						mapElement={<div style={{ height: `100%`, width: `100%` }}/>}
						markers={this.state.filteredMarkers}
					/>
				</div>
      </div>
    );
  }
}

export default App;
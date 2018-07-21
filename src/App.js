import React, { Component } from 'react'
import './App.css'
import Options from './components/Options'
import Map from './components/Map'

const MyMarkers = [
	{
		name: 'Luxor Hotel & Casino', 
		ll: {lat: 36.09551, lng: -115.176},
		photoId: 'luxor',
		bounce: false
	},
	{
		name: 'Paris Las Vegas',
		ll: { lat: 36.1125414, lng: -115.170},
		photoId: 'paris',
		bounce: false
	},
	{
		name: 'Bellagio Hotel & Casino',
		ll: { lat: 36.1125414, lng: -115.176},
		photoId: 'bellagio',
		bounce: false
	},
	{
		name: 'The Venetian',
		ll: { lat: 36.121174, lng:-115.1688466},
		photoId: 'venetian',
		bounce: false
	},
	{
		name: 'Excalibur Hotel & Casino',
		ll: { lat: 36.0987653, lng: -115.1755},
		photoId: 'excalibur'	,
		bounce: false	
	},
	{
		name: 'New York-New York Hotel & Casino',
		ll: { lat: 36.1017723, lng: -115.1745215},
		photoId: 'newyork',
		bounce: false
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

	updateFilter(filteredVenues) {
		this.setState({filteredMarkers: filteredVenues})
	}
	
	// resetMap(){
	// 	this.setState({reset: this.state.reset + 1})
	// }

  render() {
    return (
      <div className="main-container">
        <div className="options-sidebar">
					<Options 
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
    )
  }
}

export default App
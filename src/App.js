import React, { Component } from 'react'
import './App.css'
import Options from './components/Options'
import Map from './components/Map'

const MyMarkers = [
	{
		name: 'Luxor', 
		ll: {lat: 36.09551, lng: -115.176},
		photoId: 'luxor',
		bounce: false,
		infoTip: 'Luxor Sky Beam is one of the strongest beams of light in the world',
		infoTipActive: false
	},
	{
		name: 'Paris Las Vegas',
		ll: { lat: 36.1125414, lng: -115.170},
		photoId: 'paris',
		bounce: false,
		infoTip: 'Has a half scale, 540 foot replica of the Eiffel Tower',
		infoTipActive: false
	},
	{
		name: 'Bellagio',
		ll: { lat: 36.1125414, lng: -115.176},
		photoId: 'bellagio',
		bounce: false,
		infoTip: 'There are 1,200 dancing fountains in front of the Bellagio',
		infoTipActive: false
	},
	{
		name: 'The Venetian',
		ll: { lat: 36.121174, lng:-115.1688466},
		photoId: 'venetian',
		bounce: false,
		infoTip: 'Design inspired by Venice, Italy, and features architectural replicas of various Venetian landmarks',
		infoTipActive: false
	},
	{
		name: 'Excalibur',
		ll: { lat: 36.0987653, lng: -115.1755},
		photoId: 'excalibur'	,
		bounce: false	,
		infoTip: 'Named for the mythical sword of King Arthur, it uses a Medieval theme',
		infoTipActive: false
	},
	{
		name: 'New York-New York',
		ll: { lat: 36.1017723, lng: -115.1745215},
		photoId: 'newyork',
		bounce: false,
		infoTip: 'Has a 203 foot high roller coaster with a 144 foot drop',
		infoTipActive: false
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
	
  render() {
    return (
      <div className='main-container'>
        <div className='options-sidebar'>
					<Options 
						venueInfo={this.state.markers}
						updateFilter={this.updateFilter.bind(this)}
					/>
				</div>
				<div className='neighborhood-wrapper'>
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
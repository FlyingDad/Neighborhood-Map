import React, { Component } from 'react'
import './App.css'
import Options from './components/Options'
import Map from './components/Map'
import { MyMarkers } from './util/Mymarkers'

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
      <main className='main-container'>
        <aside className='options-sidebar'>
					<Options 
						venueInfo={this.state.markers}
						updateFilter={this.updateFilter.bind(this)}
					/>
				</aside>
				<section className='neighborhood-wrapper'>
					<Map 
						role='application'
						center={{lat: 36.1081458, lng: -115.172774}}
						zoom={15}
						containerElement={<div style={{ height: `100%`, width: `100%`  }}/>}
						mapElement={<div style={{ height: `100%`, width: `100%` }}/>}
						markers={this.state.filteredMarkers}
					/>
				</section>
      </main>
    )
  }
}

export default App
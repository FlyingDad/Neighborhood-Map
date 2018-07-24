import React, { Component } from 'react'
import './App.css'
import Options from './components/Options'
import Map from './components/Map'
import { MyMarkers } from './util/Mymarkers'
import scriptLoader from 'react-async-script-loader'
import GoogleApiError from './components/Google_api_error'

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
			filteredMarkers: MyMarkers,
			googleApiSuccess: false
		}
	}

	componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
    if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
      if (isScriptLoadSucceed) {
				// If Google API loaded ok, display app
				this.setState({googleApiSuccess: true});
			} else
			// Error component will display because we keep googleApiSuccess false 
			console.log('Google API load failure')
    }
  }
 
  // componentDidMount () {
  //   const { isScriptLoaded, isScriptLoadSucceed } = this.props
  //   if (isScriptLoaded && isScriptLoadSucceed) {
	// 		//this.initEditor()
	// 		console.log('comp did mount script loaded')
  //   }
  // }


	updateFilter(filteredVenues) {
		this.setState({filteredMarkers: filteredVenues})
	}
	
  render() {
		return (
		this.state.googleApiSuccess ? (
      <main className='main-container'>
        <aside className='options-sidebar'>
					<Options 
						venueInfo={this.state.markers}
						updateFilter={this.updateFilter.bind(this)}
					/>
				</aside>
				<section 
				className='neighborhood-wrapper'
				role='application'
				>
					<Map 
						center={{lat: 36.1081458, lng: -115.172774}}
						zoom={15}
						containerElement={<div style={{ height: `100%`, width: `100%`  }}/>}
						mapElement={<div style={{ height: `100%`, width: `100%` }}/>}
						markers={this.state.filteredMarkers}
					/>
				</section>
      </main>
    ):(
			<GoogleApiError />
		)
	)
  }
}export default scriptLoader(
  [
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyD3ml5Cmvakv8UQK-tis1wOVJclQRCKG6Y'
  ]
)(App)

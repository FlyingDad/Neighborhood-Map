import React, { Component } from 'react';
import './App.css';
import Options from './components/Options'
import Map from './components/Map'

class App extends Component {

	constructor(props){
		super(props)
		this.state={
			reset: 0
		}
	}

	componentDidMount(){
		this.fetchFourSquareData()
		//this.fetchYelpData()
		//this.fetchFlickrData()
	}

	fetchFourSquareData() {
		fetch('https://api.foursquare.com/v2/venues/538514ce498e432045aea7a5?client_id=5GID1UK00VLW1GBDTWBBWMR3U2CS3B0KS0KIAL3RRMI5LN3U&client_secret=BJGZ1HK132ERDG2YWWC3SYVC50RNSDLRPNVSROCSNCJJ0YVC&v=20180601')
		.then(response => {
			return response.json()
		})
		.then(data => {
			console.log(data)
		})
	}

	fetchYelpData(){
		const myHeaders = new Headers(
			{
				'Authorization': 'Bearer  MfE73q9xQCdwFISJadwW90D6JUTsGMdsboGiuvLucVL94xpuLmK54UmfFZgju2STLjE3mFWNEwKigHHqnn3cb1_v0d09XdDaNy8Yddp7iJXsMlnhPC8Thfcx7whNW3Yx'
			}
		)
		fetch('https://api.yelp.com/v3/businesses/search?term=restaurants&latitude=36.1061458&longitude=-115.172774&price=3,4&categories=italian,steak&radius=1000',{
			method: 'GET',
			headers: myHeaders,
			mode: 'no-cors'
		}
		).then(response => {
			if(response.status === 200){
				console.log(response)
			}else (
				console.log("Error code " + response.status)
			)
		})
	}

	fetchFlickrData(){
		// filtering photos for:
		// safe_search 2 (moderate)
		// content type 1 (photos only)
		// 5km radius 
		// 20 per page
		fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f7322df1cd1f8f5d748e7bc1759ffc3c&privacy_filter=1&safe_search=2&content_type=1&lat=36.1061458&lon=-115.172774&radius=5&per_page=20&format=json&tags=giada')
		.then(response => {
			if(response.status === 200) {
				return response.text()
			} else {
				console.log(response.status)
			}
		}).then(text => {
			//Response is in JSONP, so we have to dig out the object
			//get the string inside the parens
			let match = text.match(/\(.*\)/);
			//strip the first and last paren
			let jsonString = match[0].substring(1, match[0].length-1)
			//convert resulting json string to an object
			let flickrJson = JSON.parse(jsonString)
			console.log(flickrJson.photos.photo)
		})		
	}
	
	resetMap(){
		console.log('reset map')
		this.setState({reset: this.state.reset + 1})
	}

  render() {
		console.log('App render')
    return (
      <div className="main-container">
        <div className="options-sidebar">
					<Options 
						resetMap={this.resetMap.bind(this)}
					/>
				</div>
				<div className="neighborhood-wrapper">
					<Map 
						center={{lat: 36.1061458, lng: -115.172774}}
						zoom={15.5}
						containerElement={<div style={{ height: `100%`, width: `100%`  }}/>}
						mapElement={<div style={{ height: `100%`, width: `100%` }}/>}
						markers={[{lat: 36.1061458, lng: -115.172774}]}
					/>
				</div>
      </div>
    );
  }
}

export default App;
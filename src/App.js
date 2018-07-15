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
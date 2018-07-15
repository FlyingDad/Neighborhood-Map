import React, { Component } from 'react';
import './App.css';
import Map from './components/Map'

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="options-sidebar">
				</div>
				<div className="neighborhood-wrapper">
					<Map 
						center={{lat: 36.1061458, lng: -115.172774}}
						zoom={15.5}
						containerElement={<div style={{ height: `100%`, width: `75%`  }}/>}
						mapElement={<div style={{ height: `100%`, width: `75%` }}/>}
						markers={[{lat: 36.1061458, lng: -115.172774}]}
					/>
				</div>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';


class Options extends Component {




	render() {
		return(
			<div>
				<button onClick={this.props.resetMap}>Reset Map</button>
				<div>
					<input id='search' type='text' placeholder='Search for restaurant' autoComplete='off'/>
				</div>
			</div>
		)
	}
}

export default Options
import React, { Component } from 'react';


class Options extends Component {




	render() {
		return(
			<div>Options sidebar
				<button onClick={this.props.resetMap}>Reset Map</button>
			</div>
		)
	}
}

export default Options
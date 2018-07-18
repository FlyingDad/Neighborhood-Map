import React, { Component } from 'react';


class Options extends Component {

	constructor(props){
		super(props)
		this.state = {
			venues: this.props.venueInfo
		}
	}

	// componentDidMount(){
	// 	this.setState({venues: this.props.venueInfo})
	// }


	render() {
		//console.log(this.state.venues)
		return(
			<div>
				
				{/* <button onClick={this.props.resetMap}>Reset Map</button> */}
				<div>
					<input id='search' type='text' placeholder='Search for restaurant' autoComplete='off'/>
				</div>
				<div>
					<div>
						{this.state.venues.map((e) => 
							<p key={e.name}>{e.name}</p>
						)}
					</div>
				</div>
			</div>
		)
	}
}

export default Options
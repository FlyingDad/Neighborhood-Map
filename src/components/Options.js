import React, { Component } from 'react';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortby from 'sort-by'


class Options extends Component {

	constructor(props){
		super(props)
		this.state = {
			venues: this.props.venueInfo,
			query: ''
		}
	}

	// componentDidMount(){
	// 	this.setState({venues: this.props.venueInfo})
	// }
  updateQuery = (query) => {
    this.setState({query: query.trim()})
  }

  clearQuery = () => {
    this.setState({query: ''})
  }

	render() {
		//console.log(this.state.venues)
		const {query} = this.state
		//debugger
    let Venues
    if (query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      Venues = this.state.venues.filter((venue) => match.test(venue.name))
    } else {
      Venues = this.state.venues
    }
    Venues.sort(sortby('name'))
		return(
			<div>
				
				{/* <button onClick={this.props.resetMap}>Reset Map</button> */}
				<div>
					<input id='search' type='text' placeholder='Search for restaurant' autoComplete='off'
					onChange={(event)=> this.updateQuery(event.target.value)}/>
				</div>
				<div>
					<div>
						{Venues.map((e) => 
							<p  className='venue' key={e.name}>{e.name}</p>
						)}
					</div>
				</div>
			</div>
		)
	}
}

export default Options
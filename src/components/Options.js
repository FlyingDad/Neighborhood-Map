import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortby from 'sort-by'

class Options extends Component {

	constructor(props){
		super(props)
		// Need this ref so we can clear the input text
		this.queryInput = React.createRef()
		this.state = {
			venues: this.props.venueInfo,
			query: ''
		}
	}

  updateQuery = (query) => {
		this.setState({query: query.trim()})
		let filteredVenues
		const match1 = new RegExp(escapeRegExp(query), 'i')
			filteredVenues = this.state.venues.filter((venue) => 
			match1.test(venue.name))
		this.props.updateFilter(filteredVenues)
  }

  clearQuery = () => {
		this.setState({query: ''})
		this.updateQuery('')
		// clear the input search text, way cool
		this.queryInput.current.value = ''
  }

	render() {
		const {query} = this.state
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
				<div>
					<input id='search' type='text' placeholder='Search for venue' autoComplete='off'
					onChange={(event)=> this.updateQuery(event.target.value)}
					ref={this.queryInput}
				/>
				<button id='reset-search' onClick={this.clearQuery}>Reset</button>
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

Options.propTypes = {
	updateFilter: PropTypes.func.isRequired,
	venueInfo: PropTypes.array.isRequired
}

export default Options
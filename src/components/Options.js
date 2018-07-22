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
			filteredVenues: this.props.venueInfo,
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
		this.setState({filteredVenues: filteredVenues})
  }

  clearQuery = () => {
		this.setState({query: ''})
		this.updateQuery('')
		// clear the input search text, way cool
		this.queryInput.current.value = ''
	}
	
	onMouseOver(listItem, index){
		let venueName = listItem.name
		console.log(venueName)
		// listItem.bounce = true
		let filteredVenues = this.state.filteredVenues
		let selectedItem = this.state.filteredVenues.slice(index, index + 1)[0]
		selectedItem.bounce = !selectedItem.bounce
		this.setState({
			filteredVenues: filteredVenues.slice(0, index)
				.concat([selectedItem])
				.concat(filteredVenues.slice(index + 1))
		});
		//console.table(selectedItem)
		this.updateQuery(this.state.query)
		// //console.log(venues)
		// venues.forEach(venue => {
		// 	//console.log(venue)
		// 	if(venue.name == listItem.name){
		// 		venue.bounce = true
		// 		console.log('match')
		// 	}
		// });
		// //this.setState({venues: venues});
		// this.props.updateFilter(venues)
	}

	render() {
		console.log("App render")
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
						{Venues.map((venue, index) => 
							<p 
							className='venue' 
							key={index}
							onMouseEnter={()=>this.onMouseOver(venue, index)}
							onMouseLeave={()=>this.onMouseOver(venue, index)}
							>
							{venue.name}							
							</p>
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
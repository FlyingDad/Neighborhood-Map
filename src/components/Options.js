import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortby from 'sort-by'
import VenueInfo from './Venueinfo'

class Options extends Component {
  constructor(props) {
    super(props)
    // Need this ref so we can clear the input text
    this.queryInput = React.createRef()
    this.state = {
      venues: this.props.venueInfo,
      filteredVenues: this.props.venueInfo,
      query: ''
    }
  }

  updateQuery = query => {
    this.setState({ query: query.trim() })
    let filteredVenues
    const match1 = new RegExp(escapeRegExp(query), 'i')
    filteredVenues = this.state.venues.filter(venue => match1.test(venue.name))
    this.props.updateFilter(filteredVenues)
    this.setState({ filteredVenues: filteredVenues })
  }

  clearQuery = () => {
    this.setState({ query: '' })
    this.updateQuery('')
    // clear the input search text, way cool
    this.queryInput.current.value = ''
  }

  onMouseOver(listItem, index) {
    let filteredVenues = this.state.filteredVenues
    let selectedItem = this.state.filteredVenues.slice(index, index + 1)[0]
    selectedItem.bounce = !selectedItem.bounce
    this.setState({
      filteredVenues: filteredVenues
        .slice(0, index)
        .concat([selectedItem])
        .concat(filteredVenues.slice(index + 1))
    })
		this.updateQuery(this.state.query)
	}
	
	handleClick(venue, index) {
		let filteredVenues = this.state.filteredVenues
		let selectedItem = this.state.filteredVenues.slice(index, index + 1)[0]
		selectedItem.infoTipActive = !selectedItem.infoTipActive
    this.setState({
      filteredVenues: filteredVenues
        .slice(0, index)
        .concat([selectedItem])
        .concat(filteredVenues.slice(index + 1))
    })
    this.updateQuery(this.state.query)
	}

  render() {
    const { query } = this.state
    let Venues
    if (query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      Venues = this.state.venues.filter(venue => match.test(venue.name))
    } else {
      Venues = this.state.venues
    }
    Venues.sort(sortby('name'))
    return (
      <div>
        <div className='searchbox'>
          <input
            id='search'
            type='text'
            placeholder='Search for venue'
            autoComplete='off'
            onChange={event => this.updateQuery(event.target.value)}
            ref={this.queryInput}
          />
					<button 
					id='reset-search' 
					onClick={this.clearQuery}
					aria-label='reset search'
					>
            Reset
          </button>
        </div>
        <div>
          <div>
            {Venues.map((venue, index) => (
              <div key={index}>
								<div>
									<div
										className='venue'
										//key={index}
										onMouseEnter={() => this.onMouseOver(venue, index)}
										onMouseLeave={() => this.onMouseOver(venue, index)}
										tabIndex='0'
										onClick={() => this.handleClick(venue, index)}
										role='button'
									>
									<p>{venue.name}</p>
									
									{venue.infoTipActive &&
										<VenueInfo 
											className='info-tip'
											venueInfo={venue.infoTip}>
											{venue.infoTip}
										</VenueInfo>
									}
									
									</div>
								</div>             
							</div>
            ))}
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

import React from 'react'
import PropTypes from 'prop-types'

const VenueInfo = (props) => {
	return (
		<div 
			className='venue-info'
			tabIndex='0'
			>
			{props.venueInfo}
		</div>
	)
}

VenueInfo.propTypes = {
  venueInfo: PropTypes.string.isRequired
}

export default VenueInfo
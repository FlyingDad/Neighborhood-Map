import React from 'react'
import PropTypes from 'prop-types'

const VenueInfo = (props) => {
	return (
		<span 
			className='venue-info'
			tabIndex='0'
			>
			{props.venueInfo}
		</span>
	)
}

VenueInfo.propTypes = {
  venueInfo: PropTypes.string.isRequired
}

export default VenueInfo
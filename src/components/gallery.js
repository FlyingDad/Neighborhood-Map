import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Gallery extends Component {
	render() {
		return (
			<div>
				TEST GALLERY
			</div>
		);
	}
}

Gallery.propTypes = {
	photos: PropTypes.array.isRequired
}

export default Gallery;
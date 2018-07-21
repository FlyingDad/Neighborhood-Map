import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import { getFlickrData } from '../util/Flickr'

export default class VenueLightbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photoIndex: 0,
			isOpen: false,
			images: ['']
    }
	}
	
	componentDidMount() {
		this.setState({isOpen: this.props.isOpen})
		this.fetchFlickrData()
	}

	fetchFlickrData(){
		this.setState({isOpen: true});
		getFlickrData(this.props.venue).then(photoUrls => {
			this.setState({images: photoUrls})
		})	
	}

  render() {
    const { photoIndex, isOpen, images } = this.state
    return (
			
      <div>
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    )
  }
}

VenueLightbox.propTypes = {
	venue: PropTypes.string.isRequired
}
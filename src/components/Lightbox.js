import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import { getFlickrData } from '../util/Flickr'

export default class VenueLightbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photoIndex: 0,
			isOpen: false,
			images: ['https://farm2.staticflickr.com/1821/29613079948_4e53a3dd52_n.jpg']
    }
	}
	
	componentDidMount() {
		this.setState({isOpen: this.props.isOpen})
		this.fetchFlickrData()
	}

	fetchFlickrData(){
		getFlickrData(this.props.venue).then(photoUrls => {
			this.setState({images: photoUrls, isOpen: true})
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
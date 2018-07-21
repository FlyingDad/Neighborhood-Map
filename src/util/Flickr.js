const HotelLV = "+hotel+las+vegas"
const Venues = {
  luxor: "luxor" + HotelLV,
  excalibur: "excalibur" + HotelLV,
  venetian: "venetian" + HotelLV,
  paris: "paris" + HotelLV,
  bellagio: "bellagio" + HotelLV,
  newyork: "new+york" + HotelLV
}

export function getFlickrData(venue) {
  // filtering photos for:
  // safe_search 2 (moderate)
  // content type 1 (photos only)
  // 5km radius
  // 20 per page
  const venueSearch = Venues[venue]
  const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&text=${venueSearch}&format=json&safe_search=2&privacy_filter=1&content_type=1&per_page=20&api_key=f7322df1cd1f8f5d748e7bc1759ffc3c`

  return fetch(url)
    .then(response => {
      if (response.status === 200) {
        return response.text()
      } else {
        //console.log(response.status)
      }
    })
    .then(text => {
      //Response is in JSONP, so we have to dig out the object
      //get the string inside the parens
      let match = text.match(/\(.*\)/)
      //strip the first and last paren
      let jsonString = match[0].substring(1, match[0].length - 1)
      //convert resulting json string to an object
      let flickrJson = JSON.parse(jsonString)
      return flickrJson
    })
    .then(json => {
      // Parse results and the request images
      let photoUrls = []
      json.photos.photo.forEach(photo => {
        let farmId = photo.farm
        let serverId = photo.server
        let photoId = photo.id
        let secret = photo.secret
        let size = "_z.jpg" // small, 320px on longest side
        let photoUrl = `https://farm${farmId}.staticflickr.com/${serverId}/${photoId}_${secret}${size}`
        photoUrls.push(photoUrl)
      })
      return photoUrls
		})
		.catch(error => {
		console.log(`Fetch error = \n`, error)
		// Lightbox will display error message
		return ['error']
		})
}

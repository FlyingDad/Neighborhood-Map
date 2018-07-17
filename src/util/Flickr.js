export function getFlickrData(){

// filtering photos for:
		// safe_search 2 (moderate)
		// content type 1 (photos only)
		// 5km radius 
		// 20 per page
		fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f7322df1cd1f8f5d748e7bc1759ffc3c&text=caesars+palace&format=json&safe_search=2&privacy_filter=1&content_type=1&per_page=12')
		.then(response => {
			if(response.status === 200) {
				return response.text()
			} else {
				console.log(response.status)
			}
		}).then(text => {
			//Response is in JSONP, so we have to dig out the object
			//get the string inside the parens
			let match = text.match(/\(.*\)/);
			//strip the first and last paren
			let jsonString = match[0].substring(1, match[0].length-1)
			//convert resulting json string to an object
			let flickrJson = JSON.parse(jsonString)
			console.log(flickrJson.photos.photo)
		})		

}
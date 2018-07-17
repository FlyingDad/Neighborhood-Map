

export function getVenuInfo(){
	return fetch('https://api.foursquare.com/v2/venues/538514ce498e432045aea7a5?client_id=5GID1UK00VLW1GBDTWBBWMR3U2CS3B0KS0KIAL3RRMI5LN3U&client_secret=BJGZ1HK132ERDG2YWWC3SYVC50RNSDLRPNVSROCSNCJJ0YVC&v=20180601')
	.then(response => {
		if(response.status === 200) {
			return response.json()
		} else {
			console.log(response.status)
		}

		
	}).then(data =>{
		// get the data we want and return it as an object
		//let venueName = data.response.venue.name
		//let category = 'Unknown'
		// if(data.response.venue.categories[0].name){
		// 	category = data.response.venue.categories[0].name
		// }
		// console.log(category)
		//return (venueName: venueName)
	})
	.catch(error => {
		console.log(error)
	})
}




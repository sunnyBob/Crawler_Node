const request = require('request')

const startCrawler = (url) => {
	return new Promise((resolve, reject) => {
		request(url, (err, resp, body) => {
			if(err) {
				reject('')
			} else {
				resolve(body)
			}
		})
	})
}
module.exports = startCrawler
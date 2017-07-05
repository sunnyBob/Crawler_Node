const startCrawler = require('../crawler/crawler')
const removeDuplicate = require('../util/removeDuplicate.js')
const videos = []
const cheerio = require('cheerio')

const handle = async (pageNum) => {
	let url = 'http://www.budejie.com/'
	for(let i = 0; i < pageNum; i++) {
		let html = await startCrawler(url)
		if(html!='') {
			let $ = cheerio.load(html)
			$('div.j-video-c').each( (index, video) => {
				let singeVideo = {}
				singeVideo.length = $(video).data("videomlen")
				singeVideo.title = $(video).data("title")
				let detail = $(video).find("div.j-video")
				singeVideo.poster = detail.data("poster")
				singeVideo.mp4 = detail.data("mp4")
				videos.push(singeVideo)
			})
			let j = i + 1
			url = "http://www.budejie.com/"+j
		}
	}
	removeDuplicate(videos, "title")
	console.log(videos.length)
	return {videos}
}

module.exports = handle
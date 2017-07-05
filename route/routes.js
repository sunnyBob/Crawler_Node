const renderCtrl = require('../ctrl/renderCtrl')
module.exports = (route) => {
	route.get("/videos", renderCtrl.getVideo)
}
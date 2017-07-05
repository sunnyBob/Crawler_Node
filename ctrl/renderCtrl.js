const handle = require('../handle/handle')
exports.getVideo = async (ctx) => {
	let pageNum = ctx.query.pageNum || 1
	ctx.body =  await handle(pageNum)
}

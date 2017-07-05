const koa = require('koa')
	, bodyParser = require('koa-bodyparser')
	, server = require('koa-static')
	, json = require('koa-json')
	, Route = require('koa-router')
const app = new koa()
const routes = require('./route/routes')
const router = new Route()


app.use(json())
app.use(bodyParser())
routes(router)
app.use(router.routes())
app.use(server('./static/'));
app.listen(3000, () => {
	console.log("start on 127.0.0.1:3000")
})
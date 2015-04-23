var app = require('koa')(),
	logger = require('koa-logger'),
	compress = require('koa-compress'),
	condget = require('koa-conditional-get'),
	etag = require('koa-etag'),
	serve = require('koa-static'),
	io = require('socket.io')(app);

app
	.use(logger())
	.use(compress())
	.use(condget())
	.use(etag())
	.use(serve('public'));

var server = app.listen(3000, function() {

});

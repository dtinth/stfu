#!/usr/bin/env node
var connect = require('connect');
var port = ~~process.env.PORT || 33775;
var app = connect.createServer()
console.log('listening to port ' + port);

app.use(connect.static(process.cwd()));
if (process.argv[2] == '-d') {
	app.use(connect.directory(process.cwd()));
}
app.listen(port);

require('child_process').exec('ifconfig', function(err, stdout, stderr) {
	if (err) return;
	stdout.replace(/inet\s+(\d+\.\d+\.\d+\.\d+)/g, function(all, ip) {
		console.log('http://' + ip + ':' + port + '/');
	});
});

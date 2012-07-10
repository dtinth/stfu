#!/usr/bin/env node
var connect = require('connect');
var port = ~~process.env.PORT || 33775;
console.log('listening to port ' + port);
connect.createServer(connect.static(process.cwd())).listen(port);

require('child_process').exec('ifconfig', function(err, stdout, stderr) {
	if (err) return;
	stdout.replace(/inet\s+(\d+\.\d+\.\d+\.\d+)/g, function(all, ip) {
		console.log('http://' + ip + ':' + port + '/');
	});
});

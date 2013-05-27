
* When you want a quick web server serving files from current directory, just `stfu`.
* When you want to send a file quickly over HTTP, just `stfu`.

----

I can't find a simple script that serves the files from current working directory,
and `python -m SimpleHTTPServer` is too slow. So I made this. I call it `stfu`,
which stands for __serve the files up.__


Installation
------------

    npm install -g stfu

Usage
-----

    stfu

Will stfu on port 33775.

    PORT=12345 stfu

Will stfu on port 12345.


Directory Listing
-----------------

To enable directory listing, use

    stfu -d

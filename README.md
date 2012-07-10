
I can't find a simple script that serves the file from current working directory,
and `python -m SimpleHTTPServer` is too slow. So I made this. I call it `stfu`, stands for
__serve the files up!__


Installation
------------

    npm install -g stfu

Usage
-----

    stfu

Will serve on port 33775.

    PORT=12345 stfu

Will serve on port 12345.

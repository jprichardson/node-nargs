Node.js - nargs
===============

Normalize function arguments.


Why?
----

So you can easily do things like:

```javascript
function doSomething() {
    var args = nargs(arguments);
    console.log(args[0]);
    console.log(args[1]);
}

doSomething('a', 'b'); // 'a', 'b'
doSomething(['a', 'b']); //'a', 'b'
```



Installation
------------

    npm install nargs



Example
------

See the test suite for more examples and expected output.



Author
------

`node-nargs` was written by [JP Richardson][aboutjp]. You should follow him on Twitter [@jprichardson][twitter]. Also read his coding blog [Procbits][procbits]. If you write software with others, you should checkout [Gitpilot][gitpilot] to make collaboration with Git simple.



License
-------

(MIT License)

Copyright 2012, JP Richardson   <jprichardson@gmail.com>


[aboutjp]: http://about.me/jprichardson
[twitter]: http://twitter.com/jprichardson
[procbits]: http://procbits.com
[gitpilot]: http://gitpilot.com
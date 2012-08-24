var testutil = require('testutil')
  , nargs = require('../lib/nargs')
  , fs = require('fs-extra')
  , path = require('path')
  , TriggerFlow = require('triggerflow').TriggerFlow;

TEST_DIR = ''

beforeEach(function(done) {
    TEST_DIR = testutil.generateTestPath('test-fargs');
    fs.mkdir(TEST_DIR, done); 
})

suite('nargs')

test('nargs() - normalize one param (number) ', function(done){
    function testf() {
        var args = nargs(arguments)
        T (args[0] === 4.5)
        done()
    }
    
    testf(4.5);
})

test('nargs() - normalize one param (string) ', function(done){
    function testf() {
        var args = nargs(arguments)
        T (args[0] === 'hello')
        done()
    }
    
    testf('hello');
})

test('nargs() - normalize one param (Date) ', function(done){
    var now = new Date();

    function testf() {
        var args = nargs(arguments)
        T (args[0].getTime() === now.getTime())
        done()
    }
    
    testf(now);
})

test('nargs() - normalize one param (RegExp) ', function(done){
    var r = new RegExp();

    function testf() {
        var args = nargs(arguments)
        T (args[0] === r)
        done()
    }
    
    testf(r);
})

test('nargs() - normalize one param (Object with number keys) ', function(done){
    function testf() {
        var args = nargs(arguments)
        T (args[0] === 'hi')
        T (args[1] === 'bye')
        done()
    }
    
    testf({0: 'hi', 1: 'bye'});
})

test('nargs() - normalize one param (Object with string keys) ', function(done){
    function testf() {
        var args = nargs(arguments)
        T (args['a'] === 'hi')
        T (args['b'] === 'bye')
        done()
    }
    
    testf({'a': 'hi', 'b': 'bye'});
})

test('nargs() - normalize one param (Array) ', function(done){
    function testf() {
        var args = nargs(arguments)
        T (args[0] === 'a')
        T (args[1] === 'b')
        T (args[2] === 'c')
        done()
    }
    
    testf(['a', 'b', 'c']);
})

test('nargs() - normalize more than one params (number) ', function(done){
    function testf() {
        var args = nargs(arguments)
        T (args[0] === 4.5)
        T (args[1] === 3.3)
        T (args[2] === 2.2)
        done()
    }
    
    testf(4.5, 3.3, 2.2);
})

test('nargs() - normalize more than one params (string) ', function(done){
    function testf() {
        var args = nargs(arguments)
        T (args[0] === 'hi')
        T (args[1] === 'bye')
        done()
    }
    
    testf('hi', 'bye');
})

test('nargs() - normalize more than one params (Date) ', function(done){
    var now = new Date();
    var now2 = new Date();

    function testf() {
        var args = nargs(arguments)
        T (args[0] === now)
        T (args[1] === now2)
        done()
    }
    
    testf(now, now2);
})

test('nargs() - normalize more than one params (RegExp) ', function(done){
    var r = new RegExp();
    var r2 = new RegExp('w+');

    function testf() {
        var args = nargs(arguments)
        T (args[0] === r)
        T (args[1] === r2)
        done()
    }
    
    testf(r, r2);
})

test('nargs() - normalize more than one params (Array) ', function(done){
    function testf() {
        var args = nargs(arguments)
        T (args[0][0] === 'a')
        T (args[0][1] === 'b')
        T (args[1][0] === 'c')
        T (args[1][1] === 'd')
        done()
    }
    
    testf(['a', 'b'], ['c', 'd']);
})

test('nargs() - normalize more than one params (Object) ', function(done){
    function testf() {
        var args = nargs(arguments)
        T (args[0]['a'] === 'hi')
        T (args[1]['b'] === 'bye')
        done()
    }
    
    testf({'a': 'hi'}, {'b': 'bye'});
})






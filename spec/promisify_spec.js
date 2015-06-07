import promisify from 'node-promise-es6/src/promisify';
import {default as install, catchError} from 'jasmine-es6';
install();

describe('promisify', function() {
  it('wraps a (error, result)-callback-based function with a Promise', async function() {
    function successFn(callback) {
      callback(null, 'success');
    }
    const promisifiedSuccessFn = promisify(successFn);
    expect(await promisifiedSuccessFn()).toBe('success');

    function failFn(callback) {
      callback(new Error('fail'));
    }
    const promisifiedFailFn = promisify(failFn);
    expect(await catchError(promisifiedFailFn())).toBe('fail');
  });

  it('wraps with native Promises', function() {
    function fn(callback) {
      callback(null, 'success');
    }
    const promisifiedfn = promisify(fn);
    expect(promisifiedfn() instanceof Promise).toBe(true);
  });

  it('passes arguments through to the wrapped function', async function() {
    function fn(arg1, arg2, callback) {
      expect(arg1).toBe('foo');
      expect(arg2).toBe('bar');
      callback(null, 'success');
    }
    const promisifiedFn = promisify(fn);
    expect(await promisifiedFn('foo', 'bar')).toBe('success');
  });

  it('resolves the promise with an array of values if the callback is called with multiple values', async function() {
    function fn(callback) {
      callback(null, 'value1', 'value2');
    }
    const promisifiedFn = promisify(fn);
    expect(await promisifiedFn()).toEqual(['value1', 'value2']);
  });

  it('converts the array of values into an object if given an array of key names', async function() {
    function fn(callback) {
      callback(null, 'value1', 'value2');
    }
    const promisifiedFn = promisify(fn, ['key1', 'key2']);
    expect(await promisifiedFn()).toEqual({key1: 'value1', key2: 'value2'});
  });
});

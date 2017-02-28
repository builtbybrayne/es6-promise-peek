# es6-promise-peek 

> Adds a &#39;peek&#39; function to es6 promises

Easily peek into a promise chain, without affecting the returned value.


## Install

```
$ yarn add es6-promise-peek
```
or

```
$ npm install --save es6-promise-peek
```

## Usage 

```
Promise.resolve("a")
    .peek(console.log)
    .then(console.log)
    .then(console.log)
// => "a"
// => "a"
// => undefined
```


**NB:** Return values from the function passed to `peek` are ignored - even if they are promises.

```
Promise.resolve("original")
    .peek(x => "hijack"}
    .then(console.log)
// => "original"
```


## Environments

This has only been tested on nodejs 6.

## Dependencies




## License

MIT © [Alastair Brayne]

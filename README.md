# Markdown to HTML app

A simple web page app built with React and Node to convert markdown syntax into html. This web app
takes a few use cases for converting markdown into html. It sanitizes the input and dynamically replaces each
markdown tag defined in the 'data/markdown_schema.js' file into their corresponding html entities. There are also unit tests that can be ran with Mocha and Chai covering the main features. Also, this project has been set up with a modern front end pipeline setup.  It features Babel, Webpage, hot module reloading, dev/prod builds, etc.

## Getting Started

Just go the this url: http://d3c74a8f.ngrok.io/ and click around.  You can also use the installation 
instructions below to run this program locally.

### Prerequisites

A computer :)

Here are some examples of what to expect.
```
input = '*how are you?'
html = <i>how are you?</i>'

input = '>how are you?'
html = <blockquote>how are you?</blockquote>

input = '#how are you?'
html = <h1>how are you?</h1>'

input = '######how are you?'
html = '<h6>how are you?</h6>'
```
If you want to install it locally, Node is a prerequisite.

### Installing

git clone this repo

```
cd into the project directory
```
```
npm install
```

## Running the tests

This app uses Mocha and Chai for running tests.
Use npm test to execute the test suite.

```
These are the tests:
const assert = require('assert');

let input = '*how are you?';
assert.equal(getHTML(input), '<i>how are you?</i>');

input = '>how are you?';
assert.equal(getHTML(input), '<blockquote>how are you?</blockquote>');

input = '#how are you?';
assert.equal(getHTML(input), '<h1>how are you?</h1>');

input = '######how are you?';
assert.equal(getHTML(input), '<h6>how are you?</h6>');
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Mail Chimp for the fun interview!

//Set up a few simple unit tests to assert the correct values
import { getHTML } from '../parsers/markdown_html';

const assert = require('assert');

let input = '*how are you?';
assert.equal(getHTML(input), '<i>how are you?</i>');

input = '>how are you?';
assert.equal(getHTML(input), '<blockquote>how are you?</blockquote>');

input = '#how are you?';
assert.equal(getHTML(input), '<h1>how are you?</h1>');

input = '######how are you?';
assert.equal(getHTML(input), '<h6>how are you?</h6>');




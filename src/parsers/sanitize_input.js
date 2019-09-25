/*There is no telling what type of input we are going to get
Let's sanitize it!

https://facebook.github.io/react/docs/introducing-jsx.html#jsx-prevents-injection-attacks
By default, React DOM escapes any values embedded in JSX before rendering them. 
Thus it ensures that you can never inject anything that's not explicitly written in your application.
Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.
We also want to sanitize the input for to remove any illegal characters*/

let sanitizeHtml = require('sanitize-html');

export const sanitize = input => {
    return sanitizeHtml(input);
}

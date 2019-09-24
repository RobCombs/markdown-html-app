import React, { Component } from 'react';
import { sanitize } from '../parsers/sanitize_input';

export default class MarkdownTranslater extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.value);

        //handle data
        //https://facebook.github.io/react/docs/introducing-jsx.html#jsx-prevents-injection-attacks
        //By default, React DOM escapes any values embedded in JSX before rendering them. 
        //Thus it ensures that you can never inject anything that's not explicitly written in your application.
        // Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.
        // We also want to sanitize the input for to remove any illegal characters

        alert(sanitize(this.state.value));
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

//This controlled React component goes out to Kevin. I'll give Redux a go next time!
import React, { Component } from 'react';
import { sanitize } from '../parsers/sanitize_input';
import { getHTML } from '../parsers/markdown_html';

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


        event.preventDefault();
    }

    componentDidMount(event) {
        //let input = this.state.value;
        let input = '*how are you?';
        let html = "";
        //remove illegal characters and rely on React to validate and escape the values
        //This validation/sanitization is for Shounak to get the code production ready :)
        html = getHTML(sanitize(input));
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

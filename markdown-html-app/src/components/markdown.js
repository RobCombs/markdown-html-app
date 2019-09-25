import React, { Component } from 'react';
import { sanitize } from '../parsers/sanitize_input';
import { getMarkDown } from '../helpers/markdown';
const fs = require('fs');


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
        //remove illegal characters and rely on React to validate and escape the values
        //debugger;
        //alert(fs.readFileSync('../data/markdown_schema.json'));




        // alert(sanitize(this.state.value));
        //alert(getMarkDown('../data/markdown_schema.json'));

        event.preventDefault();
    }

    componentDidMount(event) {
        let markdown = {
            "#": "<h1>", //header
            "*": "<i>", //italics
            "**": "<strong>" //bold
        };
        //let input = this.state.value;
        let input = '#how are you?';

        for (let key in markdown) {
            //lastIndexOf is for Frankie to avoid looping though 6 hashtags :)
            let index = input.lastIndexOf(key);
            if (index > -1) {
                //debugger;
                alert(input.replace(input.substring(0, index), markdown[key]));
            }
        }

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

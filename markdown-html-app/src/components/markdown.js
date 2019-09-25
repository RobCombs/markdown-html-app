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
            "#": "h", //header
            ">": "blockquote", //block quotes
            "*": "i", //italics
        };

        //let input = this.state.value;
        let input = '>how are you?';

        let html = "";

        for (let key in markdown) {
            //get the last occurance of a character
            //so that we can get the substring of the last markdown match
            let index = input.lastIndexOf(key) + 1;
            if (index > 0) {
                let openTag = "";
                let closeTag = "";
                if (input.search('#') > -1) {
                    //special case for hashes
                    //this one is for Frankie to avoid looping though 6 hashtags :)
                    openTag = html.concat('<', markdown[key], index, '>');
                    html = input.replace(input.substring(0, index), openTag)
                        .concat('</', markdown[key], index, '>');
                } else {
                    openTag = html.concat('<', markdown[key], '>');
                    html = input.replace(input.substring(0, index), openTag)
                        .concat('</', markdown[key], '>');
                }
                //found our match...break the loop to be efficient
                break;

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

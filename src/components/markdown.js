//This controlled React component goes out to Kevin. I'll give Redux a go next time!
import React, { Component } from 'react';
import { sanitize } from '../parsers/sanitize_input';
import { getHTML } from '../parsers/markdown_html';
import { RadioGroup, RadioButton, ReversedRadioButton } from 'react-radio-buttons';

export default class MarkdownTranslater extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        let html = "";
        this.setState({ value: value });
        html = getHTML(sanitize(value));
        document.getElementById("Results").innerHTML = html;
        //alert(value);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    componentDidMount(event) {
        //let input = this.state.value;
        let input = '*how are you?';

        //This validation/sanitization is for Shounak to get the code production ready :)
        //remove illegal characters and rely on React to validate and escape the values
        //it's pretty bullet proof with predefined values but form values can still be spoofed

    }

    render() {
        return (
            <div className="Radio">
                <RadioGroup onChange={this.handleChange} horizontal >
                    <ReversedRadioButton value="*how are you?" className="Radio">
                        *how are you?
                    </ReversedRadioButton>
                    <ReversedRadioButton value="#how are you?">
                        #how are you?
                    </ReversedRadioButton>
                    <ReversedRadioButton value=">how are you?">
                        >how are you?
                    </ReversedRadioButton>
                    <ReversedRadioButton value="###how are you?">
                        ###how are you?
                    </ReversedRadioButton>
                </RadioGroup>

            </div >
        );
    }
}

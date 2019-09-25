//The heavy lifting is done here to convert the markdown tags into html
import { getMarkDown } from '../data/markdown_schema';

function htmlDecode(input) {
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes[0].nodeValue;
}

export const getHTML = (input) => {
    let markdown = getMarkDown();
    let html = "";
    //simple decoder for the escaped > than html entity
    let decodedInput = input.replace('&gt;', '>');
    for (let key in markdown) {
        //get the last occurance of a character
        //so that we can get the substring of the last markdown match
        let index = decodedInput.lastIndexOf(key) + 1;
        if (index > 0) {
            let openTag = "";
            if (decodedInput.search('#') > -1) {
                //special case for hashes
                //this one is for Frankie to avoid looping though 6 hashtags :)
                openTag = html.concat('<', markdown[key], index, '>');
                html = decodedInput.replace(decodedInput.substring(0, index), openTag)
                    .concat('</', markdown[key], index, '>');
            } else {
                openTag = html.concat('<', markdown[key], '>');
                html = decodedInput.replace(decodedInput.substring(0, index), openTag)
                    .concat('</', markdown[key], '>');
            }
            //found our match...return the html
            return html;
        }
    }
}



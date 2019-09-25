//The heavy lifting is done here to convert the markdown tags into html
import { getMarkDown } from '../data/markdown_schema';

export const getHTML = (input) => {
    let markdown = getMarkDown();
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
            alert(html);
            break;
        }
    }
}



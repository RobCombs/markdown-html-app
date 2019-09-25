//Define the data of the markdown structure
//Add to this array if you'd like to extend the markdown functionality

export const getMarkDown = () => {
    let markDown = {
        "#": "h", //header
        ">": "blockquote", //block quotes
        "*": "i", //italics
    }
    return markDown;
}
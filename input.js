//markdown array
markdown = { '#': '<h1>', '##': '<h2>', };



data = ["We have a new string # Heading 1", "## Heading 1"];


//console.log(data.search('Heading'));


data.forEach(element => {

    const match = element.search('Heading') != -1;


    //if the first character of the element is a match
    //return true
    //replace the character at index with the value of the key
    //return false
    //don't do anything 



    if (match) {
        //we have a match
        console.log(match);
    } else {
        //we don't have a match 

    }
    console.log(element);

});
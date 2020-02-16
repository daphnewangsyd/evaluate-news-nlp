function verifyInput(inputText) {
    console.log("::: Running verification :::", inputText);
    const regex = new RegExp("[a-zA-Z]+[.?!]$");
    if(regex.test(inputText)) {
        return true;
    } else {
        alert("There are errors in the text you entered. Please ensure the text is in English and ends with '.', '?' or '!'.");
        return false;
    }
}

export { verifyInput }

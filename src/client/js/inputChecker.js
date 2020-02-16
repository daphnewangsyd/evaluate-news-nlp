function verifyInput(inputText) {
    console.log("::: Running verification :::", inputText);
    const regex = new RegExp("^((?:https?:\\/\\/)?[^./]+(?:\\.[^./]+)+(?:\\/.*)?)$");
    if(regex.test(inputText)) {
        return true;
    } else {
        alert("Please enter a valid url for the news.");
        return false;
    }
}

export { verifyInput }

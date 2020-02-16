function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    if (formText === 'Test') {
        return;
    }
    let result = NlpClient.verifyInput(formText);
    if (!result){
        return;
    }
    console.log("::: Form Submitted :::");
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = '<span class="label">Polarity</span><span class="content">'
            + res.polarity+'</span><span class="label">Subjectivity</span><span class="content">'+res.subjectivity+'</span>';
    })
}

export { handleSubmit }

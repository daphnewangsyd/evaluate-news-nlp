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
    console.log("Form text: "+formText);
    const data = {
      data : formText
    };
    fetch('http://localhost:8081/test', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = '<div><span class="label">Polarity</span><span class="content">'
            + res.polarity +'<span class="label">('+res.polarity_confidence.toFixed(2)+' Confidence)</span>'
            +'</span><span class="label">Subjectivity</span><span class="content">'+res.subjectivity +'<span class="label">('+res.subjectivity_confidence.toFixed(2)+' Confidence)</span>'
            +'</span></div><div><span class="label">Text</span><span class="content">'+res.text+'</span></div>';
    })
}

export { handleSubmit }

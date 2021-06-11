function handleSubmit(event) {
    event.preventDefault();
    // check what text was put into the form field
    let formText = document.getElementById("name").value;
    Client.checkForName(formText); //eslint-disable-line
    
    console.log("::: Form Submitted :::");
    fetch("http://localhost:8001/test")
        .then(res => {return res.json();})
        .then(function(data) {
            document.getElementById("results").innerHTML = data.message;
        });
}

export { handleSubmit };
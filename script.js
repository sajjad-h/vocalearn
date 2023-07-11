function fetchWord() {
    fetch('https://test-project-100.000webhostapp.com/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.getElementById('english-word').innerHTML = data.englishWord;
        document.getElementById('bengali-meaning').innerHTML = data.bengaliMeaning;
        document.getElementById('loader-container').style.display = "none";
        document.getElementById('container').style.display = "flex";
    })
    .catch(error => {
        console.log(error);
    });
}

// setTimeout(fetchWord, 2000);
fetchWord();
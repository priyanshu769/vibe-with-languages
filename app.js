const userText = document.querySelector(".user-text");
const translateBtn = document.querySelector(".translate-btn");
const translatedTxt = document.querySelector(".translated-text");

translateBtn.addEventListener("click", translate);

    // Sample text for checking API
    // const text1 = "Priyanshu"
    // const text2 = "Priyam"
    // const text3 = "Amit"

function translate(){
    inputText = userText.value;
    // console.log(inputText);
    // translatedTxt.innerHTML += `<p>${inputText}</p>`;
    // Add automated trial code here

    let url = "https://api.funtranslations.com/translate/minion.json?text=" + inputText
    fetch(url)
    .then(function responeHandler(response) {return response.json()})
    .then(function logJSON(json) {console.log(json)
        bananaText = json.contents.translated;
        translatedTxt.innerHTML += `<p class="output">${bananaText}</p>`;
    }
    )
}


/* THE TRIAL CODE

function autoCheck(text){
        
    let url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=" + text
    fetch(url)
    .then(function responeHandler(response) {return response.json()})
    .then(function logJSON(json) {console.log(json)}
    )}

    autoCheck(text1)
    autoCheck(text2)
    autoCheck(text3)

*/
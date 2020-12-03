const userText = document.querySelector(".user-text");
const grootBtn = document.querySelector(".groot");
const yodaBtn = document.querySelector(".yoda");
const piratesBtn = document.querySelector(".pirates");
const translatedTxt = document.querySelector(".translated-text");

grootBtn.addEventListener("click", translateToGroot);
yodaBtn.addEventListener("click", translateToYoda);
piratesBtn.addEventListener("click", translateToPirates);

const testURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text="
const grootURL = "https://api.funtranslations.com/translate/groot.json?text="
const yodaURL = "https://api.funtranslations.com/translate/yoda.json?text="
const piratesURL = "https://api.funtranslations.com/translate/pirate.json?text="


function translateToGroot() {
    inputText = userText.value;

    let url = grootURL + inputText
    fetch(url)
    .then(function responeHandler(response) { return response.json() })
        .then(function logJSON(json) {
            console.log(json)
            grootText = json.contents.translated;
            translatedTxt.innerHTML = `<p class="output">${grootText}</p>`;
        }).catch(function errorHandling(error) {
            alert("Server Error!!!")
            translatedTxt.innerHTML += `<p class="output invalid">Server is facing a problem!</p>`
        })
    }
    
    function translateToYoda() {
        inputText = userText.value;
        
    let url = yodaURL + inputText
    fetch(url)
        .then(function responeHandler(response) { return response.json() })
        .then(function logJSON(json) {
            console.log(json)
            yodaText = json.contents.translated;
            translatedTxt.innerHTML = `<p class="output">${yodaText}</p>`;
        }).catch(function errorHandling(error) {
            alert("Server Error!!!")
            translatedTxt.innerHTML += `<p class="output invalid">Server is facing a problem!</p>`
        })
    }
    
    function translateToPirates() {
        inputText = userText.value;
    
        let url = piratesURL + inputText
        fetch(url)
            .then(function responeHandler(response) { return response.json() })
            .then(function logJSON(json) {
                console.log(json)
                piratesText = json.contents.translated;
                translatedTxt.innerHTML = `<p class="output">${piratesText}</p>`;
            }).catch(function errorHandling(error) {
                alert("Server Error!!!")
                translatedTxt.innerHTML += `<p class="output invalid">Server is facing a problem!</p>`
            })
        }


/* THE TRIAL CODE

https://api.funtranslations.com/translate/minion.json?text=

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
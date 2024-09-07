let userInputEl = document.getElementById("userInput");
let factEl = document.getElementById("fact");
let spinner = document.getElementById("spinner");

function findEachFact(factList) {
    factEl.textContent = factList.fact;

}

function getFactAboutNumber(event) {
    if (event.key === "Enter") {
        let inputValue = userInputEl.value;
        if (inputValue === "") {
            alert("enter a number");
        } else {
            let url = "https://apis.ccbp.in/numbers-fact?number=" + inputValue;
            let options = {
                method: "GET"
            }
            spinner.classList.remove("d-none");
            factEl.classList.add("d-none");
            fetch(url, options)
                .then(function(resposne) {
                    return resposne.json();
                })
                .then(function(jsonData) {
                    spinner.classList.add("d-none");
                    factEl.classList.remove("d-none");
                    let factList = jsonData;
                    findEachFact(factList);
                })


        }
    }
}

userInputEl.addEventListener("keydown", getFactAboutNumber);
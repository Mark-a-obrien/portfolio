
// container
let container = document.querySelector("#container");

// create question
function createQuestion(titleText, options) {

    // div
    let div = document.createElement("div");
    div.classList.add("question")

    // title
    let title = document.createElement("h2");
    title.textContent = titleText;

    // create options
    let checkboxes = createOptions(options);


    // appending children
    div.appendChild(title)
    container.appendChild(div);
}

// create options
function createOptions(options) {
    
    let checkbox = createElement("input");
    checkbox.type = "checkbox";

    let checkboxes = Array(checkbox, options[0], checkbox, options[1], checkbox, options[2], checkbox, options[3]); 

    return checkboxes;

}


// game 
function game() {
    createQuestion('What is the capital of Russia?');
}
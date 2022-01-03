
// container
let container = document.querySelector("#container");

// create question div
let question = document.createElement("div");
question.classList.add("question");

// title of the question 
let title = document.createElement("h2");
title.textContent = "What is the capital of Russia?";

// question options
let option = document.createElement("input");
option.type = "radio";
option.name = "capital";
option.value = "Dublin";
let label = document.createElement("label");
label.for = option.value;
label.textContent = option.value;



// append
question.appendChild(option)
question.appendChild(label)
question.appendChild(title)
container.appendChild(question);

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var button = document.getElementById("enter");
const deleteButton = document.getElementsByTagName("i");
var clearButton = document.getElementById("clear");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

var list = document.querySelectorAll("li");
for(var i = 0; i < list.length; i++) {
   list[i].addEventListener("click", function(e){
    e.currentTarget.classList.toggle("done");
   })
 }

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
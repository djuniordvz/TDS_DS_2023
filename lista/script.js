const input = window.document.getElementById("input");
const ul = window.document.querySelector("UL");

function add() {
    var li = window.document.createElement("LI");
    var value = input.value;
    var value_li = window.document.createTextNode(value);
    
    li.appendChild(value_li);
    ul.appendChild(li);
}


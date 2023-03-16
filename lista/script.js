const input = window.document.getElementById("input");
const ul = window.document.querySelector("UL");

function add() {
    var li = window.document.createElement("LI");
    var value = input.value;
    var value_li = window.document.createTextNode(value);
    if (input.value.trim() !== "") {
        li.appendChild(value_li);
        ul.appendChild(li);
    }
    input.value = "";
    input.focus();
}

window
    .document
        .querySelector("ul")
            .addEventListener("click", (element) => {element
                .target.classList.toggle("checked");
                });
window
    .document
        .getElementById("input")
            .addEventListener("keypress", (element) => {element
                if (element.key === "Enter") {
                    add()
                }
            });
window
    .document
            .addEventListener("contextmenu", (element) => {element
                .preventDefault();
                    if(element.target.tagName ==="LI") {
                        element.target.remove();
                    }
                });
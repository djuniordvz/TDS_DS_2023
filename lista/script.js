const input = window.document.getElementById("input");
const ul = window.document.querySelector("UL");
const ls_list = JSON.parse(window.localStorage.getItem("list"));

ls_list.forEach((item) => add(item));

function add(item) {
    var li = window.document.createElement("LI");
    var value = item ? item.texto : value = input.value;
    var value_li = window.document.createTextNode(value);
    
    if (input.value.trim() !== "" || item) {
        li.appendChild(value_li);
        ul.appendChild(li);
    }

    if (!item){
        add_list();
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

function add_list() {
    const li_list = window.document.querySelectorAll("li");
    const list = [];
    li_list.forEach((item) => {
        list.push({texto : item.innerText});
    });
    window.localStorage.setItem("list", JSON.stringify(list));
}
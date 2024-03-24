msgs = [
    { "msg": "Hello World" },
    { "msg": "Blah Blah" },
    { "msg": "I love cats" }
  ];
  
function update(tab) {
var ul = document.getElementById("messages");
ul.textContent = '';
for (var i = 0; i < tab.length; i++) {
    var li = document.createElement("li");
    li.textContent = tab[i].msg;
    ul.appendChild(li);
}
console.log(ul)
}

const button = document.getElementById("button-send");

button.addEventListener("click", () => update(msgs));
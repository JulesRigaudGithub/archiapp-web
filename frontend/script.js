const serverName = "archiapp-web-back.onrender.com:10000";
const serverURL = "https://"+serverName;
const websocketURL = "wss://"+serverName;

function main() {  
  function update() {
    console.log("la");
    fetch(serverURL + "/msg/getAll")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var ul = document.getElementById("messages");
      ul.textContent = '';
      for (msg of data.msgs) {
          var li = document.createElement("li");
          li.textContent = msg;
          ul.appendChild(li);
      }
    });
  }

  function send() {
    var textarea = document.getElementById("input");
    if (textarea.value == "") {
      update();
      return;
    }
  
    fetch(serverURL + "/msg/post", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain"
      },
      body: textarea.value
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      textarea.value = "";
      if (data.code == '1') {
        update();
      } else {
        alert("Envoi raté !");
      }
    });
  }

  function deleteMsgs() {
    fetch(serverURL + "/msg/delAll")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.code == '1') {
          update();
        } else {
          alert("Effacement raté !");
        }
      });
  }
  
  const buttonSend = document.getElementById("send");
  buttonSend.onclick = send;
  
  const buttonDelete = document.getElementById("delete");
  buttonDelete.onclick = deleteMsgs;
}

window.onload = main;
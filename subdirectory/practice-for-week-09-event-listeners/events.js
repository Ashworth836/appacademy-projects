// Your code here

function redInputFunction(event) {
    if(document.getElementById("red-input").value === "red"){
        document.getElementById("red-imput").style.backgroundColor = "red";
    }
}

function addItemFunction(event){
    const li = document.createElement("li");
    li.innerText = document.getElementById("list-add").value;
    document.getElementsByTagName("ul")[0].append(li);
}

function colorSelectFunction(event) {
    document.getElementById("section-3").style.backgroundColor = document.getElementById("color-select").value;
}



window.addEventListener("DOMContentLoaded", event =>{
    alert("Page Loaded");

    const redInput = document.getElementById("red-input");
    redInput.addEventListener("input", redInputFunction);

    const addItem = document.getElementById("add-item");
    addItem.addEventListener("click", addItemFunction);

    const colorSelect = document.getElementById(color-select);
    colorSelect.addEventListener("input", colorSelectFunction);

    document.getElementById("remove-listner")
    .addEventListener("click", event =>{
        redInput.removeEventListener("input", redInputFunction);
        addItem.removeEventListener("click", addItemFunction);
        colorSelect.removeEventListener("input", colorSelectFunction);
    });


    const restoreListener = document.createElement("button");
    restoreListener.id = "restore-Listener";
    restoreListener.innerHTML = "Restore Listener";

    document.getElementById("section-4").appendChild(restoreListener);

    const hoverDiv = document.createElement("div");
    hoverDiv.id = "hover-div";
    hoverDiv.innerHTML = "<h2>You Found me!</h2>";
    hoverDiv.style.color = "transparent"; 
    document.body.appendChild(hoverDiv);

    document.getElementById("hover-div").addEventListener("mouseover", event => {
      document.getElementById("hover-div").style.color = "black";
    });
});

window.onkeydown = event => {
  if (event.keyCode === 32) alert("The Space bar has been pressed");
}
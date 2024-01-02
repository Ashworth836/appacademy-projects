// Your code here
window.addEventListener("DOMContentLoaded", event =>{
    document.querySelector("button").addEventListener("click", event =>{
        event.preventDefault();
        const dataType = document.getElementById("type");
        const unorderedList = document.getElementById("shopping-list");
        const listItem = document.createElement("li");
        listItem.innerText = document.getElementById("name").value;
        listItem.setAttribute("data-type", dataType.value);
        unorderedList.appendChild(listItem);
    });
});
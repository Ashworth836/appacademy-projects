// Your code here
window.addEventListener("DOMContentLoaded", event => {
    const header = document.createElement("h1");
    header.id = "kitten-header";
    header.innerText = "Kitten Pic";

    const kittenImg = document.createElement("img");
    kittenImg.alt = "a photo of a cat";
    kittenImg.src = "https://cdn2.thecatapi.com/images/7bp.jpg";

    document.body.append(header);
    document.body.appendChild(kittenImg);
});
/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        const breed = url.split("/").map((x, i, a) =>{
            if(x === "breed") return a[i + 1];
        });

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
        const unorderedList = document.getElementsByClassName("gallery")[0];

        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here
        unorderedList.children[0].innerHTML = `<li><figure><img src=${url} /><figcaption>${breed}</figcaption></figure></li>`

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    let firstDogCard= document.getElementsByTagName("li")[0];

    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
    firstDogCard.remove();
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    let lastDogCard = document.getElementsByTagName("li")[-1];

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
    lastDogCard.remove();
});
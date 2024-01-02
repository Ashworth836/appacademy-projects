export const createMainContent = () => {
    // Create h1
    const h1 = document.createElement("h1");
    h1.innerText = "Catstagram";

    // Create img
    const img = document.createElement("img");
    img.style.margin = "20px";
    img.style.maxWidth = "750px";

    const container = document.querySelector(".container");
    container.appendChild(h1);
    container.appendChild(img);

    if(!localStorage.getItem("currImg")) fetchImage();
};

let score = 0;

export const fetchNew = () => {
    // Add a button that request and display a new cat image. replacing the old one
    const replaceBtn = document.createElement("button");
    replaceBtn.id = "replace-btn";
    replaceBtn.innerText = "Fetch New";

    replaceBtn.addEventListener("click", () => {
        fetchImage();
        document.querySelector("#total-votes").innerText = 0;
        document.querySelector("input[type='text']").value = "";
        const list = document.querySelector("ul");
        while(list.firstChild){
            list.firstChild.remove();
        }
    });

    document.querySelector("#user-option").append(replaceBtn);
}

export const createVoteElement = () => {
    const voteOptions = document.createElement("article");
    voteOptions.id = "user-options";
    document.querySelector(".image-box").append(voteOptions);

    const upVote = document.createElement("div");
    upVote.id = "upvote";
    upVote.className = "votes up-arrow";

    const downVote = document.createElement("div");
    downVote.id = "downvote";
    downVote.className = "votes down-arrow";

    const votesDiv = document.createElement("div");
    votesDiv.id = "total-votes";
    votesDiv.className = "votes total-votes";
    votesDiv.innerText = score;
    const imageBox = document.querySelector(".image-box");
    upVote.addEventListener("click", () => {
        votesDiv.innerText = Number(votesDiv.innerText) + 1;
        saveAll();
    });
    downVote.addEventListener("click", () => {
        votesDiv.innerText = Number(votesDiv.innerText) - 1;
        saveAll();
    });

    voteOptions.append(upVote, downVote, votesDiv)
}
const fetchImage = async () => {
    // Fetch image from API and set img url
    try {
        const kittenResponse = await fetch("https://api.thecatapi.com/v1/images/search?size=small");
        // Converts to JSON
        const kittenData = await kittenResponse.json();
        // console.log(kittenData);
        const kittenImg = document.querySelector("img");
        kittenImg.src = kittenData[0].url;
        saveAll();
    } catch (e) {
        console.log("Failed to fetch image", e);
    }
};

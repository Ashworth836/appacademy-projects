import { createMainContent, fetchNew, createVoteElements } from './main.js';
import { createCommentsForm } from "./comments.js"
import { saveAll, restoreData } from "./restore.js"

const initializePage = () => {
    // Create container
    const container = document.createElement("section");
    container.className = "container";
import { createMainContent } from './main.js';
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.marginTop = "20px";
    document.body.appendChild(container);
};

window.onload = () => {
    initializePage();
    createMainContent();
};
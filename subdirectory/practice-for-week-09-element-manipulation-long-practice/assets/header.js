export const headerContent = () => {
    const header = document.createElement("header");
    header.setAttribute("id", "header");
    const h1Element = document.createElement("h1");
    h1Element.setAttribute("class", "name");
    h1Element.innerText = "Ashworth";
    header.append(h1Element);
    document.body.prepend(header);

    const navBar = document.createElement("nav");
    navBar.className = "nav-container";
    const navList = document.createElement("ul");
    navList.className = "nav-bar";

    const navItems = [
        "my socials",
        "my projects",
        "my hobbies",
        "about me"
    ];

    for(const index in navItems){
        const li = document.createElement("li");
        li.className = "nav-item";
        const anchor = document.createElement("a");
        anchor.className = "nav-bar-link";
        anchor.href = "#";
        anchor.innerText = navItems[index];
        li.appendChild(anchor);
        navList.appendChild(li);
    }

    navBar.append(navList);
    header.append(navBar);
    
}
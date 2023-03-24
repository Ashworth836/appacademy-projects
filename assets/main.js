export const mainContent = () => {
    const main = document.createElement("main");
    main.className = "main";
    document.body.appendChild(main);

    const unorderedList = document.createElement("ul");
    unorderedList.setAttribute("class", "my-details");

    const myDetails = [
        "My name is Ashworth, I start coding in 2022",
        "I code almost everyday if not everyday",
        "Passionate about technology",
        "Being a part of the computer science community gives me sheer joy"
    ];

    for(const text of myDetails){
        const listItem = document.createElement("li");
        listItem.innerText = text;
        listItem.setAttribute("class", "detail");
        unorderedList.appendChild(listItem);
    }

    const clock = document.createElement("li");
    clock.className = "detail current-time";
    
    const time = () => {
      let curr = new Date;
      clock.innerText = "I live in LONEHILL, and it's currently "+ curr.toLocaleTimeString();
      setInterval(time, 1000);
    }; 
    time();
    
    unorderedList.append(clock);
    main.append(unorderedList);
}
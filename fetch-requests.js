/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

// Your code here
function phaseOne() {
    const reqOption = {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery"
    };

    fetch("/products", reqOption);
}


/* ============================== Phase 2 ============================== */

// Your code here
function phaseTwo() {
    const reqOption = {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery"
    };

    fetch("/products", reqOption)
    .then(res => {
        console.log(res.status);
        console.log(res.header.get("Content-type"));
        console.log(res.url);
        return res.text();
    })
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}


/* ============================== Phase 3 ============================== */

// Your code here
function parse(reqBody){
    return reqBody
    .split("&")
    .map(keyValuePair => keyValuePair.split("="))
    .map(([key, value]) => {
        key,
        decodeURIComponent(value)
    })
    .reduce((acc, [key, value]) =>{
        acc[key] = value;
        return acc;
    }, {});
}

function phaseThree() {
    const reqOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(parse("name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery"))
    }

    fetch("/products", reqOptions)
    .then(res => {
        console.log(res.status);
        console.log(res.headers.get("Content-Type"));
        console.log(res.url);
        return res.text()
    })
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
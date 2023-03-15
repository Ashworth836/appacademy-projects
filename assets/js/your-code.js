export function getAllDogs() {
    // Your code here
    const url = '/dogs';
    const header = { 'Content-Type': 'html/text'};
    let body;

    const options = {
        method: 'GET',
        header: header,
        body: body
    };

    return fetch(url, options)
}

export function getDogNumberTwo() {
    // Your  here
    const url = '/dogs/2';
    const header = {'Content-Type': 'html/text'};
    let body;

    const options = {
        method : 'GET',
        header: header,
        body: body
    }

    return fetch(url, options);
}

export function postNewDog() {
    // Your code here
    const url = '/dogs';
    const header = {'Location': `application/x-www-form-urlencoded`};
    let body = new URLSearchParams({
        name: 'opal',
        age: 4
    });

    const options = {
        method: 'POST',
        headers: headers,
        body: body
    }

    return fetch(url, options);
}

export function postNewDogV2(name, age) {
     // Your code here
     const url = '/dogs';
     const headers = {'Location': `application/x-www-form-urlencoded`};
     let body = new URLSearchParams({
        name: name,
        age: age
     });

     const options = {
        method: 'POST',
        headers: headers,
        body: body
     }

     return fetch(url, options);
}

export function deleteDog(id) {
      // Your code here
      const url = `/dogs/${id}/delete`;
      const header = {'AUTH': 'ckyut5wau0000jyv5bsrud90y'};
      let body = new URLSearchParams({
        name: id.name,
        age: id.age
      });

      const options = {
      method: "POST",
      headers: headers,
      body: 
      }

      return fetch(url, options);
}
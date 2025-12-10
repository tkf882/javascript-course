// URL: supersimplebackend.dev

// xhr
const xhr = new XMLHttpRequest();
// set up listener first before triggering it
xhr.addEventListener('load', () => {
    console.log(xhr.response) // "hello!"
});
xhr.open('GET', 'https://supersimplebackend.dev/greeting');
xhr.send();

// fetch
fetch('https://supersimplebackend.dev/greeting'
).then((response) => {
    return response.text();
}).then((text) => {
    console.log(text); // "hello!"
})

// fetch: async await
async function getGreeting() {
    const response = await fetch('https://supersimplebackend.dev/greeting');
    const text = await response.text();
    console.log(text); // "hello!"
} 
getGreeting();

// fetch: POST request
async function postName() {
    const response = await fetch('https://supersimplebackend.dev/greeting', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: 'your_name'
        })
    });
    const text = await response.text();
    console.log(text); // "hi your_name!"
}
postName();

// amazon request error handle
async function getAmazon() {
    // try {
    //     const response = await fetch('https://amazon.com');
    //     const text = await response.text();
    //     console.log(text); 
    // } catch(error) {
    //     console.log(`error: ${error}`); // error: TypeError: NetworkError when attempting to fetch resource.
    // }

    const response = await fetch('https://amazon.com').then(async () => {
        const text = await response.text();
        console.log(text); // "hello!"
    }).catch(error => console.log(`error: ${error}`))

}
getAmazon();

// manual error checking: fetch() doesn't throw error for error 400
async function postNameError() {
    try {
        const response = await fetch('https://supersimplebackend.dev/greeting', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            }
            // body: JSON.stringify({ // NO BODY
            //     name: 'your_name'
            // })
        });
        
        if (await response.status >= 400) {
            throw response
        }
        const text = await response.text();
        console.log(text); 
    } catch(error) {
        if (error.status === 400) {
            const json = await error.json();
            console.log(json);
        } else {
            console.log('Network error. Please try again later.');
        }
    }

}
postNameError();
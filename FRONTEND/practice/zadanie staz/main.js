// https://developers.giphy.com/docs/api/endpoint/
const api_key = "qDP423ry3gi2RRpzguaK1hVpO1aTFp5X";
const main = document.querySelector('main');


function getGifs() {
    const gifname = encodeURIComponent(document.querySelector('.gifname').value.trim());
    const gifnumber = document.querySelector('.gifnumber').value;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${gifname}&limit=${gifnumber}&offset=0&rating=G&lang=en`;
    // console.log(url)
    fetch(url)
    .then(response => {
        if(response.status !== 200) {
            throw Error("Nieprawidłowa odpowiedź serwera");
        } else {
            return response.json();
        }
    })
    .then(json => showGifs(json))
    .catch(err => console.log(err));
}

function showGifs(json) {
    main.innerHTML = "";
    json.data.forEach(gif => {
        const img = document.createElement("img");
        img.setAttribute('src', gif.images.original.url);
        main.appendChild(img);
    });
}

document.querySelector('.submit').addEventListener('click', function(event) {
    event.preventDefault();
    getGifs();
});

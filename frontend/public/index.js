let cadeiras = 'https://apoiomtsvox.herokuapp.com/ChoicePlace'
let changeOCPTrue = 'https://apoiomtsvox.herokuapp.com/TakePlace/true'
let blocos = document.querySelector('#templo');
let button = document.querySelector('button');
let BA = document.querySelector('#blocoA');
let BB = document.querySelector('#blocoB');
let BC = document.querySelector('#blocoC');
let BD = document.querySelector('#blocoD');

async function getPlaces() {
    try {
        const response = await axios.get('https://apoiomtsvox.herokuapp.com/ChoicePlace');
        let lugares = response.data;
        // BA.innerHTML = "LUGARES"
        geraButton(lugares);


    } catch (error) {
        // console.error(error);
    }
}



function geraButton(lugares) {
    // console.log("mudar cor")
    // console.log(lugares)
    // BA.innerHTML = '';
    for (let NC = 0; NC <= lugares.length; NC++) {
        if (lugares[NC].cordinates[0] == 'A') {
            let ocp = [lugares[NC].occupation, 'A', NC]
            BA.innerHTML += `<button id=${lugares[NC].occupation} value =${ocp} onclick=changeColor(this)>${lugares[NC].cordinates[0]}${lugares[NC].cordinates[1]}</button>`
        } else if (lugares[NC].cordinates[0] == 'B') {
            let ocp = [lugares[NC].occupation, 'B', NC]
            BB.innerHTML += `<button id=${lugares[NC].occupation} value =${ocp} onclick=changeColor(this)>${lugares[NC].cordinates[0]}${lugares[NC].cordinates[1]}</button>`
        } else if (lugares[NC].cordinates[0] == 'C') {
            let ocp = [lugares[NC].occupation, 'C', NC]
            BC.innerHTML += `<button id=${lugares[NC].occupation} value =${ocp} onclick=changeColor(this)>${lugares[NC].cordinates[0]}${lugares[NC].cordinates[1]}</button>`
        } else if (lugares[NC].cordinates[0] == 'D') {
            let ocp = [lugares[NC].occupation, 'D', NC]
            BD.innerHTML += `<button id=${lugares[NC].occupation} value =${ocp} onclick=changeColor(this)>${lugares[NC].cordinates[0]}${lugares[NC].cordinates[1]}</button>`
        }
    }
}


function changeColor(button) {
    let splt = button.value.split(',', 3)
    console.log(splt)
    if (splt[0] == 'false') {
        axios({
            method: 'post',
            url: 'https://apoiomtsvox.herokuapp.com/TakePlace/true',
            data: {
                cordinates: [splt[1], parseInt(splt[2])],
                occupation: false
            }
        });
    } else if (splt[0] == 'true') {
        axios({
            method: 'post',
            url: 'https://apoiomtsvox.herokuapp.com/TakePlace/false',
            data: {
                cordinates: [splt[1], parseInt(splt[2])],
                occupation: true
            }
        });
    }
    location.reload();
    // getPlaces();
}

getPlaces();

// -------------------------------
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./service-worker.js')
        .then(function() {
            console.log('Service Worker Registered');
        }, function(error) {
            console.log(error);
        });
}
// ------------------------------
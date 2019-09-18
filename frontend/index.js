let cadeiras = 'http://localhost:3000/ChoicePlace'
let changeOCPTrue = 'http://localhost:3000/TakePlace/true'
let blocos = document.querySelector('#templo');
let button = document.querySelector('button');
let BA = document.querySelector('#blocoA');
let BB = document.querySelector('#blocoB');
let BC = document.querySelector('#blocoC');
let BD = document.querySelector('#blocoD');

async function getPlaces() {
    try {
        const response = await axios.get('http://localhost:3000/ChoicePlace');
        let lugares = response.data;
        for (let NC = 0; NC <= lugares.length; NC++) {

            if (lugares[NC].cordinates[0] == 'A') {

                console.log(lugares[NC].cordinates[0])
                let ocp = [lugares[NC].occupation, "A", NC]
                BA.innerHTML += `<button id=${lugares[NC].occupation} value =${ocp} onclick=changeColor(this)>${lugares[NC].cordinates[0]}${lugares[NC].cordinates[1]}</button>`

            } else if (lugares[NC].cordinates[0] == 'B') {
                let ocp = [lugares[NC].occupation, "B", NC]
                BB.innerHTML += `<button id=${lugares[NC].occupation} value =${ocp} onclick=changeColor(this)>${lugares[NC].cordinates[0]}${NC}</button>`
            }
            // else if (lugares[NC].cordinates[0] == 'C') {
            //     BC.innerHTML += `<button>${lugares[NC].cordinates[0]}${NC}</button>`
            // } else if (lugares[NC].cordinates[0] == 'D') {
            //     BD.innerHTML += `<button>${lugares[NC].cordinates[0]}${NC}</button>`
            // }
        }
    } catch (error) {
        console.error(error);
    }
}

getPlaces();


function occupy(cordinals) {
    console.log(cordinals)
    axios.post('http://localhost:3000/TakePlace/true', {
            cordinates: [cordinals[1], parseInt(cordinals[2])]
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
}

function takeOff(cordinals) {
    console.log("entrou na take off")
    console.log(cordinals)
    axios.post('http://localhost:3000/TakePlace/false', {
            cordinates: [cordinals[1], parseInt(cordinals[2])]
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
}

// {"cordinates": ["A",1]}
function changeColor(button) {
    let splt = button.value.split(',', 3)
    console.log(splt)
    if (splt[0] == 'false') {

        console.log(`falso:${splt[0]}`)
        occupy(splt)
        button.style.backgroundColor = 'red'

    } else {
        console.log(`verdadeiro:${splt[0]}`)
        takeOff(splt)
        button.style.backgroundColor = 'green'


    }
    // location.reload();
    // localStorage.clear();
    // sessionStorage.clear()
}
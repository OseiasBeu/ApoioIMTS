let cadeiras = 'http://localhost:3000/ChoicePlace'
let blocos = document.querySelector('#templo');
let BA = document.querySelector('#blocoA')
let BB = document.querySelector('#blocoB')
let BC = document.querySelector('#blocoC')
let BD = document.querySelector('#blocoD')

async function getPlaces() {
    try {
        const response = await axios.get('http://localhost:3000/ChoicePlace');
        let lugares = response.data;
        for (let NC = 1; NC < lugares.length; NC++) {
            if (lugares[NC].cordinates[0] == 'A') {
                console.log(`Bloco: ${lugares[NC].cordinates[0]} Cadeira Nº: ${lugares[NC].cordinates[1]}`);
                BA.innerHTML += `<button>${lugares[NC].cordinates[0]}${lugares[NC].cordinates[1]}</button>`
            } else if (lugares[NC].cordinates[0] == 'B') {
                BB.innerHTML += `<button>${lugares[NC].cordinates[0]}${lugares[NC].cordinates[1]}</button>`
            } else if (lugares[NC].cordinates[0] == 'C') {
                BC.innerHTML += `<button>${lugares[NC].cordinates[0]}${lugares[NC].cordinates[1]}</button>`
            } else if (lugares[NC].cordinates[0] == 'D') {
                BD.innerHTML += `<button>${lugares[NC].cordinates[0]}${lugares[NC].cordinates[1]}</button>`
            }

        }
        console.log(`Lugares carregados com sucesso!`)
        return lugares;

    } catch (error) {
        console.error(error);
    }
}

getPlaces();
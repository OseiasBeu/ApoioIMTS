let cadeiras = 'http://localhost:3000/ChoicePlace'
let blocos = document.querySelector('#templo');
let BA = document.querySelector('#blocoA')
let img = new Image();

let caminhoCadeiraImg = '/imgs/poltrona.svg'

// axios({
//         method: 'get',
//         url: 'http://localhost:3000/ChoicePlace',
//         // responseType: 'stream'
//     })
//     .then(function(response) {
//         console.log(response.data[0].cordinates)
//     });

async function getPlaces() {
    try {
        const response = await axios.get('http://localhost:3000/ChoicePlace');
        let lugares = response.data;
        for (let NC = 1; NC < lugares.length; NC++) {
            console.log(`Bloco: ${lugares[NC].cordinates[0]} Cadeira Nº: ${lugares[NC].cordinates[1]}`);
        }
        console.log(`Lugares carregados com sucesso!`)
        return lugares;

    } catch (error) {
        console.error(error);
    }
}


// function tagPlace() {
//     let pl = getPlaces();
//     console.log(pl);
//     for (let NC = 1; NC < pl.length; NC++) {
//         console.log(`Bloco: ${pl.cordinates[0]}`);
//     }
// }


getPlaces();

// tagPlace();
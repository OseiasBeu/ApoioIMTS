let blocos = document.querySelector('#BLOCOS');
let cadeiras = 'http://localhost:3000/ChoicePlace'

let caminhoCadeiraImg = '/imgs/poltrona.svg'

axios.get(cadeiras).then(function (response) {
    console.log(Object.entries(response.data[1])[2])
    for (let cadeira = 1; cadeira < response.data.length; cadeira ++) {
        console.log(response.data[cadeira])
        blocos.innerHTML = +`<article>${Object.entries(response.data[cadeira])[1]}</article>`;
    }
    // console.log(listarTodasAsPropriedades(response.data))
});

blocos.innerHTML =+ `<img src=${caminhoCadeiraImg} alt="cadeira imagem"/>`


// for(row in response.data) {
//     console.log('array["' + row + '"] = ' + response.data[row]);    
// }

// function listarTodasAsPropriedades(o){     
// 	let objectoASerInspecionado;     
// 	let resultado = [];
	
// 	for(objectoASerInspecionado = o; objectoASerInspecionado !== null; objectoASerInspecionado = Object.getPrototypeOf(objectoASerInspecionado)){  
// 		resultado = resultado.concat(Object.getOwnPropertyNames(objectoASerInspecionado));  
// 	}
	
// 	return resultado; 
// }


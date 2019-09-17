let blocos = document.querySelector('#BLOCOS');
let img = new Image();
let cadeiras = 'http://localhost:3000/ChoicePlace'
let caminhoCadeiraImg = '/imgs/poltrona.svg'


axios.get(cadeiras).then(function (response) {
    console.log(Object.entries(response.data[1])[2])
    for (let cadeira = 1; cadeira < response.data.length; cadeira ++) {
        console.log(response.data[cadeira])
        // blocos.innerHTML = +`<article>${Object.entries(response.data[cadeira])[1]}</article>`;
    }
    // console.log(listarTodasAsPropriedades(response.data))
});


// INSERT IMAGENS IN DISPLAY
// img.onload = function() {
//   blocos.appendChild(img);
// };

img.onload = function() {
    blocos.innerHTML =+ `<img src=${img.src}    />`
  };
  
img.src = caminhoCadeiraImg;

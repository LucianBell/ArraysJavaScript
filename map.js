const notas = [10, 9.5, 8, 7, 6];

const novasNotas = notas.map((element) => {
    return element + 1 >= 10 ? 10 : element + 1;
    //         Condição     se for V : se for F
})

console.log(novasNotas)

//let novasNotas = [];
//
//notas.forEach((element) => {
//    novasNotas = element + 1;
//})
//
//console.log(novasNotas);
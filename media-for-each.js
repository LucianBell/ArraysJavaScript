const notas = [10, 6.5, 8, 7.5];

let somaNotas = 0;

notas.forEach(element => somaNotas += element);

const media = somaNotas / notas.length;

console.log(`A média das notas é ${media}`);

//OU

//notas.forEach(function (nota, index) {
//    somaNotas += nota;
//    console.log(index)
//})

//OU

//notas.forEach((element) => {
//    somaNotas += element;
//    console.log(somaNotas);
//})
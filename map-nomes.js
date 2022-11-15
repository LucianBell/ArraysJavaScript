const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesNovo = nomes.map((element) => element.toUpperCase());

//Quando o arrow function só retorna um valor, tu pode tirar o return e
//as chaves e deixar a função mais simples, como está acima

console.log(nomesNovo);
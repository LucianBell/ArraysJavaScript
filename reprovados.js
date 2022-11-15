const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((element, index) => {
    if (medias[index] < 7) {
        return true;
    }
    else {
        return false;
    }
})

console.log(`Os alunos reprovados foram: ${reprovados}`);

//OR

const aprovados = alunos.filter((_, index) => {
    return medias[index] >= 7;
})

console.log(`Os alunos aprovados foram: ${aprovados}`);
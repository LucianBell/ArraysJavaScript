const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function achaNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        //const alunos = listaDeAlunosEMedias[0]
        //const medias = listaDeAlunosEMedias[1]
        //Abaixo você vê uma maneira de fazer a mesma coisa que foi feita acima, só que em só 1 linha.

        const [alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);

        const media = medias[indice];

        console.log(`${aluno} está cadastrado(a) e sua média é ${media}`);
    }
    else {
        console.log(`Aluno não cadastrado!`);
    }
}

achaNomeENota("Juliana")
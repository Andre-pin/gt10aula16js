

// // Array para armazenar os alunos
// let alunos = [];

// // Função para verificar se a nota é válida (0 a 10)
// function notaValida(nota) {
//   return nota >= 0 && nota <= 10;
// }

// // Função para cadastrar um novo aluno
// function cadastrarAluno(nome, nota1, nota2) {
//   let media = (nota1 + nota2) / 2;

//   let aluno = {
//     nome: nome,
//     nota1: nota1,
//     nota2: nota2,
//     media: media
//   };

//   alunos.push(aluno);
// }

// // Função para mostrar o resultado de cada aluno
// function mostrarResultados() {
//   console.log("📋 Resultados dos alunos:");
//   for (let aluno of alunos) {
//     console.log(`Aluno: ${aluno.nome}`);
//     console.log(`Média: ${aluno.media.toFixed(2)}`);
//     if (aluno.media >= 7) {
//       console.log("Situação: Aprovado ✅");
//     } else {
//       console.log("Situação: Reprovado ❌");
//     }
//     console.log("-----------------------");
//   }
// }

// let qtdAlunos = Number(prompt("Quantos alunos deseja cadastrar?"));

// for (let i = 1; i <= qtdAlunos; i++) {
//   let nome = prompt(`Digite o nome do aluno ${i}:`);

//   let nota1 = Number(prompt(`Digite a primeira nota de ${nome}:`));
//   while (!notaValida(nota1)) {
//     nota1 = Number(prompt("Nota inválida. Digite a primeira nota novamente (0 a 10):"));
//   }

//   let nota2 = Number(prompt(`Digite a segunda nota de ${nome}:`));
//   while (!notaValida(nota2)) {
//     nota2 = Number(prompt("Nota inválida. Digite a segunda nota novamente (0 a 10):"));
//   }

//   cadastrarAluno(nome, nota1, nota2);
// }
// mostrarResultados();


// function notaValida(nota) {
//     return nota >= 0 && nota <= 10;
//   }
  
//   function calcularMedia(n1, n2) {
//     return (n1 + n2) / 2;
//   }
  
//   let listaDeAlunos = [];
  
//   let quantidade = Number(prompt("Quantos alunos deseja cadastrar?"));
  
//   for (let i = 0; i < quantidade; i++) {
//     let aluno = {}; 
  
//     aluno.nome = prompt("Digite o nome do aluno:");
  
//     aluno.nota1 = Number(prompt("Digite a primeira nota:"));
//     while (!notaValida(aluno.nota1)) {
//       aluno.nota1 = Number(prompt("Nota inválida. Digite a primeira nota novamente (0 a 10):"));
//     }
  
//     aluno.nota2 = Number(prompt("Digite a segunda nota:"));
//     while (!notaValida(aluno.nota2)) {
//       aluno.nota2 = Number(prompt("Nota inválida. Digite a segunda nota novamente (0 a 10):"));
//     }
  
//     aluno.media = calcularMedia(aluno.nota1, aluno.nota2);
  
//     if (aluno.media >= 7) {
//       aluno.status = "Aprovado";
//     } else {
//       aluno.status = "Reprovado";
//     }
  
//     listaDeAlunos.push(aluno);
//   }
  
//   console.log("Resultado final dos alunos:");
//   for (let i = 0; i < listaDeAlunos.length; i++) {
//     let aluno = listaDeAlunos[i];
//     console.log(
//       "Nome: " + aluno.nome +
//       " | Nota 1: " + aluno.nota1 +
//       " | Nota 2: " + aluno.nota2 +
//       " | Média: " + aluno.media.toFixed(2) +
//       " | Situação: " + aluno.status
//     );
//   }
  

let alunos = [];

function notaValida(nota) {
  return nota >= 0 && nota <= 10;
}

function cadastrarAluno(nome, nota1, nota2) {
  let media = (nota1 + nota2) / 2;

  let aluno = {
    nome: nome,
    nota1: nota1,
    nota2: nota2,
    media: media
  };

  alunos.push(aluno);
}

function mostrarResultados() {
  console.log("📋 Resultados dos alunos:");
  for (let aluno of alunos) {
    console.log(`Aluno: ${aluno.nome}`);
    console.log(`Média: ${aluno.media.toFixed(2)}`);
    if (aluno.media >= 7) {
      console.log("Situação: Aprovado ✅");
    } else {
      console.log("Situação: Reprovado ❌");
    }
    console.log("-----------------------");
  }
}

function contarAprovadosReprovados() {
  let aprovados = 0;
  let reprovados = 0;

  for (let aluno of alunos) {
    if (aluno.media >= 7) {
      aprovados++;
    } else {
      reprovados++;
    }
  }

  console.log(`✅ Total de aprovados: ${aprovados}`);
  console.log(`❌ Total de reprovados: ${reprovados}`);
}

let qtdAlunos = Number(prompt("Quantos alunos deseja cadastrar?"));

for (let i = 1; i <= qtdAlunos; i++) {
  let nome = prompt(`Digite o nome do aluno ${i}:`);

  let nota1 = Number(prompt(`Digite a primeira nota de ${nome}:`));
  while (!notaValida(nota1)) {
    nota1 = Number(prompt("Nota inválida. Digite a primeira nota novamente (0 a 10):"));
  }

  let nota2 = Number(prompt(`Digite a segunda nota de ${nome}:`));
  while (!notaValida(nota2)) {
    nota2 = Number(prompt("Nota inválida. Digite a segunda nota novamente (0 a 10):"));
  }

  cadastrarAluno(nome, nota1, nota2);
}

mostrarResultados();
contarAprovadosReprovados();

// function calcularMedia(primeiraNota, segundaNota, terceiraNota) {
//   const media = (primeiraNota + segundaNota + terceiraNota) / 3;
//   return media;
// }

// function notaValida(nota) {
//   if (nota >= 0 && nota <= 10) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const nomeDoAluno = prompt("Digite o nome do aluno:");

// let primeiraNota = Number(prompt("Digite a primeira nota:"));
// while (!notaValida(primeiraNota)) {
//   primeiraNota = Number(prompt("Nota inválida. Digite a primeira nota (0 a 10):"));
// }
// console.log("Primeira Nota:", primeiraNota);

// let segundaNota = Number(prompt("Digite a segunda nota:"));
// while (!notaValida(segundaNota)) {
//   segundaNota = Number(prompt("Nota inválida. Digite a segunda nota (0 a 10):"));
// }
// console.log("Segunda Nota:", segundaNota);

// let terceiraNota = Number(prompt("Digite a terceira nota:"));
// while (!notaValida(terceiraNota)) {
//   terceiraNota = Number(prompt("Nota inválida. Digite a terceira nota (0 a 10):"));
// }
// console.log("Terceira Nota:", terceiraNota);

// const media = calcularMedia(primeiraNota, segundaNota, terceiraNota);
// console.log(nomeDoAluno, "sua média é:", media.toFixed(2));

// let frutas = ["maçã", "banana", "laranja"];
// console.log(frutas);
// console.log(frutas[1]);
// console.log(frutas.length);

// frutas[1] = "morango";  // Altera "banana" para "morango"
// console.log(frutas);

// frutas.push("Abacaxi");
// console.log(frutas);

// frutas.pop();
// console.log(frutas);

// frutas.shift();
// console.log(frutas);

// frutas.unshift("pera");
// console.log(frutas);

// let frutas = ["maçã", "banana", "laranja"];

// for (const fruta in frutas){
//   console.log (frutas[fruta])
// }

// let pessoa = {
//   nome: "João",
//   idade: 25,
//   profissao: "Programador",
//   dataN: '10/10/2010'
// };

// console.log (frutas[0])
// console.log(pessoa.dataN)

// let pessoas = [
//   {
//   nome: "João",
//   idade: 25,
//   profissao: "Programador",
//   dataN: '10/10/2010'
// },

// {
//   nome: "Ana",
//   idade: 35,
//   profissao: "Secretária",
//   dataN: '23/11/2010'
// },

// ]
//  console.log(pessoas)
//  console.log(pessoas[1].nome)

//  let livros =[]

//  const qtdLivros = Number(prompt('Quantos livro Salvos:'))

//  for (let i = 0; i <= qtdLivros; i++) {
//   let livro = prompt ('Nome do Livro:')
//   livros.push(livro)

//  }
//  console.log(livros)

// let livros = [];

// const qtdLivros = Number(prompt("Quantos livro Salvos:"));

// for (let i = 1; i <= qtdLivros; i++) {
//   let livro = prompt("Nome do Livro:");
//   livros.push(livro);
//   let index = i - 1;
//   console.log(livros[index]);
// }
// console.log(livros);

// const nomeLivro = prompt("Digite o nome do Livro vc quer remover");

// const livroRemovido = livros.indexOf(nomeLivro);

// console.log("livroRemovido", livroRemovido);

// if (livroRemovido != -1) {
//   livros.splice(livroRemovido, 1);
// }

// console.log(livros);

// let pessoa = []
// console.log(pessoa)

// pessoa.push(
//   [
// nome: 'luis',
//     idade: 22

// ])
// console.log(pessoa)

// let alunos = []

// function mostrarResultados() {
//   for (let aluno of alunos) {
//     console.log(`Aluno: (aluno.nome)`);
//     console.log(`Média: (aluno.media)`);

//     if (aluno.media >= 7) {
//       console.log("Situação: Aprovado");
//     } else {
//       console.log("Situação: Reprovado");
//     }

   
//   }
// }

let alunos = [];

const qtdAlunos = Number(prompt("Quantos Alunos tem a sala?"));

for (let i = 1; i <= qtdAlunos; i++) {
  const nomeAluno = prompt("Nome do Aluno:");
  const nota1 = Number(prompt("Digite primeira Nota " + nomeAluno + ":"));
  const nota2 = Number(prompt("Digite segunda Nota " + nomeAluno + ":"));

    const aluno = {
      nome: nomeAluno,
      nota1: nota1,
      nota2: nota2,
      media: (nota1 + nota2)/2
    }
  alunos.push(aluno);
  let index = i - 1;
  console.log(alunos[index]);
}
console.log(alunos);


// function notaValida(nota) {
//   if (nota >= 0 && nota <= 10) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function calcularMedia(notas) {
//   let soma = 0;

//   for (let i = 0; i < 3; i++) {
//     soma = soma + notas[i];
//   }

//   let media = soma / 3;
//   return media;
// }

// const nomeDoAluno = prompt("Digite o nome do aluno:");

// let notas = [];

// for (let i = 0; i < 3; i++) {
//   let nota = Number(prompt("Digite a nota " + (i + 1) + ":"));

//   while (notaValida(nota) == false) {
//     nota = Number(prompt("Nota inválida! Digite a nota " + (i + 1) + " novamente (de 0 a 10):"));
//   }

//   notas.push(nota);

//   console.log("Nota " + (i + 1) + ":", nota);
// }

// let mediaFinal = calcularMedia(notas);

// console.log(nomeDoAluno + ", sua média é: " + mediaFinal.toFixed(2));

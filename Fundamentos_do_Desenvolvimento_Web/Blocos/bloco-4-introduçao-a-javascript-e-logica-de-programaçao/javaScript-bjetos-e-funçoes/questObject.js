let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'último MacPatinhas',
  recorrente: 'sim',
};

console.log("Bem-vinda, "+ info['personagem']);

info['recorrente'] = 'sim';

console.table(info);

for(let key in info, info2){
  console.log(info[key] +' e '+ info2[key]);
}


let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

leitor['fullName'] =  leitor.nome +' '+ leitor.sobrenome;
let titulo = leitor.livrosFavoritos[0]['titulo'];

console.log("O livro favorito de "+ leitor.fullName +" se chama "+ titulo);

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editor: 'Rocco',
})

console.log(leitor.nome +" tem "+ leitor.livrosFavoritos.length +" livros favoritos");
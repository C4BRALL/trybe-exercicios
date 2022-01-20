const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const booksRead = books.map((book) => {
  return {
    name: book.name,
    genre: book.genre,
    author: book.author.name,
  };
});
console.table(booksRead);

const ageName = books.map((book) => {
  const age = book.releaseYear - book.author.birthYear;
  return {
    age: age,
    author: book.author.name,
  };
});
function compare(a, b) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  return 0;
};
const sortBooks = ageName.sort(compare);
console.table(sortBooks);

const fantasyOrScienceFiction = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
console.table(fantasyOrScienceFiction);

function compareRealease(a, b) {
  if (a.releaseYear < b.releaseYear) {
    return -1;
  }
  if (a.releaseYear > b.releaseYear) {
    return 1;
  }
  return 0;
};
const oldBooksOrdered = books.filter((book) => {
  const releaseAge = 2022 - book.releaseYear;
  return releaseAge > 60;
});
const sortRelease = oldBooksOrdered.sort(compareRealease);
console.table(sortRelease);

const fantasyOrScienceFictionAuthors = fantasyOrScienceFiction.map((book) => {
  return {
    name: book.author.name,
  };
});
function compareName(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};
console.table(fantasyOrScienceFictionAuthors.sort(compareName));
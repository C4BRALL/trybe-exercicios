const employees = {
  id1: 'Pedro Guerra', 
  id2: 'Luiza Drumond', 
  id3: 'Carla Paiva',
  greet: function(callback, id) {
    const message = callback(id);
    return message;
  },
};
const greeting = (id) => {
  return `Ola querido ${id}!!!`
};

console.log(employees.greet(greeting, "Olaf"));
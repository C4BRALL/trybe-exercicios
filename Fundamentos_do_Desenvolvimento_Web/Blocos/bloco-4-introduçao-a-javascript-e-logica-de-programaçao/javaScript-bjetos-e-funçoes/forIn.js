let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

for(let hello in names){
    console.log("Ola "+ names[hello]);
  }



let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for(let key in car){
    console.log(key +': '+ car[key]);
}
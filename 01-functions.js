function minhaFunction() {
  // Este
  this.name = 'Sammy';

  const minhaArrowFunction = () => {
    this.name = 'Sammy'; 
   };

   minhaArrowFunction();
}
// Dentro de uma function ela possui seu proprio this, enquanto uma arrow function usa o this do contexto que ela esta inserida.
console.log(new minhaFunction());
console.log(this);

function soma(primeiroParametro,...argumentos) {
  // console.log(arguments); arguments funciona apenas em uma function normal
  //...rest operator funciona tambem em arrowFunction
  console.log(primeiroParametro)
  console.log(argumentos)
}

soma(1, 2, 3, 4, 5, 6, 7); 

const arrow = () => {
  // arrow function com corpo
}

const arrowRetornoDireto = () => 'Hello World'

const arrowSemReturn = () => 
({teste: 'Hello World'});
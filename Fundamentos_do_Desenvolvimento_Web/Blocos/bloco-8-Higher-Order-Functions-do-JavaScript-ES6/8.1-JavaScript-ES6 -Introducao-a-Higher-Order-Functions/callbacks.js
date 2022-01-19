const myAddEventListener = (quando, oQue, quem) => {
  if (quando == 'click' || quando == 'contextmenu'){
      quem.addEventListener(quando, oQue);
      return true;
  }else{
      return false;
  }
}

const createEvents = (quem, oQue, sucesso, erro) => {
  let retorno = myAddEventListener('click', oQue, quem);
  let retorno2 = myAddEventListener('contextmenu', oQue, quem);
  if(retorno === false || retorno2 === false){
      erro();
  }else{
      sucesso();
  }
}

const button = document.querySelector('button');

createEvents(button, () => {
  console.log('clicou!');
},
() => {
  console.log('os eventos foram criados!');
},
() => {
  console.log('os eventos NÃO foram criados!');
});
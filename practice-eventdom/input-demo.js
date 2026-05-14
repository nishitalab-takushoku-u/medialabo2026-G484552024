 b = document.querySelector('button#print');
 function greeting() {
    let i = document.querySelector('input[name="shimei"]');
    i.getAttribute('name');
   
    console.log('こんにちは'+i.value+'さん');
  }
  b.addEventListener('click', greeting);
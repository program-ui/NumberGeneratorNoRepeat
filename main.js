function Generator( n ){
  
  let numbers = [], temp = n;
  while (temp--) {
    numbers[temp] = temp+1;
  }
  let index = Math.floor(Math.random() * n--),
      last  = numbers.splice(index, 1)[0];
 console.log( numbers, index , last );
    
  function generate(){
    index = Math.floor(Math.random() * n); 
    temp = last;
    last = numbers[index];
    numbers[index] = temp;
  console.log( numbers, index , last );
    return last;
  }
  
  return generate;
  
  
}
let generator = Generator(4);



const btn = document.querySelector('button')
btn.addEventListener('click', () => {
  console.log( generator() );
})
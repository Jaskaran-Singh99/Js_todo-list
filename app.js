const button1 = document.getElementById('addtodo');
const inputField = document.getElementById('inputfield')
const container = document.getElementById('todocontainer')

 button1.addEventListener('click', function(){
  var input = document.createElement('p');
  input.innerHTML = inputField.value;
  input.classList.add('parap');
  container.appendChild(input);
  inputField.value = '';
  input.addEventListener('click', function(){
    input.style.textDecoration= 'line-through';
  })
  input.addEventListener('dblclick', function(){
    container.removeChild(input)
  })
})


















































































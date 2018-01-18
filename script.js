var list = document.getElementById('list');

var add = document.getElementById('button');

button.addEventListener(click, function(addElem) {
  
  var element = document.createElement('li');
  element.innerHTML = 'item';
  x =  document.getElementsByTagName('li');
  var xlength = x.length;
  console.log(xlength);
  list.appendChild(element);
  
});

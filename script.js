var list = document.getElementById('list');

var add = document.getElementById('addElem');

add.addEventListener("click", function() {
  
  var element = document.createElement('li');
  var allLi =  list.getElementsByTagName('li');
  list.appendChild(element);
  element.innerHTML = 'item ' + allLi.length;
  
});
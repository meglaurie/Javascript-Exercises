
const container = document.querySelector("#container");
const pElement = document.createElement('p');
const h3Element = document.createElement('h3');
const divElement = document.createElement('div');
const h1Element = document.createElement('h1');
const p2Element = document.createElement('p');
const btn = document.querySelector('#btn');

divElement.style.background = "pink";
divElement.style.border = " 1px black solid";
h3Element.textContent = "Hey I'm Blue";
h3Element.style.color = "blue";
pElement.textContent = "Hey I’m Red!";
pElement.style.color = "red";
h1Element.textContent = "I'm in a div";
p2Element.textContent = "me too!"

container.appendChild(pElement);
container.appendChild(h3Element);
divElement.appendChild(h1Element);
divElement.appendChild(p2Element);
container.appendChild(divElement);

btn.addEventListener('click', (e) =>{
  e.target.style.background = 'blue';
  console.log(e);
});

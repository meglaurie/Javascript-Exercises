
const container = document.querySelector("#container");

const pElement = document.createElement('p');
pElement.textContent = "Hey I’m red!";
pElement.style.color = "red";

container.appendChild(pElement);

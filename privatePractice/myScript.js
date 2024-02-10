// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.classList.add('testParagraph');
paragraph.textContent = 'Hey I’m red!';
paragraph.style.cssText = 'color: red';

const header3 = document.createElement('h3');
header3.textContent = 'Im a blue h3!';
header3.style.cssText = 'color: blue'

const div = document.createElement('div');
div.style.cssText = 'background-color: pink; border: 4px solid black;'

const h1InDiv = document.createElement('h1');
h1InDiv.textContent = 'Im in a div';

const pInDiv = document.createElement('p');
pInDiv.textContent = 'Me Too';

container.appendChild(paragraph);
container.appendChild(header3);

div.appendChild(h1InDiv);
div.appendChild(pInDiv);

container.appendChild(div);





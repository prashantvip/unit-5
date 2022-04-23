
import './index.css'
import './logo.png'


const root = document.getElementById("root");

const image = document.createElement("img");
image.src = "./src/logo.png";

root.append(image);

//main div to contain text
const textDiv = document.createElement('div');
textDiv.setAttribute('class', 'textDiv');
//for input section
const leftDiv = document.createElement('div');
leftDiv.setAttribute('class', 'leftDiv');

const textArea = document.createElement('textarea');
textArea.setAttribute('class', 'textArea');
textArea.setAttribute('placeholder', 'Enter Text Here');

const button = document.createElement('button');
button.innerText = 'Submit';

//show text;
const rightDiv = document.createElement('div');
rightDiv.setAttribute('class', 'rightDiv');

button.addEventListener('click', () => {
  rightDiv.innerText +=   textArea.value + '\n';
});
leftDiv.append(textArea, button);
textDiv.append(leftDiv, rightDiv);
root.append(textDiv);

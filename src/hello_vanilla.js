import sass from './SCSS/main.scss'
import logo from './img/js.svg'
import data from './data.json'
import {helloWorld} from "./components/App.js";


const 	d =document,
		app 	= d.getElementById('app'),
		h1 		= d.createElement('h1'),
		img 	= d.createElement('img'),
		p 		= d.createElement('p'),
		nav 	= d.createElement('nav'),
		hello = new helloWorld('Vanilla JS');
let 	menu  	= '';
data.links.forEach(link => menu += `<a href="${link[1]}">${link[0]}</a>`);


h1.textContent 	= `Webpack + Vanilla JS`;
p.textContent 	= hello.greet(hello);
img.src 		= logo;
nav.classList.add('Menu');
nav.innerHTML = menu;


app.appendChild(h1);
app.appendChild(p);
app.appendChild(nav);
app.appendChild(img);


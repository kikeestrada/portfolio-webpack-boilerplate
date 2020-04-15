import sass from './SCSS/main.scss';
import logo from './img/webpack.svg';
import data from './data.json';

const 	d =document,
		app 	= d.getElementById('app'),
 		h1 		= d.createElement('h1'),
 		img 	= d.createElement('img'),
 		p 		= d.createElement('p'),
 		nav 	= d.createElement('nav');
let 	menu  	= '';
data.links.forEach(link => menu += `<a href="${link[1]}">${link[0]}</a>`);

h1.textContent 	= 'Proyecto con Webpack';
p.textContent 	= 'Aplicacion con Webpack';
img.src 		= logo;
nav.classList.add('Menu');
nav.innerHTML = menu;

app.appendChild(h1);
app.appendChild(p);
app.appendChild(nav);
app.appendChild(img);

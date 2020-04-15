import sass from './SCSS/main.scss'
import logo from './img/react.svg'
import data from './data.json'
import {HelloWorld} from "./components/ReactApp.jsx";
import React from 'react'
import ReactDom from 'react-dom'


ReactDom.render(
	<HelloWorld
		name = "React"
		logo = {logo}
		menu = {data.links}
	/>,
	document.getElementById('app')
)

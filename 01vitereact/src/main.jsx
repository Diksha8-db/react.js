import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';

/*This will not work as there is a syntax error */
// const reactElement = {
//   type: 'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children: 'Click me to visit google',
// }

/* This will run */
const anotherElement = (
     <a href="https://google.com" target="_blank" >Visit Google</a>
)

// const reactElement = React.createElement(
//   'a',
//   {href:'https://google.com', target:'_blank'},
//   'click me to visit google'
// )

const username = "| Diksha Bharti"

const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'Click me to visit googly',
  username
)

createRoot(document.getElementById('root')).render(
  
   reactElement
  
)

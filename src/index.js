import _ from 'lodash'
// import './style.css'
// import data from './data.xml'
import printMe from './print'
function component() {
  var element = document.createElement('div')

  element.innerHTML = _.join(['Hello', 'webpack'], ',')

  //   const img = new Image()
  //   img.src =
  //     'https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-9.jpg'

  //   element.appendChild(img)
  //   console.log(data)

  const btn = document.createElement('button')

  btn.innerHTML = 'Click me and check the console!'

  btn.onclick = printMe

  element.appendChild(btn)

  return element
}

document.body.appendChild(component())

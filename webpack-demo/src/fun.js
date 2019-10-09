import testimg from './testimg.png'
function setClass() {
  var img = new Image()
  img.src = testimg
  img.classList.add('imgstyle')

  var root = document.getElementById('root')
  root.append(img)
}

export default setClass
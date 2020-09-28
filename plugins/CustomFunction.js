/**
 * Query offset - Get the current coordinates of the first element
 * @param {*NODE} el target node
 */
function offset (el) {
  const rect = el.getBoundingClientRect()
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
/**
 * Сhecks the checkbox, sets the height for the footer menu (open / close) bottom
 * @param {*NODE} target footer menu el
 */
function showFooterMenu (target) {
  const footerBottom = document.getElementById('footerBottom')
  if (footerBottom.checked) {
    const height = getHeight(document.querySelector('.footer-bottom'))
    target.style.height = height + 37 + 'px'
  } else {
    target.style.height = 37 + 'px'
  }
  target.classList.add('active')
}
function hideFooterMenu (target) {
  const footerBottom = document.getElementById('footerBottom')
  footerBottom.checked = false
  target.style.height = 0 + 'px'
  target.classList.remove('active')
}
/**
 * Gets the valid height, by adding the height of the children, to animate the target element
 * @param {*NODE} target
 */
function getHeight (target) {
  let height = 0
  for (const key in target.children) {
    const child = target.children[key]
    const childHeight = child.offsetHeight
    if (childHeight) {
      height += childHeight
    }
  }
  return height
}
function fixedElementOnTop (element, top = 0) {
  element.style.position = 'fixed'
  element.style.top = top + 'px'
}
function fixedElementOnBottom (element, bottom = 0) {
  element.style.position = 'fixed'
  element.style.bottom = bottom + 'px'
}
function removeFixedElementOnTop (element) {
  element.style.position = ''
  element.style.top = ''
}
function standByPosition (element, position) {
  element.style.position = ''
  element.style.bottom = ''
  element.style.top = ''
  element.style['margin-top'] = position + 'px'
}

const timeFormat = (function () {
  function num (val) {
    val = Math.floor(val)
    return val < 10 ? '0' + val : val
  }
  return function (sec, type) {
    const hours = Math.round(+sec / 3600 % 24)
    const minutes = Math.round(+sec / 60 % 60)
    const seconds = Math.round(+sec % 60)
    if (type === 'iso') {
      return 'T[' + Math.floor(hours) + '][' + Math.floor(minutes) + '][' + Math.floor(seconds) + ']'
    } else {
      return (hours > 0 ? num(hours) + ':' : '') + num(minutes) + ':' + num(seconds)
    }
  }
})()

function localeDate (date) {
  const dateObject = new Date(date * 1000)
  const h = dateObject.getHours()
  const m = dateObject.getMinutes()
  return dateObject.toLocaleDateString() + ', ' +
    (h < 10 ? '0' + h : h) + ':' +
    (m < 10 ? '0' + m : m)
}

const dateISO = date => new Date(date * 1000).toISOString()

function toggleActive (el) {
  el && el.classList.contains('active') ? el.classList.remove('active') : el.classList.add('active')
}

module.exports = {
  offset,
  showFooterMenu,
  hideFooterMenu,
  getHeight,
  fixedElementOnTop,
  fixedElementOnBottom,
  removeFixedElementOnTop,
  standByPosition,
  timeFormat,
  localeDate,
  dateISO,
  toggleActive
}

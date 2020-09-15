module.exports = {
  offset,
  showFooterMenu,
  hideFooterMenu,
  getHeight,
  fixedElementOnTop,
  fixedElementOnBottom,
  removeFixedElementOnTop,
  standByPosition
}

function offset (el) {
  const rect = el.getBoundingClientRect()
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
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

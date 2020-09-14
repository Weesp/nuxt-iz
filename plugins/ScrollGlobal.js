
//  ==============================================================================
//  ================        ==  ====  ==        ==  =======  ==        ===========
//  ================  ========  ====  ==  ========   ======  =====  ==============
//  ================  ========  ====  ==  ========    =====  =====  ==============
//  ================  ========  ====  ==  ========  ==  ===  =====  ==============
//  ================      ====   ==   ==      ====  ===  ==  =====  ==============
//  ================  =========  ==  ===  ========  ====  =  =====  ==============
//  ================  =========  ==  ===  ========  =====    =====  ==============
//  ================  ==========    ====  ========  ======   =====  ==============
//  ================        =====  =====        ==  =======  =====  ==============
//  ==============================================================================

const searchShowForm = document.getElementById('searchShowForm')
const searchClose = document.getElementById('searchClose')
if (searchShowForm) {
  searchShowForm.onclick = () => {
    const mainBox = searchShowForm.parentNode
    const classNames = mainBox.className.split(' ')
    const wrapper = document.querySelector('.fix-black-bg')
    if (~classNames.indexOf('active')) {
      mainBox.classList.remove('active')
      wrapper.classList.remove('active')
      document.removeEventListener('click', closeSearchHandler)
    } else {
      mainBox.classList.add('active')
      wrapper.classList.add('active')
      document.addEventListener('click', closeSearchHandler)
    }
  }
}
if (searchClose) {
  searchClose.onclick = () => {
    const element = document.body.querySelector('.search')
    const wrapper = document.querySelector('.fix-black-bg')
    element.classList.remove('active')
    wrapper.classList.remove('active')
    document.removeEventListener('click', closeSearchHandler)
  }
}

const scrollTopBtn = document.querySelector('.scroll-top-btn')
if (scrollTopBtn) {
  scrollTopBtn.onclick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

const footerBottom = document.getElementById('footerBottom')
let lastScrollTop = 0
let fixedWidgetBot = false
let fixedWidgetTop = false
// let checkTopLive = true
// let checkBotLive = true
// if(document.documentElement.offsetWidth >= 768){
window.onscroll = () => {
  const scrollHeight = document.documentElement.scrollHeight
  const clientHeight = document.documentElement.clientHeight
  const height = scrollHeight - clientHeight
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  const scrollBottom = scrollTop + clientHeight
  // header scroll
  const targetHeader = document.querySelector('.header-iz')
  const header = document.querySelector('.header-iz__back')
  let headerTop = 0
  if (header) {
    headerTop = header.getBoundingClientRect().top
  }
  //

  // footer scroll
  const targetFooter = document.querySelector('.footer-top')
  //

  // widget scroll
  const asideWidgetBox = document.querySelector('.aside-widget__box-fix')
  const asideWidget = document.querySelector('.aside-widget__box')
  let offsetBox = 0
  let offsetFix = 0
  if (asideWidget) {
    offsetBox = offset(asideWidget).top
  }
  if (asideWidgetBox) {
    offsetFix = offset(asideWidgetBox).top
  }
  //

  // live video player
  // const liveBox = (document.querySelector('.aside-video__box'))
  const liveWidget = document.querySelector('.aside__box')
  const liveBtn = document.querySelector('.live-player')
  // let offsetLiveBox = 0;
  // if(liveBox){
  // offsetLiveBox = offset(liveBox).top;
  // }
  //
  // marquee
  const marqueeBox = document.querySelector('.marquee__box')
  const marqueeWidget = document.querySelector('.marquee')
  let offsetMarqueeBox = 0
  if (marqueeBox) {
    offsetMarqueeBox = offset(marqueeBox).top
  }
  //

  // scroll-top-btn
  const scrollTopBtn = document.querySelector('.scroll-top-btn')
  //

  if (lastScrollTop > scrollTop) {
    // console.log('top');
    if (targetFooter) {
      showFooterMenu(targetFooter)
    }
    if (liveWidget) {
      // checkBotLive = true;
      // if(checkTopLive){
      if (scrollTop <= 350) {
        liveBtn.classList.remove('active')
        // livePlayerSwitcher.checked = false;
        // checkTopLive = false
        scrollTopBtn.classList.remove('active')
      }
      // }
    }
    if (marqueeWidget) {
      if (offsetMarqueeBox - 50 >= scrollTop) {
        removeFixedElementOnTop(marqueeWidget)
        // marqueeWidget.classList.remove('marquee-fix');
      }
    }
    if (targetHeader && headerTop >= 0) {
      removeFixedElementOnTop(targetHeader)
      header.style.height = ''
    }
    if (asideWidgetBox) {
      if (asideWidgetBox.style.position === 'fixed') {
        if (fixedWidgetTop) {
          const position = offsetFix - offsetBox
          standByPosition(asideWidgetBox, position)
          fixedWidgetTop = false
        }
        if (offsetBox - 75 >= scrollTop) {
          removeFixedElementOnTop(asideWidgetBox)
        }
      } else if (offsetFix > offsetBox) {
        if (offsetFix - 75 >= scrollTop) {
          fixedElementOnTop(asideWidgetBox, 75)
          asideWidgetBox.style['margin-top'] = ''
          fixedWidgetBot = true
        }
      }
    }
  } else {
    // console.log('down');
    if (scrollTop === height) {
      if (targetFooter) {
        showFooterMenu(targetFooter)
      }
    } else if (targetFooter) {
      hideFooterMenu(targetFooter)
    }
    if (liveWidget) {
      // checkTopLive = true;
      // if(checkBotLive){
      if (scrollTop >= 350) {
        liveBtn.classList.add('active')
        // checkBotLive = false
        scrollTopBtn.classList.add('active')
      }
      // }
    }
    if (marqueeWidget) {
      if (offsetMarqueeBox - 50 <= scrollTop) {
        fixedElementOnTop(marqueeWidget, 50)
        // marqueeWidget.classList.add('marquee-fix');
      }
    }
    if (asideWidgetBox) {
      if (asideWidgetBox.offsetHeight + 75 > clientHeight) {
        if (asideWidgetBox.style.position === 'fixed') {
          if (fixedWidgetBot) {
            const position = offsetFix - offsetBox
            standByPosition(asideWidgetBox, position)
            fixedWidgetBot = false
          }
        } else {
          const asideWidgetBoxBottom = asideWidgetBox.offsetHeight + offsetFix
          if (asideWidgetBoxBottom <= scrollBottom - 15) {
            fixedElementOnBottom(asideWidgetBox, 15)
            asideWidgetBox.style['margin-top'] = ''
            fixedWidgetTop = true
          }
        }
      } else if (offsetFix <= scrollTop + 50) {
        fixedElementOnTop(asideWidgetBox, 75)
      }
    }
    if (targetHeader && headerTop <= 0) {
      fixedElementOnTop(targetHeader)
      header.style.height = '50px'
    }
  }
  lastScrollTop = scrollTop
}
// }
if (document.getElementById('footerBottom')) {
  footerBottom.onchange = function () {
    const targetFooter = document.querySelector('.footer-top')
    if (footerBottom.checked) {
      const height = getHeight(document.querySelector('.footer-bottom'))
      targetFooter.style.height = height + 37 + 'px'
    } else {
      targetFooter.style.height = 37 + 'px'
    }
  }
}
if (document.getElementById('footerBottom')) {
  footerBottom.onchange = () => {
    const targetFooter = document.querySelector('.footer-top')
    if (footerBottom.checked) {
      const height = getHeight(document.querySelector('.footer-bottom'))
      targetFooter.style.height = height + 37 + 'px'
    } else {
      targetFooter.style.height = 37 + 'px'
    }
  }
}

//  ======================================================================================
//  ==================     ===  ====  ===      ===        ====    ====  =====  ===========
//  =================  ===  ==  ====  ==  ====  =====  ======  ==  ===   ===   ===========
//  ================  ========  ====  ==  ====  =====  =====  ====  ==  =   =  ===========
//  ================  ========  ====  ===  ==========  =====  ====  ==  == ==  ===========
//  ================  ========  ====  =====  ========  =====  ====  ==  =====  ===========
//  ================  ========  ====  =======  ======  =====  ====  ==  =====  ===========
//  ================  ========  ====  ==  ====  =====  =====  ====  ==  =====  ===========
//  =================  ===  ==   ==   ==  ====  =====  ======  ==  ===  =====  ===========
//  ==================     ====      ====      ======  =======    ====  =====  ===========
//  ======================================================================================

function closeSearchHandler () {
  if (!event.target.closest('.search')) {
    const element = document.body.querySelector('.search')
    const wrapper = document.querySelector('.fix-black-bg')
    element.classList.remove('active')
    wrapper.classList.remove('active')
    document.removeEventListener('click', closeSearchHandler)
  }
}
function offset (el) {
  const rect = el.getBoundingClientRect()
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
function showFooterMenu (target) {
  if (footerBottom.checked) {
    const height = getHeight(document.querySelector('.footer-bottom'))
    target.style.height = height + 37 + 'px'
  } else {
    target.style.height = 37 + 'px'
  }
  target.classList.add('active')
}
function hideFooterMenu (target) {
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

document.addEventListener('DOMContentLoaded', () => {
  const navList = document.getElementById('navbar__list')
  const sections = document.querySelectorAll('section')
  const sectionNames = []

  /**
   * Creates navbar links acording to sections amount
   */
  const initializeNavItems = () => {
    sections.forEach((section) => {
      const sectionTitle = section.getAttribute('data-section')
      const navItem = document.createElement('li')

      navItem.textContent = sectionTitle
      navItem.className = 'nav__link'
      navItem.setAttribute('data-nav', sectionTitle)

      navItem.addEventListener('click', () => {
        section.scrollIntoView({behavior: 'smooth'})
      })

      navList.appendChild(navItem)
    })
  }

  const sectionIsViewed = (section) => {
    const rect = section.getBoundingClientRect()
    // console.log(section.getAttribute('data-section'), rect.top, rect.bottom, window.innerHeight)
    return rect.top + 100 >= 0 && rect.bottom <= (window.innerHeight || document. documentElement.clientHeight)

  }

  window.addEventListener('scroll', () => {


    sections.forEach((section) => {
      const sectionTitle = section.getAttribute('data-section')
      const sectionNavLink = navList.querySelector(`[data-nav='${sectionTitle}']`)


      if (sectionIsViewed(section)) {
        section.classList.add('active-section')
        sectionNavLink.classList.add('active-nav')
      } else {
        section.classList.remove('active-section')
        sectionNavLink.classList.remove('active-nav')
      }
    })
  })
  
  initializeNavItems()
})



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// Add class 'active' to section when near top of viewport




/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

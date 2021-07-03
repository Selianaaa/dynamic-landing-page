document.addEventListener('DOMContentLoaded', () => {
  const navList = document.getElementById('navbar__list')
  const sections = document.querySelectorAll('section')


  /**
   * Creates navbar links acording to sections amount
   */
  const initializeNavItems = () => {
    sections.forEach((section) => {
      const sectionTitle = section.getAttribute('data-nav')
      const navItem = document.createElement('li')
      navItem.textContent = sectionTitle
      navItem.className = 'nav__link'
      navItem.addEventListener('click', () => {
        section.scrollIntoView({behavior: 'smooth'})
      })
      navList.appendChild(navItem)
    })
  
  }


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

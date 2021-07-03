const sectionsContent = [
  {
    id: 'Home',
    titleTag: 'h1',
    title: 'Unmanned aerial vehicle',
    text: 'commonly known as a drone, is an aircraft without any human pilot, crew or passengers on board.',
    image: 'images/main.jpg'
  },

  {
    id: 'Section2',
    titleTag: 'h2',
    title: 'UAV computing capability',
    text: 'followed the advances of computing technology, beginning with analog controls and evolving into microcontrollers, then system-on-a-chip (SOC) and single-board computers (SBC).',
    image: 'images/titan.jpeg'
  },

  {
    id: 'Section3',
    titleTag: 'h2',
    title: 'The level of autonomy in UAVs varies widely.',
    text: 'UAV manufacturers often build in specific autonomous operations, such as: attitude stabilization on the pitch and roll axes, automatic roll and yaw control while moving horizontally.',
    image: 'images/solar_stratos.jpeg'
  },

  {
    id: 'Section4',
    titleTag: 'h2',
    title: 'Applications',
    text: 'There are numerous civilian, commercial, military, and aerospace applications for UAVs. These include: Recreation, Disaster relief, archeology, search and rescue and traffic monitoring.',
    image: 'images/aquila.jpg'
  },
]


  /**
   * Creates navbar links acording to sections amount
   * @param {HTMLElement[]} sections - section elements
   * @param {HTMLElement} navList - nav list element
   */
   const initializeData = (sections, navList) => {
    sections.forEach((section) => {
      const sectionTitle = section.getAttribute('data-section')

      const sectionContent = sectionsContent.find(
        (content) => content.id === sectionTitle
      )
 
      if (sectionContent) {
        initializeNavItem(sectionTitle, navList)

        initializeSection(section, sectionContent)
      }

    })
  }

   /**
   * Create navbar item
   * @param {string} sectionTitle - section title
   * @param {HTMLElement} navList - nav list element
   */
  const initializeNavItem = (sectionTitle, navList) => {
    const navItem = document.createElement('li')
    navItem.textContent = sectionTitle
    navItem.className = 'nav__link'
    navItem.setAttribute('data-nav', sectionTitle)

    navItem.addEventListener('click', () => {
      section.scrollIntoView({behavior: 'smooth'})
    })

    navList.appendChild(navItem)
  }

  /**
   * Create section content
   * @param {HTMLElement} section - section element
   * @param {object} sectionContent - section title
   */
  const initializeSection = (section, sectionContent) => {
    const sectionContainer = section.querySelector('.section__container')
    const sectionTitle = document.createElement(`${sectionContent.titleTag}`)
    const sectionText = document.createElement('p')

    sectionTitle.textContent = sectionContent.title
    sectionText.textContent = sectionContent.text

    section.style.backgroundImage = `url('${sectionContent.image}')`
    sectionContainer.appendChild(sectionTitle)
    sectionContainer.appendChild(sectionText)
  }


  /**
   * Check if section is visible
   */
  const sectionIsViewed = (section) => {
    const rect = section.getBoundingClientRect()
    // console.log(section.getAttribute('data-section'), rect.top, rect.bottom, window.innerHeight)
    return rect.top + 100 >= 0 && rect.bottom <= (window.innerHeight || document. documentElement.clientHeight)
  }


document.addEventListener('DOMContentLoaded', () => {
  const navList = document.getElementById('navbar__list')
  const sections = document.querySelectorAll('section')

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
  
  initializeData(sections, navList)
})


// Add class 'active' to section when near top of viewport

// Build menu 

// Scroll to section on link click

// Set sections as active

// Preloader ? 

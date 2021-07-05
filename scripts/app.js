const sectionsContent = [
  {
    id: 'section1',
    titleTag: 'h1',
    title: 'Unmanned aerial vehicle',
    text: 'commonly known as a drone, is an aircraft without any human pilot, crew or passengers on board.',
    image: 'images/main.jpg'
  },

  {
    id: 'section2',
    titleTag: 'h2',
    title: 'UAV computing capability',
    text: 'followed the advances of computing technology, beginning with analog controls and evolving into microcontrollers, then system-on-a-chip (SOC) and single-board computers (SBC).',
    image: 'images/titan.jpeg'
  },

  {
    id: 'section3',
    titleTag: 'h2',
    title: 'The level of autonomy in UAVs varies widely.',
    text: 'UAV manufacturers often build in specific autonomous operations, such as: attitude stabilization on the pitch and roll axes, automatic roll and yaw control while moving horizontally.',
    image: 'images/tyber.jpeg'
  },

  {
    id: 'section4',
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
    const sectionId = section.getAttribute('id')

    const sectionContent = sectionsContent.find(
      (content) => content.id === sectionId
    )

    if (sectionContent) {
      initializeNavItem(section, navList)
      initializeSection(section, sectionContent)
    }

  })
}

/**
 * Create navbar item
 * @param {HTMLElement} section - section element
 * @param {HTMLElement} navList - nav list element
 */
const initializeNavItem = (section, navList) => {
  const sectionTitle = section.getAttribute('data-section')
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

  section.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${sectionContent.image}')`
  sectionContainer.appendChild(sectionTitle)
  sectionContainer.appendChild(sectionText)
}

/**
 * Check if section is visible
 */
const sectionIsViewed = (section) => {
  const rect = section.getBoundingClientRect();
  return rect.y <= 60 && rect.bottom >= 150
}

/**
 * Scroll content to the begining
 */
 const scrollToTop = () => {
  const topSection = document.getElementById(`${sectionsContent[0].id}`)
  topSection.scrollIntoView({behavior: 'smooth'})
}


/**
 * Handle mobile menu click
 */
 const handleMenuClick = () => {
  const navbarButton = document.querySelector('.mobile__menu__button')
  const navbarList = document.getElementById('navbar__list')

  if (navbarList.style.transform === 'translateX(-180px)') {
    navbarList.style.transform = 'translateX(180px)'
  } else {
    navbarList.style.transform = 'translateX(-180px)'
  }

  navbarButton.classList.toggle('active__menu')
}


document.addEventListener('DOMContentLoaded', () => {
  const navList = document.getElementById('navbar__list')
  const sections = document.querySelectorAll('section')
  const scrollTopElement = document.getElementById('scroll__top')

  window.addEventListener('scroll', () => {
    
    for (let section of sections) { 
      const sectionTitle = section.getAttribute('data-section')
      const sectionNavLink = navList.querySelector(`[data-nav='${sectionTitle}']`)

      if (sectionIsViewed(section)) {
        section.classList.add('active-section')
        sectionNavLink.classList.add('active-nav')
        scrollTopElement.style.display = section.getAttribute('id') === sectionsContent[0].id ? 'none' : 'flex'
      } else {
        section.classList.remove('active-section')
        sectionNavLink.classList.remove('active-nav')
      }
    }
  })
  
  initializeData(sections, navList)
})




// Preloader

const navItems = document.querySelectorAll('.menu__item');
const movieSection = document.getElementById('movies-section');
const aboutSection = document.getElementById('about-section');
const contactSection = document.getElementById('contact-section');

export const showComponent = (componentId) => {
  switch (componentId) {
    case 'movies-section':
      movieSection.classList.add('visible');
      aboutSection.classList.remove('visible');
      contactSection.classList.remove('visible');
      break;
    case 'about-section':
      movieSection.classList.remove('visible');
      aboutSection.classList.add('visible');
      contactSection.classList.remove('visible');
      break;
    case 'contact-section':
      movieSection.classList.remove('visible');
      aboutSection.classList.remove('visible');
      contactSection.classList.add('visible');
      break;
    default:
      break;
  }
};

navItems.forEach((navItem) => {
  navItem.addEventListener('click', (event) => {
    const componentId = event.target.getAttribute('showComponent');
    showComponent(componentId);
  });
});

export default showComponent;
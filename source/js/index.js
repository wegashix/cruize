// burgerMEnu
function burgerMenu() {

  const menuButton = document.querySelector('.nav button');
  const menuList = document.querySelector('.nav__list');
  const body = document.querySelector('body');
  const backgroundHeader = document.querySelector('.background-header');
  const isActive = 'active';
  const overflow = 'overflow-hidden';


  const openMenu = () => {
    menuButton.classList.toggle(isActive);
    if (menuList) {
      menuList.classList.toggle(isActive);
    }
    body.classList.toggle(overflow);
    if (backgroundHeader) {
      backgroundHeader.classList.toggle(isActive);
    }
  };

  const isOpen = () => {
    if (window.innerWidth > 767) {
      menuButton.classList.remove(isActive);
      menuList.classList.remove(isActive);
      body.classList.remove(overflow);
      backgroundHeader.classList.remove(isActive);
    }
  };

  if (menuButton) {
    menuButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      openMenu();
    });
  }

  window.addEventListener('resize', () => {
    isOpen();
  });
}

export {burgerMenu};

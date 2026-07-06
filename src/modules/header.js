class MobileMenu {
  constructor() {
    this.menu = document.querySelector(".header__controls")
    this.toggle = document.querySelector(".header__menu-toggle")
    this.openButton = document.querySelector(".header__toggle-btn--open")
    this.closeButton = document.querySelector(".header__toggle-btn--close")
    this.isOpen;
    this.events()
  }

  events() {
    this.toggle.addEventListener("click", () => this.toggleMenu())

  }

  toggleMenu() {
    this.isOpen = this.closeButton.classList.contains('hidden')

    if(this.isOpen){
      this.closeButton.classList.remove('hidden')
      this.openButton.classList.add('hidden')
      this.menu.classList.add("header__controls--active")
    }
    else{
      this.openButton.classList.remove('hidden')
      this.closeButton.classList.add('hidden')
      this.menu.classList.remove("header__controls--active")
    }
  }

}

export default MobileMenu

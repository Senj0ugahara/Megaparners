const btnLanguage = document.querySelector('.header__btn_type_language');

btnLanguage.addEventListener('click', () => {
  document.querySelectorAll('.header__btn_text').forEach(btn => {
    btn.classList.toggle('visible');
  })
})

const burger = document.querySelector('.header-burger');
const navigation = document.querySelector('.header-nav');

burger.addEventListener('click', () => {
  document.querySelector('.header-burger__line').classList.toggle('is-active');
  navigation.classList.toggle('is-active');
})
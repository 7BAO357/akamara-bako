document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}
toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('open', !expanded);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.querySelectorAll('[data-year]').forEach(element => {
  element.textContent = new Date().getFullYear();
});

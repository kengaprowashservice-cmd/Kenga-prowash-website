const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('menu-open');
  toggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.menu a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('menu-open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('quote-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent('Kenga ProWash website enquiry');
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\nContact: ${data.get('reply')}\nService: ${data.get('service')}\nDetails: ${data.get('message')}`
  );
  // Replace the address below with your real business email before publishing.
  window.location.href = `mailto:kengaprowashservice@gmail.com?subject=${subject}&body=${body}`;
  document.getElementById('form-status').textContent =
    'Your email app should open with the enquiry prepared. The email address must be replaced with your real business email before launch.';
});

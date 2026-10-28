window.dataLayer = window.dataLayer || [];
window.gtag = function gtag() {
  window.dataLayer.push(arguments);
};
window.gtag('js', new Date());
window.gtag('config', 'G-W7ZT8PP2XL');

const form = document.querySelector('#leadForm');
const message = document.querySelector('#formMessage');
const dialog = document.querySelector('#privacyDialog');
const leadInputs = form.querySelectorAll('input');
let formStarted = false;

const track = (eventName, parameters = {}) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, parameters);
  }
};

document.querySelector('#openPrivacy').addEventListener('click', () => dialog.showModal());
document.querySelector('#closePrivacy').addEventListener('click', () => dialog.close());

document.querySelector('.mini-cta').addEventListener('click', () => {
  track('select_content', {
    content_type: 'cta',
    content_id: 'header_waitlist'
  });
});

leadInputs.forEach((input) => {
  input.addEventListener('focus', () => {
    if (formStarted) return;
    formStarted = true;
    track('form_start', { form_id: 'seenfit_waitlist' });
  }, { once: true });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent = '';

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  track('generate_lead', {
    form_id: 'seenfit_waitlist',
    form_name: 'SeenFit 앱 출시 알림'
  });
  message.textContent = 'UI 확인용 폼입니다. 실제 저장 기능은 다음 단계에서 연결할 수 있어요.';
});


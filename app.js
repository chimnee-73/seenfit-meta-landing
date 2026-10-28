const form = document.querySelector('#leadForm');
const message = document.querySelector('#formMessage');
const dialog = document.querySelector('#privacyDialog');

document.querySelector('#openPrivacy').addEventListener('click', () => dialog.showModal());
document.querySelector('#closePrivacy').addEventListener('click', () => dialog.close());

form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent = '';

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  message.textContent = 'UI 확인용 폼입니다. 실제 저장 기능은 다음 단계에서 연결할 수 있어요.';
});


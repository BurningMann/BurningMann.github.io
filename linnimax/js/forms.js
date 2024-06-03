/* FORM ERRORS */
const validateForms = document.querySelectorAll('.js-validate-form');
validateForms.forEach((el) => {
  el.addEventListener('submit', async (event) => {
    event.preventDefault();
    let errors = 0;
    const fields = el.querySelectorAll('.form-input');
    fields.forEach((field) => {
      const input = field.querySelector('.input');
      if (input) {
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (field.classList.contains('is-checkbox') && field.classList.contains('is-required') && !input.checked) {
          errors++;
          field.classList.add('is-error');
        } else if (field.classList.contains('is-email') && input.value && !input.value.match(mailformat)) {
          errors++;
          field.classList.add('is-error');
        } else if (
          field.classList.contains('is-required') &&
          field.classList.contains('is-phone') &&
          !field.classList.contains('is-valid')
        ) {
          errors++;
          field.classList.add('is-error');
        } else if (field.classList.contains('is-required') && !input.value) {
          errors++;
          field.classList.add('is-error');
        }
      }
    });

    if (errors) {
      return false;
    }

    let response = await fetch('/handlers/orderservice.php', {
      method: 'POST',
      body: new FormData(el),
    });

    window.activateSuccessPopup('Форма отправлена', 2000);
    clearForm(el);
  });
});

function clearForm(el) {
  const fields = el.querySelectorAll('.input');
  fields.forEach((field) => {
    field.value = '';
  });

  const fileInputs = el.querySelectorAll('.file-input');
  fileInputs.forEach((field) => {
    if (field && field.classList.contains('is-active')) {
      field.click();
    }
  });
}

const fields = document.querySelectorAll('.js-validate-form .form-input');
fields.forEach((field) => {
  const input = field.querySelector('.input');
  if (input) {
    input.addEventListener('input', function () {
      field.classList.remove('is-error');
    });
  }
});

const formButtons = document.querySelectorAll('.form-button');
formButtons.forEach((el) => {
  el.addEventListener('click', () => {
    const subjectInput = document.querySelector('.modal-form input[name="subject"]');
    const subject = el.dataset.subjectForm;
    subjectInput.value = subject;
  });
});

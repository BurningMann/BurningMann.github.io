/* FORM VALIDATE */
const validateForms = document.querySelectorAll('.js-validate-form');
validateForms.forEach((el) => {
  const submitButton = el.querySelector('button[type=submit]');
  const submitButtonText = submitButton.querySelector('.button__text');
  const successButtonText = submitButton.dataset.successText;
  const baseButtonText = submitButton.dataset.baseText;

  submitButton.addEventListener('click', async () => {
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
  });
  el.addEventListener('submit', async (event) => {
    event.preventDefault();

    const isValid = el.checkValidity();

    if (!isValid) {
      form.reportValidity();

      retrun;
    } else {
      let response = await fetch('/handlers/form-callback.php', {
        method: 'POST',
        body: new FormData(el),
      });
    }

    clearForm(el);

    el.classList.add('is-success');
    submitButtonText.innerHTML = successButtonText;

    setTimeout(() => {
      el.classList.remove('is-success');
      submitButtonText.innerHTML = baseButtonText;
    }, 5000);
  });
});

function clearForm(el) {
  const fields = el.querySelectorAll('.input');
  fields.forEach((field) => {
    field.value = '';
    field.checked = false;
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

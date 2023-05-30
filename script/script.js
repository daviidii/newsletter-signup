const modal = document.querySelector('.success-modal');
const modal_btn = document.querySelector('.success-modal__btn');
const overlay = document.querySelector('.overlay');
const email_input = document.getElementById('email');
const err_handle = document.querySelector('.form__error');
const form = document.getElementById('form');

const open_modal = function () {
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
}

const close_modal = function () {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
}

email_input.addEventListener('input', validate_email);
form.addEventListener('submit', submit_handling);
modal_btn.addEventListener('click', close_modal);
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      close_modal();
    }
  });

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validate_email() {
    const email = email_input.value;

    if(isValidEmail(email)) {
        email_input.classList.add('valid-email');
        email_input.classList.remove('invalid-email');
        err_handle.textContent = '';
    }else {
        email_input.classList.add('invalid-email');
        err_handle.textContent = 'Valid email required';
    }
}

function submit_handling(e) {
    e.preventDefault();
    const email = email_input.value;

    if (email === '') {
        email_input.classList.add('invalid-email');
        err_handle.textContent = 'Valid email required';
    }
    if (email_input.classList.contains('valid-email')){
        open_modal();
    }
}


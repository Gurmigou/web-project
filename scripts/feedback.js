const feedbackBtn = document.getElementById('feedback__btn');
const feedbackWrapper = document.getElementById("feedback__wrapper");
const feedbackCloseBtn = document.getElementById("feedback__close__btn");
const feebackFormSubmitBtn = document.getElementById("feedback__form__submit__btn");

const feedbackSuccess = document.getElementById('feedback__success');

feedbackBtn.addEventListener('click', () => {
    feedbackSuccess.style.display = 'none';
    feedbackWrapper.style.display = 'block';
})

feedback__close__btn.addEventListener('click', () => {
    feedbackWrapper.style.display = 'none';
    feedbackSuccess.style.display = 'none';
})

function validateEmail(email) {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexEmail.test(String(email).toLowerCase());
}

function validateUkainePhoneNumber(phoneNumber) {
    const regexUkainePhoneNumber = /^\+[0-9]{3}\s\((\d+)\)-\d{3}-\d{2}-\d{2}/;
    return regexUkainePhoneNumber.test(String(phoneNumber).toLowerCase());
}

function clearFieldsAndShowFeedbackSuccess() {
    // feedbackWrapper.style.display = 'none';
    feedbackSuccess.style.display = 'block';

    document.getElementById('feedback__form__name__input').value = '';
    document.getElementById('feedback__form__email__input').value = '';
    document.getElementById('feedback__form__phone__input').value = '';
    document.getElementById('feedback__form__message__input').value = '';
}

feebackFormSubmitBtn.addEventListener('click', () => {
    const name = document.getElementById('feedback__form__name__input').value;
    const phoneNumber = document.getElementById('feedback__form__phone__input').value;
    const email = document.getElementById('feedback__form__email__input').value;
    const message = document.getElementById('feedback__form__message__input').value;

    if (name === '') {
        alert('Введіть ім\'я');
        return;
    }

    if (phoneNumber === '') {
        alert('Введіть номер телефона');
        return;
    }

    if (!validateUkainePhoneNumber(phoneNumber)) {
        alert('Введіть коректний номер телефона');
        return;
    }

    if (email === '') {
        alert('Введіть Email');
        return;
    }

    if (!validateEmail(email)) {
        alert('Введіть коректний Email');
        return;
    }

    clearFieldsAndShowFeedbackSuccess();
})

const feedbackBtn = document.getElementById('feedback__btn');
const feedbackWrapper = document.getElementById("feedback__wrapper");
const feedbackCloseBtn = document.getElementById("feedback__close__btn");
const feebackFormSubmitBtn = document.getElementById("feedback__form__submit__btn");

feedbackBtn.addEventListener('click', () => {
    feedbackWrapper.style.display = 'block';
})

feedback__close__btn.addEventListener('click', () => {
    feedbackWrapper.style.display = 'none';
})

function validateEmail(email) {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexEmail.test(String(email).toLowerCase());
}

function validateUkainePhoneNumber(phoneNumber) {
    const regexUkainePhoneNumber = /^\+[0-9]{3}\s\((\d+)\)-\d{3}-\d{2}-\d{2}/;
    return regexUkainePhoneNumber.test(String(phoneNumber).toLowerCase());
}

function clearFeedbackAndClose() {
    feedbackWrapper.style.display = 'none';

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

    console.log(name);
    console.log(email);
    console.log(phoneNumber);
    console.log(message);

    if (name === '') {
        alert('Введіть ім\'я');
        return;
    }

    console.log(phoneNumber === '');

    if (phoneNumber === '') {
        alert('Введіть номер телефона');
        return;
    }

    console.log(validateUkainePhoneNumber(phoneNumber));

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

    if (message === '') {
        alert('Залиште коментар');
        return;
    }

    confirm('Ваш відгук було надіслано');
    clearFeedbackAndClose();
})

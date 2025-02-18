const showInputError = (formEl, inputEl, errorMsg) =>{
    const errorMsgID = inputEl.id + "-error";
    const errorMsgEl = formEl.querySelector(`.${inputEl.id}-error`);
    errorMsgEl.textContent = errorMsg;
}

const checkInputValidity = (formEl, inputEl)=> {
if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, inputEl.validationMessage);
} else {
    hideInputError(formEl, inputEl);
}

}

const setEventListener = (formEl) => {
    const inputList = 
    Array.from(formEl.querySelectorAll('.modal__input'));

    const buttonElement = formEl.querySelector('.modal__submit-btn');

    console.log(buttonElement);
    console.log(inputList);

    // toggleButtonState(inputList, buttonElement);
    
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        checkInputValidity(formEl, inputElement);
       // toggleButtonState(inputList, buttonElement);
      });
    });
}

/* define togglebuttonState func */

const enableValidation = () => {
const formList = document.querySelectorAll('.modal__form');
formList.forEach((formEl) => {
    setEventListener(formEl);
})
}

enableValidation();
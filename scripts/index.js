const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
    alt: "image of Val Thorens",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
    alt: "picture taken from a restaurant terrace",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
    alt: "front enterance of a cafe",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
    alt: "A long and narrow bridge over treetops",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
    alt: "A house on a mountain",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
    alt: "A long hallway with windows",
  },
  {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
    alt: "Bridge over body of water",
  },
];

const editModal = document.querySelector("#edit-modal");
const editButton = document.querySelector(".profile__edit-btn");
const profileExitBtn = document.querySelector(".modal__close-btn");
const profileFormElement = document.querySelector(".modal__form");
const modalNameInput = document.querySelector("#profile__name_input");
const modalDescInput = document.querySelector("#profile__description_input");
const profileName = document.querySelector(".profile__name");
const profileDesc = document.querySelector(".profile__description");

const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

const newPostModal = document.querySelector("#add-card-modal");
const newPostBtn = document.querySelector(".profile__add-btn");
const newPostExitButton = newPostModal.querySelector(".modal__close-btn");
const cardLinkInput = newPostModal.querySelector("#add-card__link_input");
const cardLink = newPostModal.querySelector(".add-card__link_input");
const cardCaptionInput = newPostModal.querySelector("#add-card__name_input");
const cardCaption = newPostModal.querySelector(".add-card__name_input");
const cardForm = newPostModal.querySelector("#add-card__form");
const cardSubmitBtn = newPostModal.querySelector(".modal__submit-btn");

const previewModal = document.querySelector("#preview-modal");
const previewModalCloseBtn = previewModal.querySelector(
  ".modal__close-btn_type_preview"
);
const previewModalImgEl = previewModal.querySelector(".modal__img");
const previewModalCaptionEl = previewModal.querySelector(".modal__caption");

const modals = document.querySelectorAll(".modal");

function getCardElement(card) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameEl = cardElement.querySelector(".card__title");
  const cardLinkEl = cardElement.querySelector(".card__image");
  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");

  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("card__like-button_liked");
  });

  cardDeleteBtn.addEventListener("click", () => {
    cardElement.remove();
  });

  cardLinkEl.addEventListener("click", () => {
    openModal(previewModal);
    previewModalImgEl.src = card.link;
    previewModalImgEl.alt = card.alt;
    previewModalCaptionEl.textContent = card.name;
  });

  cardNameEl.textContent = card.name;
  cardLinkEl.src = card.link;
  cardLinkEl.alt = card.alt;

  return cardElement;
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = modalNameInput.value;
  profileDesc.textContent = modalDescInput.value;
  closeModal(editModal);
}

function handleCardSubmit(evt) {
  evt.preventDefault();
  const inputValues = {
    link: cardLinkInput.value,
    name: cardCaptionInput.value,
  };
  console.log(inputValues);
  const cardElement = getCardElement(inputValues);
  cardsList.prepend(cardElement);
  closeModal(newPostModal);
  evt.target.reset();
  disableButton(cardSubmitBtn, settings);
}

modals.forEach((modal) => {
  modal.addEventListener("click", (evt) => {
    if (evt.target === evt.currentTarget) {
      closeModal(modal);
    }
  });
});

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    modals.forEach((modal) => {
      if (modal.classList.contains("modal_is-opened")) {
        closeModal(modal);
      }
    });
  }
});

editButton.addEventListener("click", () => {
  modalNameInput.value = profileName.textContent;
  modalDescInput.value = profileDesc.textContent;
  openModal(editModal);
});

profileExitBtn.addEventListener("click", () => {
  closeModal(editModal);
});

newPostBtn.addEventListener("click", () => {
  openModal(newPostModal);
});

newPostExitButton.addEventListener("click", () => {
  closeModal(newPostModal);
});

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

cardForm.addEventListener("submit", handleCardSubmit);

initialCards.forEach((card) => {
  const cardElement = getCardElement(card);
  cardsList.prepend(cardElement);
});

previewModalCloseBtn.addEventListener("click", () => {
  closeModal(previewModal);
});

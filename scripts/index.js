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
];

const editModal = document.querySelector("#edit-modal");
const editButton = document.querySelector(".profile__edit-btn");
const exitModal = editModal.querySelector(".modal__close-btn");
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
const cardLinkInput = document.querySelector("#add-card__link_input");
const cardCaptionInput = document.querySelector("#add-card__name_input");
const cardSubmitBtn = document.querySelector(".add-card__submit_btn");

function getCardElement(card) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameEl = cardElement.querySelector(".card__title");
  const cardLinkEl = cardElement.querySelector(".card__image");

  cardNameEl.textContent = card.name;
  cardLinkEl.src = card.link;
  cardLinkEl.alt = card.alt;

  return cardElement;
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
  openModal(editModal);
  openModal(newPostModal);
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = modalNameInput.value;
  profileDesc.textContent = modalDescInput.value;
  closeModal(editModal);
  closeModal(newPostModal);
}

editButton.addEventListener("click", () => {
  modalNameInput.value = profileName.textContent;
  modalDescInput.value = profileDesc.textContent;
  openModal(editModal);
  openModal(newPostModal);
});

exitModal.addEventListener("click", () => {
  closeModal(editModal);
  closeModal(newPostModal);
});

newPostBtn.addEventListener("click", () => {
  modalNameInput.value = profileName.textContent;
  modalDescInput.value = profileDesc.textContent;
  openModal(newPostModal);
});

exitModal.addEventListener("click", () => {
  closeModal(newPostModal);
});

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

initialCards.forEach((card) => {
  const cardElement = getCardElement(card);
  cardsList.prepend(cardElement);
});

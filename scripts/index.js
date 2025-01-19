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

function getCardElement(x) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameEl = cardElement.querySelector(".card__title");
  const cardLinkEl = cardElement.querySelector(".card__image");

  cardNameEl.textContent = x.name;
  cardLinkEl.src = x.link;
  cardLinkEl.alt = x.alt;

  return cardElement;
}

function openModal() {
  editModal.classList.add("modal_opened");
  modalNameInput.value = profileName.textContent;
  modalDescInput.value = profileDesc.textContent;
}

function closeModal() {
  editModal.classList.remove("modal_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = modalNameInput.value;
  profileDesc.textContent = modalDescInput.value;
  closeModal();
}

editButton.addEventListener("click", openModal);
exitModal.addEventListener("click", closeModal);
profileFormElement.addEventListener("submit", handleProfileFormSubmit);

initialCards.forEach((card) => {
  const cardElement = getCardElement(card);
  cardsList.prepend(cardElement);
});

const initialCards = [
  {
    name: "Beach Trip",
    link: "https://unsplash.com/photos/seashore-under-clear-blue-sky-during-daytime-g0Qdolm3K14",
  },
  {
    name: "Moving Day",
    link: "https://unsplash.com/photos/a-pile-of-cardboard-boxes-sitting-on-top-of-a-hard-wood-floor-iIzkK-rOEzE",
  },
  {
    name: "Tokyo",
    link: "https://unsplash.com/photos/people-gathered-outside-buildings-and-vehicles-alY6_OpdwRQ",
  },
  {
    name: "New York",
    link: "https://unsplash.com/photos/a-view-of-a-city-at-night-from-the-top-of-a-building-MdrJol8olLg",
  },
  {
    name: "Camping in the Mountains",
    link: "https://unsplash.com/photos/a-dirt-path-in-the-middle-of-a-forest-76OiaaEZJ5k",
  },
  {
    name: "Grand Canyon",
    link: "https://unsplash.com/photos/a-view-of-the-grand-canyon-of-the-grand-canyon-D391N3cKjiY",
  },
];

const editModal = document.querySelector("#edit-modal");
const editButton = document.querySelector(".profile__edit-btn");
const exitModal = editModal.querySelector(".modal__close-btn");
const modalNameInput = document.querySelector("#profile__name_input");
const modalDescInput = document.querySelector("#profile__description_input");
const profileName = document.querySelector(".profile__name");
const profileDesc = document.querySelector(".profile__description");

function openModal() {
  editModal.classList.add("modal_opened");
  modalNameInput.value = profileName.textContent;
  modalDescInput.value = profileDesc.textContent;
}

editButton.addEventListener("click", openModal);

function closeModal() {
  editModal.classList.remove("modal_opened");
}

exitModal.addEventListener("click", closeModal);

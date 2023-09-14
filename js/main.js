"use strict";

//////----CONSTANTES-----///////////

//----Datos de gato que vuelca en la UL//

const listElement = document.querySelector(".js-list");

const kittenData_1 = {
  image: "https://dev.adalab.es/gato-siames.webp",
  name: "Anastacio",
  desc: " Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.",
  race: "Siamés",
};

const kittenData_2 = {
  image: "https://dev.adalab.es/sphynx-gato.webp",
  name: "Fiona",
  desc: "Produce fascinación y curiosidad. Exótico, raro, bello, extraño…hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.",
  race: "Sphynx",
};

const kittenData_3 = {
  image: "https://dev.adalab.es/maine-coon-cat.webp",
  name: "Cielo",
  desc: "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su  bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.",
  race: "Maine Coon",
};

const kittenOne = `<li class="card">
<article>
  <img class="card_img" src="${kittenData_1.image}"
    alt="gatito"
  />
  <h3 class="card_title">"${kittenData_1.name.toUpperCase()}</h3>
  <h4 class="card_race">"${kittenData_1.race}"</h4>
  <p class="card_description">"${kittenData_1.desc}
   </p>
</article>
</li>`;

const kittenTwo = `<li class="card">
              <img
                class="card_img"
                src="${kittenData_2.image}"
                alt="sphynx-cat"
              />
              <h3 class="card_title">"${kittenData_2.name.toUpperCase()}"</h3>
              <h4 class="card_race">"${kittenData_2.race}"</h4>
              <p class="card_description">"${kittenData_2.desc}
              </p>
          </li>`;

const kittenThree = `<li class="card">
              <img
              class="card_img"
              src= '${kittenData_3.image}'
                alt="maine-coon-cat"
              />
              <h3 class="card_title">"${kittenData_3.name.toUpperCase()}"</h3>
              <h4 class="card_race">"${kittenData_3.race}</h4>
              <p class="card_description">"${kittenData_3.desc}
              </p>
          </li>`;

listElement.innerHTML = kittenOne + kittenTwo + kittenThree;
const kittens = kittenOne + kittenTwo + kittenThree;

const buttonSearch = document.querySelector(".js-button-search");
const input_search_desc = document.querySelector(".js_in_search_desc");
const js_in_search_race = document.querySelector("js_in_search_race");
const labelMessageError = document.querySelector(".js-label-error");
const section = document.querySelector(".new-form");

const linkNewFormElement = document.querySelector(".js-plus");
const newForm = document.querySelector(".js-form");

const btnCancel = document.querySelector(".js-btn-cancel");
const btnAdd = document.querySelector(".js-btn-add");

const inputDesc = document.querySelector(".js-input-desc");
const inputPhoto = document.querySelector(".js-input-photo");
const inputName = document.querySelector(".js-input-name");
const inputRace = document.querySelector(".js-input-race");

// const urlKitten = document.querySelector(".js-input-photo");
// const descKitten = document.querySelector(".js-input-desc");
// const nameKitten = document.querySelector(".js-input-name");
// const raceKitten = document.querySelector(".js-input-race");

//////////-----------FUNCIONES--------------//////////

//--------Función--info nuevo gatito---------///////

function renderKitten(kittenData) {
  const result = `<li class="card">
 <img
   class="card_img"
   src="${kittenData.image}"
   alt=""
 />
 <h3 class="card_title">"${kittenData.name.toUpperCase()}"</h3>
 <h4 class="card_race js-race-preview">${kittenData.race}</h4>
 <p class="card_description">"${kittenData.desc}"
 </p>
</li>`;

  return result;
}

//-----Función---crear--nuevo--gatito-------//

function addNewKitten(event) {
  event.preventDefault();

  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueRace = inputRace.value;

  if (valueDesc === "" || valuePhoto === "" || valueName === "") {
    labelMessageError.innerHTML = "¡Uy! parece que has olvidado algo";
    labelMessageError.classList.remove("hiden");
  } else {
    labelMessageError.classList.add("hiden");

    listElement.innerHTML += renderKitten({
      image: valuePhoto,
      name: valueName,
      desc: valueDesc,
      race: valueRace,
    });

    // listElement.innerHTML += renderKitten();
    //   valuePhoto,
    //   valueDesc,
    //   valueName,
    //   valueRace
    // );
  }
}

//------------Función--filtrar--gatitos--de--la---UL---------///

const filterKitten = (event) => {
  event.preventDefault();
  listElement.innerHTML = "";
  const descrSearchText = input_search_desc.value;

  if (kittenData_1.desc.includes(descrSearchText)) {
    listElement.innerHTML += kittenOne;
  }
  if (kittenData_2.desc.includes(descrSearchText)) {
    listElement.innerHTML += kittenTwo;
  }
  if (kittenData_3.desc.includes(descrSearchText)) {
    listElement.innerHTML += kittenThree;
  }
};

//----Filtrar--por--raza--NOFUNCIONA------//

function renderRace() {
  const valueRace = inputRace.value;
  if (valueRace === "") {
    labelMessageError.innerHTML = "¡Uy que despiste, no sabemos su raza";
  } else {
    labelMessageError.classList.add("hiden");
  }
}

///------Funcion de evento RESET-------////

btnCancel.addEventListener("click", (event) => {
  inputDesc.value = "";
  inputName.value = "";
  inputPhoto.value = "";
  inputRace.value = "";
  section.classList.add("hiden");
});

//------Funcion de evento MOSTRAR/CERRAR--añadir gatito-----/////

function showNewCatForm() {
  newForm.classList.remove("collapsed");
}
function hideNewCatForm() {
  newForm.classList.add("collapsed");
}

function handleClickNewCatForm(event) {
  event.preventDefault();

  if (newForm.classList.contains("collapsed")) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}

///----------------EVENTOS-------------------------------/////

buttonSearch.addEventListener("click", filterKitten);

buttonSearch.addEventListener("click", renderRace);

linkNewFormElement.addEventListener("click", handleClickNewCatForm);

btnAdd.addEventListener("click", addNewKitten);

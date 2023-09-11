"use strict";

const listElement = document.querySelector(".js-list");

const kittenImage1 = 'https://dev.adalab.es/gato-siames.webp';
const kittenName1  = 'Anastacio';

const kittenDesc1 =
  ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenRace1= 'Siamés';



const kittenOne = `<li class="card">
<article>
  <img class="card_img" src="${kittenImage1}"
    alt="gatito"
  />
  <h3 class="card_title">"${kittenName1.toUpperCase()}</h3>
  <h4 class="card_race">"${kittenRace1}"</h4>
  <p class="card_description">"${kittenDesc1}
   </p>
</article>
</li>`;


const kittenImage2 = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenName2 = 'Fiona';
const kittenDesc2 =
  'Produce fascinación y curiosidad. Exótico, raro, bello, extraño…hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenRace2= 'Sphynx';

const kittenTwo = `<li class="card">
              <img
                class="card_img"
                src="${kittenImage2}"
                alt="sphynx-cat"
              />
              <h3 class="card_title">"${kittenName2.toUpperCase()}"</h3>
              <h4 class="card_race">"${kittenRace2}</h4>
              <p class="card_description">"${kittenDesc2}
              </p>
          </li>`;

const kittenImage3 = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenName3 = 'Cielo';
const kittenDesc3 =
  'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su  bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenRace3= 'Maine Coon';



const kittenThree = `<li class="card">
              <img
              class="card_img"
              src= '${kittenImage3}'
                alt="maine-coon-cat"
              />
              <h3 class="card_title">"${kittenName3.toUpperCase()}"</h3>
              <h4 class="card_race">"${kittenRace3}</h4>
              <p class="card_description">"${kittenDesc3}
              </p>
          </li>`;


listElement.innerHTML = kittenOne + kittenTwo + kittenThree;
const kittens = kittenOne + kittenTwo + kittenThree;

const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;
const result = document.querySelector ('.js-list');

console.log(result);

if( kittenDesc1.includes(descrSearchText) ) {
  result.innerHTML = kittenOne;
}

if( kittenDesc2.includes(descrSearchText) ) {
  result.innerHTML = kittenTwo;
}

if( kittenDesc3.includes(descrSearchText) ) {
  result.innerHTML = kittenThree;
}
if(descrSearchText === "") {
result.innerHTML = kittens;}

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');
const inputRace = document.querySelector('.js-input-race');

const btnAdd = document.querySelector('.js-btn-add');
btnAdd.addEventListener('click', (event) => {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML = '¡Uy! parece que has olvidado algo';
    labelMessageError.classList.remove('hiden');
  } else {
    labelMessageError.classList.add('hiden');
  }
  console.log (labelMessageError);
});
const valueRace = inputRace.value;
const section = document.querySelector('.new-form');

const btnCancel = document.querySelector('.js-btn-cancel');
btnCancel.addEventListener('click', (event) => {
inputDesc.value = "";
inputName.value = "";
inputPhoto.value = "";
inputRace.value = "";
section.classList.add('hiden');
});
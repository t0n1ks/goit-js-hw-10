import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const loader = document.querySelector('.loader');
const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const catImage = document.querySelector('.cat-image');
const breedName = document.querySelector('.breed-name');
const description = document.querySelector('.description');
const temperament = document.querySelector('.temperament');
const error = document.querySelector('.error');

// Fetch breeds and populate select options
async function populateBreeds() {
  try {
    loader.style.display = 'block';
    breedSelect.innerHTML = '';

    const breeds = await fetchBreeds();

    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });

    loader.style.display = 'none';
    breedSelect.style.display = 'block';
  } catch (error) {
    handleError();
  }
}

// Fetch and display cat information by breed
async function fetchAndDisplayCat() {
  const breedId = breedSelect.value;

  if (breedId) {
    try {
      loader.style.display = 'block';
      catInfo.style.display = 'none';

      const cat = await fetchCatByBreed(breedId);

      catImage.src = cat.url;
      breedName.textContent = cat.breeds[0].name;
      description.textContent = cat.breeds[0].description;
      temperament.textContent = cat.breeds[0].temperament;

      catInfo.style.display = 'block';
      loader.style.display = 'none';
    } catch (error) {
      handleError();
    }
  }
  
}

// Handle error
function handleError() {
  loader.style.display = 'none';
  error.style.display = 'block';
}

// Event listeners
breedSelect.addEventListener('change', fetchAndDisplayCat);

// Initialize the app
populateBreeds();

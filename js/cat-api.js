// debugger

const API_KEY = 'live_yJJgXppEDoms8PRuQx8sA35bNYUBrCYoqxUur118g8n0RW8lyrBNWSmtAZjOJXLR';

export async function fetchBreeds() {
  const url = 'https://api.thecatapi.com/v1/breeds';

  try {
    const response = await fetch(url, {
      headers: {
        'x-api-key': API_KEY
      }
    });

    if (response.ok) {
      const breeds = await response.json();
      return breeds;
    } else {
      throw new Error('Failed to fetch breeds');
    }
  } catch (error) {
    throw new Error('Failed to fetch breeds');
  }
}

export async function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

  try {
    const response = await fetch(url, {
      headers: {
        'x-api-key': API_KEY
      }
    });

    if (response.ok) {
      const cats = await response.json();
      return cats[0];
    } else {
      throw new Error('Failed to fetch cat by breed');
    }
  } catch (error) {
    throw new Error('Failed to fetch cat by breed');
  }
}



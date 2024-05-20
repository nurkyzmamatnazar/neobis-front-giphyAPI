const input = document.getElementById('search');

input.addEventListener('keydown', (e) => {
  const query = e.target.value;

  getResponse(query);
});

const getResponse = async (query) => {
  const APIKEY = "07tAOFhRI8klsWk0PnHcXLKHgTd6NUID";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${query}&limit=50&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

  const response = await fetch(url);
  const gifs = await response.json();
  const gifsBlock = document.getElementById('gifs');
  gifsBlock.innerHTML = '';
  
  gifs.data.forEach(gif => {
    const img = document.createElement('img');
    img.src = gif.images.fixed_height.url;
    img.alt = gif.title;
    img.classList.add('gif');
    gifsBlock.append(img);
    console.log(gif);
  });

  console.log(gifs);
};

getResponse()
  .catch(e => console.log(e));

function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Something went wrong while fetching data');
        }
      }
    };
    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

getData('./songs.json')
  .then((songs) => {
    console.log(songs);
    return getData('./artists.json');
  })
  .then((artists) => {
    console.log(artists);
    return getData('./genres.json');
  })
  .then((genres) => {
    console.log(genres);
    return getData('https://api.chucknorris.io/jokes/random');
  })
  .then((joke) => console.log(joke))
  .catch((err) => console.log(err));

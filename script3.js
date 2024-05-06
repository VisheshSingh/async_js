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

const AllPromises = Promise.all([
  getData('./songs.json'),
  getData('./artists.json'),
  getData('./genres.json'),
  getData('https://api.chucknorris.io/jokes/random'),
])
  .then((data) => {
    const [songs, artists, genres, joke] = data;
    console.log({ songs, artists, genres, joke });
  })
  .catch((err) => {
    console.log(err);
  });

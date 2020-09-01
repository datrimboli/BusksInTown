
let artistId = document.getElementById('secret').dataset.id
console.log(artistId)


axios.get(`/api/artists/${artistId}`)
  .then(({ data }) => {
    console.log(data)
    document.getElementById('test').innerHTML = `
    name: ${data.name}
    <br>
    genre: ${data.genre}
    `

  })
  .catch(err => console.log(err))
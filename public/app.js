console.log('hi')
// Let localStorage stuff exist so we can work with it
let artistLocal = JSON.parse(localStorage.getItem('artistLocal')) || []


axios.get('/api/busks')
  .then(({ data }) => {
    console.log(data)
      let sortedData = data.sort((a, b) => new Date(a.date) - new Date(b.date))
      console.log(sortedData)
    sortedData.forEach(busk => {

      let buskElem = document.createElement('tr')
      // buskElem.className = 'row'
      buskElem.innerHTML = `
        <th scope="row"><a href="/artists/${busk.artist.id}">${busk.artist.name}</a></th>
        <td>${busk.location}</td>
        <td>${busk.start}</td>
        <td>${busk.end}</td>
        <td>${busk.date}</td>
      `
    
      document.getElementById('busks').append(buskElem)
    })
    
  })
  .catch(err => console.log(err))


// Create a new busk

document.getElementById('addBusk').addEventListener('click', event => {
  event.preventDefault()
  console.log('pingh')


  axios.post('/api/busks', {
    date: document.getElementById('date').value,
    location: document.getElementById('location').value,
    start: document.getElementById('startTime').value,
    end: document.getElementById('endTime').value,
    artistId: document.getElementById('artistId').value
  })
    .then(({ data }) => {
      console.log(data)
          // let buskElem = document.createElement('tr')
          // buskElem.innerHTML = `
          //   <th scope="row"><a href="/artists/${data.artistId}">${document.getElementById('artistName').value}</a></th>
          //   <td>${document.getElementById('location').value}</td>
          //   <td>${document.getElementById('startTime').value}:00</td>
          //   <td>${document.getElementById('endTime').value}:00</td>
          //   <td>${document.getElementById('date').value}</td> 
          // `
          // document.getElementById('busks').append(buskElem)

          
    })
    .catch(err => console.log(err))
})

  
// create a new artist

document.getElementById('addArtist').addEventListener('click', event => {
  event.preventDefault()
  console.log('ping')

  axios.post('/api/artists', {
    name: document.getElementById('artistName').value,
    genre: document.getElementById('genre').value,
    bio: document.getElementById('bio').value,
    image_url: document.getElementById('imgUrl').value
  })
    .then(({ data }) => {
      console.log(data)
      let artistLocal = JSON.parse(localStorage.getItem('artistLocal')) || []
      let artistValue = data
      artistLocal.push(artistValue)
      console.log(artistLocal)
      console.log(JSON.stringify(artistLocal))
      localStorage.setItem('artistLocal', JSON.stringify(artistLocal))
      console.log('Artist Added')
      artistOptionsList()
      //starts here
      axios.post('/api/socials', {
        spotify: document.getElementById('spotify').value,
        twitter: document.getElementById('twitter').value,
        instagram: document.getElementById('instagram').value,
        youtube: document.getElementById('youtube').value,
        soundcloud: document.getElementById('soundcloud').value,
        facebook: document.getElementById('facebook').value,
        artistId: data.id

      })
        .then(({ data }) => {
          console.log('this works')
        })

        .catch(err => console.log(err))
    })

    .catch(err => console.log(err))
})

function artistOptionsList() {
  let artistLocal = JSON.parse(localStorage.getItem('artistLocal')) || []
  document.getElementById('artistId').innerHTML = '<option value="null">Select an Artist</option>'
  artistLocal.forEach(artist => {
    let artistElem = document.createElement('option')
    artistElem.textContent = artist.name
    artistElem.value = artist.id
    document.getElementById('artistId').append(artistElem)
  })
}

artistOptionsList()
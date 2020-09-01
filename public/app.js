console.log('hi')
let artistLocal = JSON.parse(localStorage.getItem('artistLocal')) || []

axios.get('/api/busks')
  .then(({ data }) => {
    console.log(data)

    data.forEach(busk => {

      let buskElem = document.createElement('tr')
      // buskElem.className = 'row'
      buskElem.innerHTML = `
        <th scope="row"><a href="/artists/${busk.artist.id}">${busk.artist.name}</a></th>
        <td>${busk.location}</td>
        <td>${busk.artist.genre}</td>
        <td>Start:${busk.start}-End:${busk.end}</td>
        <td>${busk.date}</td>
        <td>${busk.counter} <button class="btn btn-primary">I'm Attending!</button></td>  
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
        
          let buskElem = document.createElement('tr')
          // buskElem.className = 'row'
          buskElem.innerHTML = `
            <th scope="row">${document.getElementById('artistName').value}</th>
            <td>${document.getElementById('location').value}</td>
            <td>${document.getElementById('genre').value}</td>
            <td>Start:${document.getElementById('startTime').value}-End:${document.getElementById('endTime').value}</td>
            <td>${document.getElementById('date').value}</td>
            <td>0 <button class="btn btn-primary">I'm Attending!</button></td>  
          `
          document.getElementById('busks').append(buskElem)
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
    })

    .catch(err => console.log(err))
})



function artistOptionsList() {
  let artistLocal = JSON.parse(localStorage.getItem('artistLocal')) || []
  document.getElementById('artistOption').innerHTML = 'Select an Artist'
  artistLocal.forEach(artist => {
      let artistElem = document.createElement('option')
      artistElem.textContent = artist.name
      artistElem.value = artist.id
      document.getElementById('artistOption').append(artistElem)
  })
}

artistOptionsList()
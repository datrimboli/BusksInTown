console.log('hi')

axios.get('/api/busks')
  .then(({ data }) => {
    console.log(data)

    data.forEach(busk => {

      let buskElem = document.createElement('tr')
      // buskElem.className = 'row'
      buskElem.innerHTML = `
        <th scope="row">${busk.artist.name}</th>
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
      console.log('works')
    })

    .catch(err => console.log(err))
})
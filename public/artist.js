let artistId = document.getElementById('secret').dataset.id
console.log(artistId)


axios.get(`/api/artists/${artistId}`)
  .then(({ data }) => {
    console.log(data)

    document.getElementById('artist').innerHTML = `
    ${data.name}
    `
    
    document.getElementById('bandPhoto').innerHTML = `
    <img id="bandPhoto" src="${data.image_url}" alt="band photo">
    `
    document.getElementById('bandBio').innerHTML = `
      ${data.bio}
      `

    let sortedData = data.busks.sort((a, b) => new Date(a.date) - new Date(b.date))
    console.log(sortedData)

    
    
    // busks
    sortedData.forEach(busk => {
      
      let buskElem = document.createElement('tr')
      // buskElem.className = 'row'
      buskElem.innerHTML = `
      <th scope="row">${busk.location}</th>
      <td>${moment(busk.start, 'HH:mm').format('LT')}</td>
      <td>${moment(busk.end, 'HH:mm').format('LT')}</td>
      <td>${moment(busk.date).format('dddd, MMMM Do YYYY')}</td>
      
      `
      document.getElementById('busks').append(buskElem)
      
    })
    

    let facebook = data.social.facebook || '/'
    let instagram = data.social.instagram || '/'
    let spotify = data.social.spotify || '/'
    let soundcloud = data.social.soundcloud || '/'
    let twitter = data.social.twitter || '/'
    let youtube = data.social.youtube || '/'

    
        document.getElementById('socials').innerHTML = `
        
        <li class="list-group-item"><img style="background-color: lightblue;" height="28" width="28" src="https://unpkg.com/simple-icons@v3/icons/facebook.svg"/><a href="${facebook}" target="blank"> Facebook</a></li>
        <li class="list-group-item"><img style="background-color: pink;" height="28" width="28" src="https://unpkg.com/simple-icons@v3/icons/instagram.svg"/><a href="${instagram}" target="blank"> Instagram</a></li>
        <li class="list-group-item"><img style="background-color: lightgreen;" height="28" width="28" src="https://unpkg.com/simple-icons@v3/icons/spotify.svg"/><a href="${spotify}" target="blank"> Spotify</a></li>
        <li class="list-group-item"><img style="background-color: darkorange;" height="28" width="28" src="https://unpkg.com/simple-icons@v3/icons/soundcloud.svg"/><a href="${soundcloud}" target="blank"> Soundcloud</a></li>
        <li class="list-group-item"><img style="background-color: lightblue;" height="28" width="28" src="https://unpkg.com/simple-icons@v3/icons/twitter.svg"/><a href="${twitter}" target="blank"> Twitter</a></li>
        <li class="list-group-item"><img style="background-color: red;" height="28" width="28" src="https://unpkg.com/simple-icons@v3/icons/youtube.svg"/><a href="${youtube}" target="blank"> Youtube</a></li>
        `
    
    





    
  })
  .catch(err => console.log(err))
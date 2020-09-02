
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
      <td>${busk.start}</td>
      <td>${busk.end}</td>
      <td>${busk.date}</td>
      
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
        <h4>Socials</h4>
        <hr>
        <li><a href="${facebook}" target="blank">Facebook</a></li>
        <li><a href="${instagram}" target="blank">Instagram</a></li>
        <li><a href="${spotify}" target="blank">Spotify</a></li>
        <li><a href="${soundcloud}" target="blank">Soundcloud</a></li>
        <li><a href="${twitter}" target="blank">Twitter</a></li>
        <li><a href="${youtube}" target="blank">Youtube</a></li>
        `
    
    





    
  })
  .catch(err => console.log(err))
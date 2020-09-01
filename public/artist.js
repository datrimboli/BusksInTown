
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

    document.getElementById('socials').innerHTML = `
    <h4>Socials</h4>
    <hr>
    <li><a href="${data.social.facebook}">Facebook</a></li>
    <li><a href="${data.social.instagram}">Instagram</a></li>
    <li><a href="${data.social.spotify}">Spotify</a></li>
    <li><a href="${data.social.soundcloud}">Soundcloud</a></li>
    <li><a href="${data.social.twitter}">Twitter</a></li>
    <li><a href="${data.social.youtube}">Youtube</a></li>
    
    `


    // busks
    data.busks.forEach(busk => {

      let buskElem = document.createElement('tr')
      // buskElem.className = 'row'
      buskElem.innerHTML = `
        <th scope="row">${busk.location}</th>
        <td>Start:${busk.start}-End:${busk.end}</td>
        <td>${busk.date}</td>
        <td>${busk.counter} <button class="btn btn-primary">I'm Attending!</button></td>  
      `
      document.getElementById('busks').append(buskElem)

    })
  
    
   





    
  })
  .catch(err => console.log(err))

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
    <p>${data.bio}</p> 
    
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
    

    let facebook = data.social.facebook || '/'
    let instagram = data.social.instagram || '/'
    let spotify = data.social.spotify || '/'
    let soudcloud = data.social.soudcloud || '/'
    let twitter = data.social.twitter || '/'
    let youtube = data.social.youtube || '/'

    
        document.getElementById('socials').innerHTML = `
        <h4>Socials</h4>
        <hr>
        <li><a href="${facebook}">Facebook</a></li>
        <li><a href="${instagram}">Instagram</a></li>
        <li><a href="${spotify}">Spotify</a></li>
        <li><a href="${soundcloud}">Soundcloud</a></li>
        <li><a href="${twitter}">Twitter</a></li>
        <li><a href="${youtube}">Youtube</a></li>
        
        `
    
    





    
  })
  .catch(err => console.log(err))
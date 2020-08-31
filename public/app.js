console.log('hi')

axios.get('/api/busks')
  .then(({ data }) => {
    console.log(data)

    data.forEach(busk => {

      let buskElem = document.createElement('div')
      buskElem.className = 'row'
      buskElem.innerHTML = `
        <div class="col-lg-2">
          <h2>Artist Name</h2>
          
            <p data-artistId="${busk.artist.id}">${busk.artist.name}</p>
          
        </div>

        <div class="col-lg-2">
          <h2>Addresses</h2>

          <p>${busk.location}</p>
          
        </div>
        <div class="col-lg-2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolore, temporibus incidunt aspernatur odio
            praesentium culpa consectetur repellat recusandae voluptatibus quasi eos natus sed, iure, eaque illum
            excepturi consequatur delectus.</p>
        </div>
        <div class="col-lg-2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolore, temporibus incidunt aspernatur odio
            praesentium culpa consectetur repellat recusandae voluptatibus quasi eos natus sed, iure, eaque illum
            excepturi co
            nsequatur delectus.</p>
        </div>
        <div class="col-lg-2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolore, temporibus incidunt aspernatur odio
            praesentium culpa consectetur repellat recusandae voluptatibus quasi eos natus sed, iure, eaque illum
            excepturi consequatur delectus.</p>
        </div>

        <div class="col-lg-2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolore, temporibus incidunt aspernatur odio
            praesentium culpa consectetur repellat recusandae voluptatibus quasi eos natus sed, iure, eaque illum
            excepturi consequatur delectus.</p>
        </div>
      `
      document.getElementById('test').append(buskElem)
    })

  })
  .catch(err => console.log(err))
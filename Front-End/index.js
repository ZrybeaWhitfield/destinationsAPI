//make a req to get("/destinations")
//create a card for each destinations
//append to wish list

const HEROKU_API_ROOT_URL = "https://z-destination-api.herokuapp.com"

const destination_url = `${HEROKU_API_ROOT_URL}/destinations`

fetch(destination_url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    for(destination of data){
      const {destinationName, photo, location, description} = destination

      const wishlistContainer = document.getElementById("wishlist_container")

      const card = document.createElement('div')
      card.classList.add('card')
      card.style.width = "18rem"

      card.innerHTML = `
      <img class="card-img-top" src=${photo} alt=${destinationName}>
      <div class="card-body">
      <h5 class="card-title">${destinationName}</h5>
      <p class="card-text">${location} \n${description ? description : ""}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    `

    wishlistContainer.appendChild(card)
    }

  })

document.querySelector("#submitButton").addEventListener("click", submitWishList)

let wishListItems = document.querySelector(".wishListItems")

function submitWishList(){
  let destinationName = document.querySelector("#destinationName").value
  let location = document.querySelector("#location").value
  let description = document.querySelector("#description").value

// creates encompassing SECTION
  let card = document.createElement("SECTION")
  card.classList.add("card")

// creates image within section
let url = `https://api.unsplash.com/search/photos?query=${destinationName}&client_id=opZRyMCbQoA8Pdn-wYt1-tDvRaBhQX557zTpKOEDBCo`

let image = document.createElement("IMG")
image.classList.add("card-img-top")

fetch(url)
.then(res => res.json())
.then(data => {
  shuffleArray(data.results)
  image.src = data.results[0].urls.small
})

if(image.src === ""){
  image.src = "https://media3.giphy.com/media/JVvNVItg3I51n08Th2/200w.webp?cid=ecf05e47u5w5oec39jadsahbn687mh3b985e69s280zfs4ej&rid=200w.webp&ct=g"
}

//creates cardBody section
let cardBody = document.createElement("SECTION")
cardBody.classList.add("card-body")

//creates title
let dest = document.createElement("H5")
dest.classList.add("card-title")
dest.innerText = destinationName

//creates Subtitle
let loc = document.createElement("H6")
loc.classList.add("card-subtitle", "mb-2", "text-muted")
loc.innerText = location

//creates description
let desc = document.createElement("P")
desc.classList.add("card-text")
desc.innerText = description

//create remove
// let removeBttn = document.createElement("A")
// removeBttn.classList.add("btn", "btn-primary", "removeCard")
// removeBttn.innerText = "Remove"

//assemble everthing
cardBody.append(dest, loc, desc)
card.append(image, cardBody)
wishListItems.appendChild(card)
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// document.querySelector(".removeCard").addEventListener("click", removeCard)
// }

// function removeCard(){
//   let parent = event.target.parentNode
//   parent.remove()
// }

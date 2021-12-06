const {destinations} = require("./db.js")
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(express.static('public'))
app.use(cors())
app.use(bodyParser.json())
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
})

app.get('/', (req, res) =>{
  res.render("index.ejs")
})


//tester page
app.get('/destinations', (req, res) => {
  res.send(destinations)
})

app.post('/destinations', (req, res) =>{
  const {destinationName, location, description} = req.body
  console.log(req.body);

  if(!destinationName || destinationName.length === 0 || !location || location.length === 0 ){
    return res
    res.status(400).json({message: "Name and location are both required"})
  }

  const dest = {destinationName, location}
  //
  // if(photo && photo.length !== 0){
  //   dest.photo = photo
  // }

  if(description && description.length !== 0){
    dest.description = description
  }


  destinations.push(dest)

  console.log(destinations);

  res.redirect('/destinations')
  // res.redirect('/')
})

// app.put('/destinations', (req, res) =>{
//
// })

// app.delete()

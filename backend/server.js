require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000
const cors = require("cors")
const db = require("./models")

const start = () => {
  try {
    db.sequelize.sync().then(() => {
      app.listen(PORT, () => {
        console.log(`Server is running on PORT ${PORT}`)
      })
    })
  } catch (error) {
    console.log(error)
  }
}

start()

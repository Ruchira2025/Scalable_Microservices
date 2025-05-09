const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/users/:userId', (req, res) => {
  res.json({ registered: true })
})

app.listen(4001, () => {
  console.log('User Service mock running on port 4001')
})


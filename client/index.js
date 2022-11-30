// Require packages
const express = require('express')
const cors = require('cors')

// App instance
const app = express()

// Middleware
app.use(express.json())
app.use(cors())

app.listen(6000, () => console.log(`docked and loaded on 6000`))

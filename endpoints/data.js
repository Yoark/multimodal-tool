const express = require('express')
const router = express.Router()
const { spawn } = require('child_process')

// Body Parser Middleware
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

router.route('/getScore').all(jsonParser).post(async (req, res) => {
  const newData = {test: "testvalue"}
  console.log(req.body.test) 
  // const newD = req.body.test // "testvalue"
  let dataToSend
  let largeDataSet = []
  // spawn new child process to call the python script
  // JSON.stringify(
  const python = spawn('python', [`./compute/compute_score.py`, `--refs_file`, JSON.stringify(newData)])

  // collect data from script
  python.stdout.on('data', function (data) {
    console.log('Pipe data from python script ...')
    //dataToSend =  data;
    largeDataSet.push(data)
  })

  // in close event we are sure that stream is from child process is closed
  python.on('close', (code) => {
    // console.log(`child process close all stdio with code ${code}`)
    // console.log({largeDataSet})
    // console.log(JSON.parse(`'${largeDataSet.join('')}'`))
    // console.log(typeof(largeDataSet.join('')))
    // send data to browser
    res.send(largeDataSet.join(''))
  })
})


module.exports = router

const express = require('express')
const router = express.Router()
const { spawn } = require('child_process')
const sample_val_conv = require('../frontend/public/data/val_annots.json')

// Body Parser Middleware
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

router.route('/getScore').all(jsonParser).post(async (req, res) => {
  try{
  // const newData = JSON.stringify({test: "testvalue"})
  const newData = req.body.test
  // console.log(sample_val_conv)
  // console.log({newData})
  // console.log(typeof(newData))
  // console.log(JSON.stringify(newData))
  // console.log(typeof(JSON.stringify(newData)))
  console.log('in endpoint')
  const newDataJ = JSON.stringify(newData)
  // console.log(req.body.test) 
  // const newD = req.body.test // "testvalue"
  // let dataToSend
  let largeDataSet = []
  // spawn new child process to call the python script
  // JSON.stringify(
  // const python = spawn('python3', [`./endpoints/computescore.py`, `--gens_file`, newDataJ], 
  //                                 {shell: true, 
  //                                  maxBuffer: 5 * 10240 * 1024})//, `--refs_file`, JSON.stringify(sample_val_conv)])
  const python = spawn('python3', [`./endpoints/computescore.py`], 
                                  {shell: true, 
                                   maxBuffer: 5 * 10240 * 1024})//, `--refs_file`, JSON.stringify(sample_val_conv)])
  // const python = spawn('python', [`./compute/script3.py`, `--refs_file`, newData])
  // const python = spawn('python3', [`./endpoints/script3.py`, `--refs_file`, newDataJ])

  // collect data from script
  python.stdout.on('data', function (data) {
    console.log('Pipe data from python script ...')
    //dataToSend =  data;
    largeDataSet.push(data)
  })

  // in close event we are sure that stream is from child process is closed
  python.on('close', (code) => {
    console.log(largeDataSet.join(''))
    // console.log(`child process close all stdio with code ${code}`)
    // console.log({largeDataSet})
    // console.log(JSON.parse(`'${largeDataSet.join('')}'`))
    // console.log(typeof(largeDataSet.join('')))
    // send data to browser
    res.send(largeDataSet.join(''))
  })
  }
  catch(e) {
    console.log(e)
  }
})


module.exports = router

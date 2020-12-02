import React, {useState} from 'react'

function InstanceCard({instance, imgurl}) {
  // const [image, setImage] = useState()
  // const path = '../data/image_val_100/' + instance.img_fn
  // import(path).then(image => setImage(image.default)).catch(e=> console.log(e))
  // const image = require(imgurl)
  const baseURL = '/data/image_val_200/'
  const imgPath = baseURL + instance.img_fn
  // console.log(imgPath)
  return (
    <div className='card-container'>
      {/* <img src={imgPath} alt='place holder' /> */}
      <p>Event 1: {instance.event}</p>
      <p>Scene: {instance.place}</p>
      <style jsx='true'>
        {`
        .card-container {
          width: 200px;
          padding: 5px;
          margin: 5px;
          border: 1px solid black;
        }
        `}
      </style>
    </div>
  )
}

export default InstanceCard
